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
   let identify = createHash(nickname)

   if(auth == identify){
       next()
   }else{
       res.json(error403())
   }
}

function checkHeader(req,res,next){
    let nickname = req.get('nickname')
    let auth=req.get('auth');
    let identify = createHash(nickname)
    if(auth == identify){
        next()
    }else{
        res.json(error403())
    }
}


module.exports ={
    createHash,
    checking,
    checkHeader
}