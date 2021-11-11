
// 상품상세 보여주기
// 수정해야함~!!!!!!!!! 좋아요를 따로 불러와야 될듯
const show_product_detail = () => {
    return (
        `SELECT * FROM product_detail as A
LEFT JOIN product as B
ON B.product_no = A.product_no
WHERE B.product_no = ?`
    )
}

//상품 이미지 가져오기
//필요값 상품 번호
const product_img = () =>{
    return(
        `SELECT img from product_image WHERE product_no = ?`
    )
}

// 좋아요 추가
// 상품번호,닉네임
const add_like_sql = () => {
    return (
        `INSERT INTO likes (product_no, nickname) VALUES(?,?)`
    )
}

// 상품에 좋아요 수정
//필요값 좋아요 수 , 상품번호
const change_like = () => {
    return (
        `UPDATE product SET likes = ? WHERE product_no = ?`
    )
}



//좋아요 삭제
//필요값 상품번호, 닉네임
const delete_like_sql = () => {
    return (
        `DELETE FROM likes WHERE product_no =  ? AND nickname =  ?`
    )
}

//상품에 내가 좋아요 했는지 체크
//필요값 상품번호 , 닉네임
const check_like_sql = () =>{
    return(
        `SELECT * FROM likes WHERE product_no = ? AND nickname = ?;`
    )
}

//경매 정보
//상품 디테일 아이디
const auction_detail_sql = () =>{
    return(
        `SELECT * FROM auction as A 
        LEFT JOIN auction_history as B
        ON B.auction_id = A.auction_id
        WHERE A.product_id = ?`
    )
}

module.exports = {
    show_product_detail,
    product_img,
    add_like_sql,
    delete_like_sql,
    change_like,
    check_like_sql,
    auction_detail_sql
}