const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
const { uploadFile, uploadNFT } = require('../../s3')
const { query,execute } = require("../../pool");

// const INSERT = `INSERT INTO nft (${x}) VALUES(${x});`
// const UPDATE = `UPDATE table SET ?=${x}} WHERE ?=${x};` 
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


const mint_nft = async(req,res)=>{

  const {title,description} = req.body;
  const creater=1234
  const category='pig'
  const creater_nick ='pppiiiggg'
  const toAddress='0x25390A007D19Ce6014F47ce4b79FaAffbf3Df3D3'

      const nftInsertSql =`INSERT INTO nft (title,description,creater,category) VALUES(?,?,?,?);`;
      const nftInsertparams = [title,description,creater,category];
      const insertResult = await execute(nftInsertSql,nftInsertparams);
      const tokenId = insertResult.insertId;
      // image upload s3
      const files = [];   //이미지 uri를 담을 배열
      for(let i = 0; i<req.files.length; i++){
          const v = req.files[i];
          const image =await uploadFile(v,tokenId,i+1);  //S3업로드
          files.push(image.Location)
          await unlinkFile(v.path)       //upload에 있는 img파일 지우기
        }

        let imageSql =''
        files.forEach(v=>{
          imageSql+=`INSERT INTO nft_images (nft_id,nft_image) VALUES('${tokenId}','${v}');\n`
        })

        await query(imageSql);

        // 프론트에서 발행하면 생산자를 넣어줄 필요가 없지만. 모든 발행을 서버에서 개발자 privateKey로 진행해서 
        // 블록체인 네트워크 상에서 토큰 생산자가 상품제작자가 아닌 개발자가 되므로.. 토큰 정보 안에 넣어준다. 사실 안 넣어줘도 됨. 
        // 닉네임을 넣어줄지 말지는 회의 후 결정.
        const metadata = await uploadNFT(tokenId,title,description,creater,creater_nick,files); 
        const tokenURI = metadata.Location;
        


        await kip17.mintWithTokenURI(toAddress, tokenId, tokenURI, { from: keyring.address });

  

  const data = {
    success:true,
    tokenId,
    tokenURI
  }
  res.json(data)
}

module.exports={
  mint_nft
}
