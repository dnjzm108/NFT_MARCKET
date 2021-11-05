
const join_sql = () =>{
    return 'insert into user (nickname,wallet,email,picture) values (?,?,?,?)'
}

const login_sql = () =>{
    return `select * from user where wallet = ?`
}
const name_check_sql = () =>{
    return `select nickname from user where nickname = ?`
}
module.exports={
    join_sql,
    login_sql,
    name_check_sql

}