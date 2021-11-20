require('dotenv').config();
const {error403} =require('./returnData')

function createHash(name){
    let combine = name + process.env.jwt

    const signature = Buffer.from(JSON.stringify(combine))
    .toString('base64')
    .replace('==','')
    .replace('=','');
    return signature
}

 
function checking(req, res, next){
   let {auth,nickname} = req.body
   console.log(auth,nickname);
   let identify = createHash(nickname)
   console.log(auth,identify);

   if(auth == identify){
       next()
   }else{
       res.json(error403())
   }
}

module.exports ={
    createHash,
    checking
}