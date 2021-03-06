
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
        `SELECT 
        auction_id,
        product_id,
        date_format(deadline,'%y-%m-%d %h:%i:%s')as deadline,
        option
        FROM auction 
        WHERE product_id = ?`
    )
}

const auction_history_sql = () =>{
    return(
        `SELECT 
        B.auction_history_id,
        B.bider,
        B.bid,
        B.status,
        date_format(B.date,'%y-%m-%d %h:%i')as date FROM auction as A 
        LEFT JOIN auction_history as B
        ON B.auction_id = A.auction_id
        WHERE A.product_id = ?
        ORDER BY B.date DESC`
    )
}

//추천 상품
// 상품 번호 4자리 
const other_product_sql = (sql) =>{
    return(
        `SELECT A.product_no,B.img FROM product as A
        LEFT JOIN product_image as B
        ON B.product_no = A.product_no
        WHERE A.product_no LIKE "${sql}%" AND A.product_no NOT IN (?) AND A.type != "stop"
        GROUP BY A.product_no
        ORDER BY A.likes DESC
        LIMIT 4`
    )
}


//주문 등록(order)
//필요한값 상품상세번호 ,가격,산사람,수량
const create_order_sql = () => {
    return (
        `INSERT INTO orders (product_id,price,buyer,qty)
         SELECT ?,?,?,? FROM DUAL WHERE EXISTS
         (SELECT qty FROM product_detail WHERE product_id = ? AND qty >= ?)
         `
    )
}

//배송정보 등록

const create_delivery_sql = () =>{
    return(
`INSERT INTO delivery (order_id,reciever,request,recieve_type,phone_number,address,status) VALUES(?,?,?,?,?,?,"ready")`
    )
}

//상품 수정

const update_product_sql = () =>{
    return(
        `UPDATE product set leftover = ? WHERE product_no = ?`
    )
}

//디테일 수정 

const update_detail_sql = () =>{
    return(
        `UPDATE product_detail set rest = ? WHERE product_id = ?`
    )
}

//경매 입찰
// 경매 아이디,입찰자,입찰가격
const bid_auction_sql = () => {
    return (
        `INSERT INTO auction_history (auction_id,bider,bid,status,date) VALUES(?,?,?,"bid",?)`
    )
}

//경매 히스토리 바꿔주기

const chage_history_sql = () =>{
    return(
        `UPDATE auction_history SET status = "burial" WHERE auction_history_id = ?`
    )
}
const history_info_sql = () =>{
    return(
        `SELECT A.bid,B.wallet FROM auction_history as A LEFT JOIN user as B ON A.bider = B.nickname WHERE A.auction_history_id = ?`
    )
}

//입찰 가능한지 확인하기
const checkLastBid = () => {
    return(
        `SELECT bid FROM auction_history WHERE auction_id=? ORDER BY DATE DESC LIMIT 1;`
    )
}

//이전 입찰 죽이기
const killPrevBidSql = () =>{
    return`
        UPDATE auction_history SET status='burial' WHERE auction_id=?;
    `
}


//상품 좋아요 수정해주기 

const chage_product_likes = () =>{
    return(
    `UPDATE product SET likes = ? WHERE product_no = ?`
    )
}



//주문 배송 정보

const notice_order_sql = () =>{
    return(
        `SELECT A.price,A.buyer,A.qty,B.dlvy_id,B.status,B.reciever,B.address,B.invoice,B.delivery_company,B.phone_number,B.request,C.color,C.size,D.name FROM orders as A
        LEFT JOIN delivery as B
        ON A.order_id = B.order_id
        LEFT JOIN product_detail as C
        ON A.product_id = C.product_id
        LEFT JOIN product as D
        ON C.product_no = D.product_no
        WHERE A.order_id = ?
        `
    )
}


/// 프로덕트 카운트 업데이트
const update_cnt_sql = (insertId,product_no) =>{

    return (
        `UPDATE 
                product_count 
        SET 
                order_id=${insertId}
        WHERE 
                id=(
                    SELECT 
                            id 
                    FROM 
                        product_count 
                    WHERE 
                        product_no='${product_no}'
                        AND order_id IS NULL 
                    ORDER BY 
                            id ASC 
                    LIMIT 1
                );`
    )
}

// 상품의 수량 체크 

const check_poroduct_pty = () =>{
    return (`SELECT * FROM product_detail WHERE product_id = ? AND qty >= ? `)
}

module.exports = {
    show_product_detail,
    product_img,
    add_like_sql,
    delete_like_sql,
    change_like,
    check_like_sql,
    auction_detail_sql,
    other_product_sql,
    create_order_sql,
    create_delivery_sql,
    update_product_sql,
    update_detail_sql,
    bid_auction_sql,
    chage_history_sql,
    chage_product_likes,
    notice_order_sql,
    auction_history_sql,
    killPrevBidSql,
    update_cnt_sql,
    history_info_sql,
    check_poroduct_pty
}