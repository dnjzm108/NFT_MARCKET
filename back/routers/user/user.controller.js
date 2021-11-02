
const { query } = require("../../pool")

let test = async (req,res) =>{
    
    const sql =``
    const result = await query(sql)
}

let join = async (req,res) =>{
    let {nickname,wallet,email,picture} = req.body
    const sql =`insert into user (nickname,wallet,email,picture) values ("${nickname}","${wallet}","${email}","${picture}")`
    const result = await query(sql)

    console.log(result);

} 

module.exports={
    test,
    join
}

