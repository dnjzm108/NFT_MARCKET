
const join_sql =`insert into user (nickname,wallet,email,picture) values (?,?,?,?)`

const login_sql =`select * from user where wallet = ?`

const name_check_sql =`select nickname from user where nickname = ?`


const update_profile = (email,picture) =>{
      let info = ''
      if(email != undefined){
          info += `email = ${email}`
      }
      if(picture != undefined){
          if(email != undefined){
              info += `, picture = ${picture}` 
          }else{
              info += `picture = ${picture}` 
          }
      }
    return(`UPDATE user set ${info} WHERE nickname = ?
    `)
}

const admin_login = `SELECT * from admin WHERE id = ? AND pw = ?`



module.exports={
    join_sql,
    login_sql,
    name_check_sql,
    update_profile,
    admin_login
}