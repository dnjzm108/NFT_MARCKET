const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
const { query,execute } = require("../../pool")
const {uploadProfile} = require("../../s3")
const {join_sql,login_sql,name_check_sql,admin_login} =require("../../sql/user")

let join = async (req,res) =>{
    
    let {nickname,wallet,email,picture} = req.body
    // let {file} = req;
    // const image = await uploadProfile(file,nickname)
    // console.log("imglocation",image.Location);
    // await unlinkFile(file.path)  
    let img = 'https://s3-practice-third.s3.ap-northeast-2.amazonaws.com/profile/image/sdf.png'

    try{
        let params = [nickname,wallet,email,img]
        const result = await execute(join_sql,params)
        let user_info = {
            nickname,wallet,email,picture
        }
        res.json(user_info)

    }catch(e){
        console.log(e);
    }


} 

let login = async (req,res) =>{
    let {wallet} = req.body
    let params = [wallet]
    const [result] = await execute(login_sql,params)

    if(result !== null){
       res.json(result)
    }else{
        return false
    }

}

let name_check = async (req,res) =>{
    let {name} = req.body
    let params = [name]
    const [result] = await execute(name_check_sql,params)
    if( result !== undefined){
        res.json(false)
    }else{
        res.json(true)
    }
}

let admin = async(req,res) =>{
    console.log("admin");
    let {id,pw} = req.body;
    let params = [id,pw]
    const [result] = await execute(admin_login,params)
    console.log(result);
     if( result !== undefined){
        res.json(true)
    }else{
        res.json(false)
    }
}

module.exports={
    join,
    login,
    name_check,
    admin
}

