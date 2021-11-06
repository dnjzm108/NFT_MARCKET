
<<<<<<< HEAD
const join = () => {

    return `select * from user`;
}

module.exports={
    join,
    
=======
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

>>>>>>> 556c7f56dc8c91598f39bb2e50ab99ac54565409
}