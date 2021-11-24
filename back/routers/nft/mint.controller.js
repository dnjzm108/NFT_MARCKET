const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
const { uploadFile, uploadMetaData } = require('../../s3')
const { query,execute } = require("../../pool");
const { productInfo_sql,prdctDetail_sql,productNum_sql,nftInsert_sql,auction_option_info } = require('../../sql/mint')
const {successData,errorData} = require('../../returnData');
const { getCategorySql} = require('../../sql/main')
const { deployNFT } = require('../../klaytn/KIP17');
const {startDeadline,} = require('../../auction'); 



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
  const {start_price,name,explain,creater,symbol,type,category,season,image,options,deadline,extension} = req.body

  let sell_type;

  if(type=="true" || type==true){
    sell_type = "buy"
  }else if(type=="false" || type==false){
    sell_type = "auction"
  }


  //현재 날짜,시간 형식에 맞춰 가져오기
  const year = new Date().getFullYear(); // 년도 가져오기
  const yearCode = String.fromCharCode(year-1956); // 년도를 코드로

  const productCode = category+yearCode+season; // 상품 상세코드 앞 6자리
  
  let getLastProductNo; 
  let optionSql='';
  let productNo='';

  // // 상품 상세코드 얻기
  const time2 = new Date().getTime();
  const getLastProduct = await query(productNum_sql(category))// 같은 카테고리 내에서 맨 마지막 로우 가져옴
  if(getLastProduct[0]==undefined){ // 해당 카테고리 로우가 없으면 
    getLastProductNo = productCode+'0000';
    productNo = getLastProductNo
  }else{// 해당 카테고리 로우가 있으면
    getLastProductNo = getLastProduct[0].product_no;
    const nextProductNo = (Number('0x'+getLastProductNo.substr(6,4))+1).toString(16).toUpperCase().padStart(4,'0');
    productNo = getLastProductNo.substr(0,6)+nextProductNo;
  }

  const time3 = new Date().getTime();

  console.log('이전 상품코드 불러오는 쿼리 시간',time3-time2);

  const contract_address = await deployNFT(name,symbol);

  const time4 = new Date().getTime();

  console.log('nft 배포 시간',time4-time3);

  // // product 테이블 
  let total_qty = 0; 
  let getOption = req.body.options;
  if(typeof getOption=='string'){
    getOption=[getOption]
    if(sell_type=='buy'){
      total_qty=JSON.parse(getOption[0]).qty
    }else{
      total_qty=1;
    }
  }else{ 
    getOption.forEach(v=>{
      const {qty} = JSON.parse(v)
      total_qty+=Number(qty);
    })
  }

  
  let productParams =[productNo,name, explain, creater,sell_type,total_qty,total_qty,symbol,contract_address]
  const productInsert = await execute(productInfo_sql(),productParams)
  
  const time5 = new Date().getTime();

  console.log('상품 등록 쿼리 시간',time5-time4);

  // product_detail 테이블
  if(type=="true" || type==true){ // 일반 상품. (경매상품의 경우 수량과 가격이 없으므로 확인해줌)
    getOption.forEach(v=>{
      const option = JSON.parse(v)
      const {color,size,qty,price}= option;
      optionSql+=`INSERT INTO product_detail (product_no,color,size,qty,rest,price) VALUES("${productNo}","${color}","${size}",${qty},${qty},${price});\n`
    })
      optionSql+='INSERT INTO product_count (product_no,num) VALUES '
    for(let i = 1; i<=total_qty; i++){
      optionSql+=`("${productNo}",${i})`
      if(i<total_qty){
        optionSql+=',\n'
      }else{
        optionSql+=';'
      }
    }
  }

  
  if(type=="false" || type==false ){ // 경매 상품
    const {color,size} = JSON.parse(getOption[0]); 
    optionSql=`INSERT INTO product_detail (product_no,color,size,qty,rest,price) VALUES("${productNo}","${color}","${size}","1","1","${start_price}");\n`
    optionSql+=`INSERT INTO product_count (product_no,num) VALUES("${productNo}",1);\n`
  }
  const product_detail = await query(optionSql)
  const product_id = product_detail[0].insertId; //auction 테이블에서 참조하기 위함
  
  
  const time6 = new Date().getTime();

  
  console.log('상품 디테일이랑 상품 카운트 넣는시간',time6-time5);

  
  // auction 테이블
  if(sell_type=="auction"){ // 경매상품인 경우에만 auction 테이블에 넣어줌
    const auctionParams = [product_id,deadline,extension];
    const auctionOption = await execute(auction_option_info(),auctionParams)
    const auction_id = auctionOption.insertId;
    startDeadline(auction_id,productNo,deadline);
  }
  
  const time7 = new Date().getTime();

  
  console.log('경매 DB에 넣고 마감설',time7-time6);
  
  
  // image upload s3
  const images = [];  //이미지 uri를 담을 배열
  for(let i = 0; i<req.files.length; i++){
    const v = req.files[i];
    const image =await uploadFile(v,productNo,i+1);  //S3업로드
    images.push(image.Location)
    await unlinkFile(v.path) //upload에 있는 img파일 지우기
  }
  
  const time8 = new Date().getTime();
  console.log('이미지 넣는 s3',time8-time7);

  
  
  let imageSql ='' 
  images.forEach(v=>{
    imageSql+=`INSERT INTO product_image (product_no,img) VALUES("${productNo}","${v}");\n`
  }) 
  await query(imageSql);
  
  const time9 = new Date().getTime();
  console.log('이미지 넣는 쿼리',time9-time8);

  
  const metadata = await uploadMetaData(productNo,name,explain,creater,images); 
  const tokenURI = metadata.Location;  
  const updateTokenURI = `UPDATE product SET tokenURI='${tokenURI}' WHERE product_no='${productNo}'`
  await query(updateTokenURI);
  
  const time10 = new Date().getTime()
  console.log('토큰URI 넣는 쿼리, s3',time10-time9);
    

    const data = {
      productNo,
      tokenURI,
      contract_address
    }



  res.json(successData(data))
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
