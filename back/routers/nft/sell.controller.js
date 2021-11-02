const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
const { uploadFile, uploadNFT } = require('../../s3')
const { query,execute } = require("../../pool");


const config = require('../../klaytn/config');
const caver = config.caver;
const developerKey = config.developerKey;




const keyring = caver.wallet.keyring.createFromPrivateKey(developerKey);
if (!caver.wallet.getKeyring(keyring.address)) {
  const singleKeyRing = caver.wallet.keyring.createFromPrivateKey(developerKey);
  caver.wallet.add(singleKeyRing);
}


const immediatelySell = async(req,res)=>{
  const {tokenId,price} = req.body;
  const sql = ``
  const params =[tokenId,price]

 


  const data = {
    success:true,
    tokenId,
  }
  res.json(data)
}

module.exports={
  immediatelySell
}