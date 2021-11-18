const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
const { uploadFile, uploadNFT } = require('../../s3')
const { query,execute } = require("../../pool");
const { productInfo_sql,prdctDetail_sql,productNum_sql,nftInsert_sql,auction_option_info } = require('../../sql/mint')
const {successData,errorData} = require('../../returnData');
const { getCategorySql} = require('../../sql/main')

// const INSERT = `INSERT INTO nft (${x}) VALUES(${x});`  
// const SELECT = `SELECT * FROM table WHERE ?=${x}`

const CONTRACT_ADDRESS = '0xe7aB6CD5318F26f1610c21Fa49742451E51789B3'
const config = require('../../klaytn/config');
const caver = config.caver;
const developerKey = config.developerKey;
const tokenURI = 'tokenURI'
const kip17 = new caver.kct.kip17(CONTRACT_ADDRESS);

const product_no = `B108Aw0001`
// const next_product_no =  product_no.substr(0,6)+(Number('0x'+product_no.substr(6,4))+1).toString(16);

const keyring = caver.wallet.keyring.createFromPrivateKey(developerKey);
if (!caver.wallet.getKeyring(keyring.address)) {
  const singleKeyRing = caver.wallet.keyring.createFromPrivateKey(developerKey);
  caver.wallet.add(singleKeyRing);
}
//product_no, name, explain, creater, date, likes, type, 
//total_qty, leftover, symbol, contractAddr, tokenURI



// 상품 등록정보 넣기
const mint_nft = async(req,res)=>{
  const {title,description,creater,symbol,type,category,season,image,options,deadline,extension} = req.body
  const date =new Date().toLocaleString().replace('.','-').replace('.','-').replace('.','').replace('오후','').replace('오전','').replace(' ','').replace(' ','').replace(' ','')
  
  // console.log("test1",date)
  const year = new Date().getFullYear(); // 년도 가져오기
  const yearCode = String.fromCharCode(year-1956); 
  const productCode = category+yearCode+season; // 상품 상세코드 앞 6자리
  const total_qty="30";
  let getLastProductNo;
  let optionSql=''; 

  // 상품 상세코드 얻기
  const getLastProduct = await query(productNum_sql(category))
  if(getLastProduct[0]==undefined){
    getLastProductNo = productCode+'0000';
    productNo = getLastProductNo
  }else{
    getLastProductNo = getLastProduct[0].product_no;
    productNo = getLastProductNo.substr(0,6)+(Number('0x'+getLastProductNo.substr(6,4))+1).toString(16);
  }

  //product
  productParams =[productNo,title, description, creater,date,type,total_qty,symbol]
  console.log(productParams)
  const productInsert = await execute(productInfo_sql(total_qty),productParams)
  

  // //auction
  // auctionParams = [deadline,extension];
  // const auctionOption = await execute(auction_option_info(),auctionParams)
  // console.log(auctionOption)


  // // product_detail
  // req.body['options'].forEach(v=>{
  //   const option = JSON.parse(v)
  //   const {color,size,qty,price}= option;
  //   optionSql+=`INSERT INTO product_detail(getProduct_no,color,size,qty,rest,price) VALUES(${productNo},${color},${size},${qty},${qty},${price});\n`
  // })
  // const product_detail = await query(optionSql) //이게 실행
  
  // const totalQty = qty.reduce((a,b) => (a+b));
  // console.lg(totalQty)

  // const id_result = await query(productNum_sql())
  

  // const toAddress='0x25390A007D19Ce6014F47ce4b79FaAffbf3Df3D3'

  // const insertResult = await execute(nftInsert_sql(),nftInsertparams);
  // console.log("hh",insertResult)
  // const tokenId = insertResult.insertId;
  // // image upload s3
  // const files = [];   //이미지 uri를 담을 배열
  //   for(let i = 0; i<req.files.length; i++){
  //       const v = req.files[i];
  //       const image =await uploadFile(v,getProductNo,i+1);  //S3업로드
  //       files.push(image.Location)
  //       await unlinkFile(v.path)       //upload에 있는 img파일 지우기
  //     }

    // let imageSql =''
    // files.forEach(v=>{
    //   imageSql+=`INSERT INTO product_image (product_no,img) VALUES('${tokenId}','${v}');\n`
    // }) 
    //여기 tokenId는 신경쓰지 말래요 그 상품상세코드임

    // await query(imageSql);

    // 프론트에서 발행하면 생산자를 넣어줄 필요가 없지만. 모든 발행을 서버에서 개발자 privateKey로 진행해서 
    // 블록체인 네트워크 상에서 토큰 생산자가 상품제작자가 아닌 개발자가 되므로.. 토큰 정보 안에 넣어준다. 사실 안 넣어줘도 됨. 
    // 닉네임을 넣어줄지 말지는 회의 후 결정.
    // const metadata = await uploadNFT(tokenId,name,explain,creater,files); 
    // const tokenURI = metadata.Location;  

  const data = {
    success:true,
    // tokenId,
    // tokenURI
  }
  res.json(data)
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
