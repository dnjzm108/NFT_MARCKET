const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
const { uploadFile, uploadNFT } = require('../../s3')
const { query,execute } = require("../../pool");
const { productInfo_sql,prdctDetail_sql,productNum_sql,nftInsert_sql } = require('../../sql/mint')
const {successData,errorData} = require('../../returnData');


// const INSERT = `INSERT INTO nft (${x}) VALUES(${x});`  
// const SELECT = `SELECT * FROM table WHERE ?=${x}`

const CONTRACT_ADDRESS = '0xe7aB6CD5318F26f1610c21Fa49742451E51789B3'
const config = require('../../klaytn/config');
const caver = config.caver;
const developerKey = config.developerKey;

const kip17 = new caver.kct.kip17(CONTRACT_ADDRESS);



const keyring = caver.wallet.keyring.createFromPrivateKey(developerKey);
if (!caver.wallet.getKeyring(keyring.address)) {
  const singleKeyRing = caver.wallet.keyring.createFromPrivateKey(developerKey);
  caver.wallet.add(singleKeyRing);
}

// execute는 params를 순서대로 받아서 쿼리문의 ?에 넣어주는거
// query는 select에다가 쓰는거. 근데 그냥 execute로만 사용하면 된다고 하심
const mint_nft = async(req,res)=>{
  // console.log("mint_nft",req);
  const {name,explain,creater,optionColor,optionSize,optionEtc,type} = req.body;
  const category = 'A103As0000';
  const productOpparams = [optionColor,optionSize,optionEtc]
  const productOp = await execute(prdctDetail_sql(),productOpparams)
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

const maincate = async(req,res)=>{
  const result = await query(`select * from bigcategory`) 
  res.json(successData(result))
}

const middlecate = async(req,res)=>{

  // const getCode = await query(``)
  const result = await query(`select * from middlecategory`)
  res.json(successData(result));
}


const auction_info = async(req,res)=>{
  // const {bid} = req.body
  console.log("??",req.body)
  // res.json(successData())
  const data = {
    success:true
  }
  res.json(data)
}


module.exports={
  mint_nft,
  maincate,
  middlecate,
  auction_info,
}
