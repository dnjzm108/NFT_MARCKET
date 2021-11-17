const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
const { uploadFile, uploadNFT } = require('../../s3')
const { query,execute } = require("../../pool");
const { productInfo_sql,prdctDetail_sql,productNum_sql,nftInsert_sql,auction_initial_info } = require('../../sql/mint')
const {successData,errorData} = require('../../returnData');
const { getCategorySql} = require('../../sql/main')

// const INSERT = `INSERT INTO nft (${x}) VALUES(${x});`  
// const SELECT = `SELECT * FROM table WHERE ?=${x}`

const CONTRACT_ADDRESS = '0xe7aB6CD5318F26f1610c21Fa49742451E51789B3'
const config = require('../../klaytn/config');
const caver = config.caver;
const developerKey = config.developerKey;

const kip17 = new caver.kct.kip17(CONTRACT_ADDRESS);

const product_code = `10`


const keyring = caver.wallet.keyring.createFromPrivateKey(developerKey);
if (!caver.wallet.getKeyring(keyring.address)) {
  const singleKeyRing = caver.wallet.keyring.createFromPrivateKey(developerKey);
  caver.wallet.add(singleKeyRing);
}

const mint_nft = async(req,res)=>{
  console.log("mint_nft",req);
  const {name,explain,creater,optionColor,optionSize,optionEtc,type} = req.body;
 
  const productOpparams = [optionColor,optionSize,optionEtc]
  const productOp = await execute(productInfo_sql(),productOpparams)
  // console.log("ff",productOp);
  // const id_result = await query(productNum_sql())
  
  // const toAddress='0x25390A007D19Ce6014F47ce4b79FaAffbf3Df3D3'

  // const nftInsertparams = [name,explain,creater,category];
  // const insertResult = await execute(nftInsert_sql(),nftInsertparams);
  // console.log("hh",insertResult)
  // const tokenId = insertResult.insertId;
  // image upload s3
  // const files = [];   //이미지 uri를 담을 배열
  //   for(let i = 0; i<req.files.length; i++){
  //       const v = req.files[i];
  //       const image =await uploadFile(v,tokenId,i+1);  //S3업로드
  //       files.push(image.Location)
  //       await unlinkFile(v.path)       //upload에 있는 img파일 지우기
  //     }

    // let imageSql =''
    // files.forEach(v=>{
    //   imageSql+=`INSERT INTO product_image (product_no,img) VALUES('${tokenId}','${v}');\n`
    // }) //여기 tokenId는 신경쓰지 말래요 그 상품상세코드임

    // await query(imageSql);

    // 프론트에서 발행하면 생산자를 넣어줄 필요가 없지만. 모든 발행을 서버에서 개발자 privateKey로 진행해서 
    // 블록체인 네트워크 상에서 토큰 생산자가 상품제작자가 아닌 개발자가 되므로.. 토큰 정보 안에 넣어준다. 사실 안 넣어줘도 됨. 
    // 닉네임을 넣어줄지 말지는 회의 후 결정.
    // const metadata = await uploadNFT(tokenId,name,explain,creater,creater_nick,files); 
    // const tokenURI = metadata.Location;  

  const data = {
    success:true,
    // tokenId,
    // tokenURI
  }
  res.json(data)
}


const getCategory =async(req,res)=>{
  const categorySql = getCategorySql();
  const categoryResult = await query(categorySql);
  const category = clearCategory(categoryResult); 
  const data = {
    category
  }
  res.json(successData(data))
}


//auction 에 데이터 넣기
const auction_info = async(req,res)=>{
  let {bid, deadline, option} = req.body
  let params = [deadline,option]
  // let insert_auction_info = await execute(auction_initial_info(product_code),params)

  const data = {
    success:true,
    bid,
    deadline,
    option
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
  auction_info,
  getCategory,
}
