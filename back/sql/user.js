//회원가입 구문
//필요값 닉네임,지갑주소,이메일,사진주소
const join_sql = () => {
    return (
        `insert into user (nickname,wallet,email,picture) values (?,?,?,?)`
    )
}
//로그인 구문
//필요값 지갑주소
const login_sql = () => {
    return (`SELECT * FROM user WHERE wallet = ?`
    )
}



//닉네임 체크 구문
//필요값 체크할 닉네임
const name_check_sql = () => {
    return (
        `select nickname from user where nickname = ?`
    )
}

//회원정보 수정 구문
//필요값 변경할 이메일 또는 사진
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

//관리자 로그인
//필요값 관리자 아이디,비밀번호
const admin_login = () => {
    return (
        `SELECT * from admin WHERE id = ? AND pw = ?`
    )
}

//판매자 신청
//필요값 닉네임,사업자 번호
/*
seller [  0 : 구매자  
    1 : 반려 
    2 : 요청
    3 : 인증 ]*/
const apply_seller = () => {
    return (
        `INSERT INTO seller(user_id, seller_no, status) VALUES(?,?,"2")`
    )
}


//판매자 승인
//필요값 닉네임 , 상태값
const update_seller = () => {
    return (
        `UPDATE seller set status =  ? WHERE nickname =  ? `
    )
}


// 판매자 요청 불러오기
//필요값 상태값
const check_seller_sql = () => {
    return (
        `SELECT A.seller_no,B.nickname,B.email FROM seller as A
        LEFT JOIN user as B
        ON A.nickname = B.nickname WHERE status = ? `
    )
}

//판매자 정보
// 닉네임
const seller_info_sql=()=>{
    return(
        `SELECT * FROM seller WHERE nickname = ?`
    )
}



const loginWithWalletSql = (data)=>{
    return(`
    SELECT
            U.nickname
    FROM
            user as U
    LEFT JOIN
            seller as S
    ON
        U.nickname=S.nickname
    WHERE
        U.wallet='${data}';
    `)
}



module.exports = {
    loginWithWalletSql,
    join_sql,
    login_sql,
    name_check_sql,
    update_profile,
    admin_login,
    apply_seller,
    update_seller,
    check_seller_sql,
    seller_info_sql
}