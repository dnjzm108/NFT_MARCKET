const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
const { query,execute } = require("../../pool")
const {uploadProfile} = require("../../s3")

let join = async (req,res) =>{
    
    let {nickname,wallet,email,picture} = req.body
    let {file} = req;
    const image = await uploadProfile(file,nickname)
    console.log("imglocation",image.Location);
    await unlinkFile(file.path)  

    try{
        const sql =`insert into user (nickname,wallet,email,picture) values ("${nickname}","${wallet}","${email}","${image.Location}")`
        const result = await execute(sql)
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
    const sql =`select * from user where wallet = "${wallet}"`
    const [result] = await execute(sql)

    if(result !== null){
       res.json(result)
    }else{
        return false
    }

}

let name_check = async (req,res) =>{
    let {name} = req.body
    const sql =`select nickname from user where nickname = "${name}"`
    const [result] = await execute(sql)
    if( result !== undefined){
        res.json(false)
    }else{
        res.json(true)
    }
}

module.exports={
    join,
    login,
    name_check
}

