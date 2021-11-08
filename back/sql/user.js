
const join_sql = () => {
    return (
        `insert into user (nickname,wallet,email,picture) values (?,?,?,?)`
    )
}

const login_sql = () => {
    return (`select * from user where wallet = ?`
    )
}
const name_check_sql = () => {
    return (
        `select nickname from user where nickname = ?`
    )
}

const update_profile = (email, picture) => {
    let info = ''
    if (email != undefined) {
        info += `email = ${email}`
    }
    if (picture != undefined) {
        if (email != undefined) {
            info += `, picture = ${picture}`
        } else {
            info += `picture = ${picture}`
        }
    }
    return (`UPDATE user set ${info} WHERE nickname = ?
    `)
}

const admin_login = () => {
    return (
        `SELECT * from admin WHERE id = ? AND pw = ?`
    )
}

//판매자 신청
//닉네임,사업자 번호
const apply_seller = () => {
    return (
        `INSERT INTO seller("user_id", "seller_no", "kyc_status") VALUES(?,?,"요청")`
    )
}


//판매자 승인
//닉네임 , 상태값
const update_seller = () => {
    return (
        `UPDATE seller set kyc_status =  ? WHERE user_id =  ? `
    )
}


// 판매자 요청 불러오기
// 상태값
const check_seller_sql = () => {
    return (
        `SELECT A.seller_no,B.nickname,B.email FROM seller as A
        LEFT JOIN user as B
        ON A.user_id = B.nickname WHERE kyc_status = ? `
    )
}


module.exports = {
    join_sql,
    login_sql,
    name_check_sql,
    update_profile,
    admin_login,
    apply_seller,
    update_seller,
    check_seller_sql
}