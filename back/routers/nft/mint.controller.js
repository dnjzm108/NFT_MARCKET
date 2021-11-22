const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
const { uploadFile, uploadMetaData } = require('../../s3')
const { query,execute } = require("../../pool");
const { productInfo_sql,prdctDetail_sql,productNum_sql,nftInsert_sql,auction_option_info } = require('../../sql/mint')
const {successData,errorData} = require('../../returnData');
const { getCategorySql} = require('../../sql/main')
const { deployNFT } = require('../../klaytn/KIP17');




const config = require('../../klaytn/config');
const caver = config.caver;
const developerKey = config.developerKey;

const keyring = caver.wallet.keyring.createFromPrivateKey(developerKey);
if (!caver.wallet.getKeyring(keyring.address)) {
  const singleKeyRing = caver.wallet.keyring.createFromPrivateKey(developerKey);
  caver.wallet.add(singleKeyRing);
}



// 상품 등록정보 넣기
const mint_nft = async(req,res)=>{
  const {name,explain,creater,symbol,type,category,season,image,options,deadline,extension} = req.body

  let sell_type;

  if(type=="true" || type==true || type){
    sell_type = "buy"
  }
  if(type=="false" || type==false || !type){
    sell_type = "auction"
  }


  //현재 날짜,시간 형식에 맞춰 가져오기
  const year = new Date().getFullYear(); // 년도 가져오기
  const yearCode = String.fromCharCode(year-1956); // 년도를 코드로

  const productCode = category+yearCode+season; // 상품 상세코드 앞 6자리
  
  let getLastProductNo; 
  let optionSql=''; 

  // 상품 상세코드 얻기
  const getLastProduct = await query(productNum_sql(category))// 같은 카테고리 내에서 맨 마지막 로우 가져옴
  if(getLastProduct[0]==undefined){ // 해당 카테고리 로우가 없으면 
    getLastProductNo = productCode+'0000';
    productNo = getLastProductNo
  }else{// 해당 카테고리 로우가 있으면
    getLastProductNo = getLastProduct[0].product_no;
    productNo = getLastProductNo.substr(0,6)+(Number('0x'+getLastProductNo.substr(6,4))+1).toString(16);
  }
  console.log('상품번호')
  console.log(productNo)

  const contract_address = deployNFT(name,symbol);
  console.log('컨트랙트 주소')
  console.log(contract_address)
  

  // product 테이블 
  let getOption = req.body['options'];
  let total_qty = 0; 
  getOption.forEach(v=>{
    const {qty} = JSON.parse(v)
    total_qty+=Number(qty);
  })

  const leftover = total_qty;
  const made_from = creater;

  let productParams =[productNo,name, explain, made_from,date,sell_type,total_qty,leftover,symbol,contract_address]
  const productInsert = await execute(productInfo_sql(),productParams)
  console.log('프로덕트 인설트 되었는지')
  console.log(productInsert)

  // product_detail 테이블
  if(type=="true" || type==true || type){ // 일반 상품. (경매상품의 경우 수량과 가격이 없으므로 확인해줌)
    getOption.forEach(v=>{
      const option = JSON.parse(v)
      const {color,size,qty,price}= option;
      optionSql+=`INSERT INTO product_detail (product_no,color,size,qty,rest,price) VALUES("${productNo}","${color}","${size}",${qty},${qty},${price});\n`
    
    })
  }

  if(type=="false" || type==false || !type){ // 경매 상품
    optionSql=`INSERT INTO product_detail (product_no,color,size,qty,rest,price) VALUES("${productNo}","${color}","${size}",${qty},${qty},${price});\n`
  }
  const product_detail = await query(optionSql)

  
  const product_id = product_detail.insertId; //auction 테이블에서 참조하기 위함
  

  // auction 테이블
  if(sell_type=="auction"){ // 경매상품인 경우에만 auction 테이블에 넣어줌
    console.log("auction_table_inserted")
    const auctionParams = [product_id,deadline,extension];
    console.log('옥션 파라미터 확인')
    console.log(auctionParams)
    const auctionOption = await execute(auction_option_info(),auctionParams)
  }

  
  // image upload s3
  const images = [];  //이미지 uri를 담을 배열
    for(let i = 0; i<req.files.length; i++){
        const v = req.files[i];
        const image =await uploadFile(v,productNo,i+1);  //S3업로드
        images.push(image.Location)
        await unlinkFile(v.path) //upload에 있는 img파일 지우기
      }

    let imageSql ='' 
    images.forEach(v=>{
      imageSql+=`INSERT INTO product_image (product_no,img) VALUES("${productNo}","${v}");\n`
    }) 
    await query(imageSql);
    const metadata = await uploadMetaData(productNo,name,explain,creater,images); 
    const tokenURI = metadata.Location;  
    console.log('토큰URI 잘 나오는지 확인')
    console.log(tokenURI)

  const data = {
    // success:true,
    // tokenId,
    // tokenURI
  }
  // res.json(successData(data))
}

// 카테고리 가져오기
const getCategory =async(req,res)=>{
  const categorySql = getCategorySql();
  const categoryResult = await query(categorySql);
  const category = clearCategory(categoryResult); 
  const data = {
    category
  }
  res.json(successData(data))
}
function clearCategory(category){
  let categoryTemp = {};
  const bigCategory = new Set(category.map(v=>{ 
    const {b_code,b_name} = v;
    return JSON.stringify({b_code,b_name})
  }))

  bigCategory.forEach(v=>{
    const {b_code,b_name} = JSON.parse(v);
    categoryTemp[b_code] = {
      name:b_name, 
      code:b_code,
      list:[]
    }
  })

  category.forEach(v=>{
    const {m_name,m_code,b_code} = v;
    categoryTemp[b_code].list.push({name:m_name, code:`${b_code}${m_code}`})
  })
  return  Object.entries(categoryTemp).map(v=>v[1]); 
}


module.exports={
  mint_nft,
  getCategory,
}
