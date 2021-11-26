require('dotenv').config()
const fs = require('fs')
const S3 = require('aws-sdk/clients/s3')

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
})


// 얘는 이미지 올리는거 file 에 image 넣어주면 됨 (req.files)
// tokenID는 숫자만 가능? - 상품 상세코드로 받는다고 함
// num 은 10번 실행하면서 차례대로 들어가는 숫자
const uploadFile = (file,productNo,num) =>{
  const fileStream = fs.createReadStream(file.path)
  const mimetype = file.mimetype.split('/')[1];
  if(+num<10) num = '0'+num;
  const uri = `image${productNo}-${num}.${mimetype}`;

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: uri
  }

  return  s3.upload(uploadParams).promise();
}


const uploadProfile = (file,nick) =>{
  const fileStream = fs.createReadStream(file.path)
  const mimetype = file.mimetype.split('/')[1];
  const uri = `profile/image/${nick}.${mimetype}`;

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: uri
  }

  return  s3.upload(uploadParams).promise();
}


const uploadMetaData = (productNo,name,explain,creater,files,created_at)=>{
  const uploadParams = {
    Bucket: bucketName,
    Body: JSON.stringify({name,explain,files,creater,created_at}),
    Key: `metadata${productNo}.json`
  }
  return s3.upload(uploadParams).promise()
}


module.exports={
  uploadFile,
  uploadMetaData,
  uploadProfile
}



/*
{
  fieldname: 'image',
  originalname: 'qwer.png',
  encoding: '7bit',
  mimetype: 'image/png',
  destination: 'uploads/',
  filename: '57e36fc7481a6f1bc8e5f1205e9c0cdb',
  path: 'uploads\\57e36fc7481a6f1bc8e5f1205e9c0cdb',
  size: 5188
}
{
  ETag: '"7834ceca73812ee3d6be7c4dbc604b74"',
  Location: 'https://s3-practice-third.s3.ap-northeast-2.amazonaws.com/test.json',
  key: 'test.json',
  Key: 'test.json',
  Bucket: 's3-practice-third'
}
*/
