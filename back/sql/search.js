// 카테고리 대분류
const big_cate_sql=`select * from bigcategory`


// 카테고리 중분류
//필요값 대분류 코드
const middle_cate_sql =`select * from middlecategory where big_code = ?`


//대분류 아이템
//필요값 대분류 코드
const big_item_sql =`
    select * from product_detail as A
    LEFT JOIN product as B
    on A.product_no =  B.product_no
    LEFT JOIN img as C
    on B.product_no =  C.product_no
    WHERE A.product_no LIKE '?%'
     GROUP BY C.product_no ORDER BY A.id DESC


select 
A.product_no,A.price,A.rest,B.name,B.creater,B.date,C.img,COUNT(D.nickname) as love
 from product_detail as A
LEFT JOIN product as B
on A.product_no =  B.product_no
LEFT JOIN img as C
on B.product_no =  C.product_no
LEFT JOIN likes as D
on B.product_no =  D.product_no
GROUP BY C.product_no ORDER BY A.id DESC
;
     `
     



//중분류 아이템
//필요값 중분류 코드
const  middle_item_sql =
    ` select * from product_detail as A
    LEFT JOIN product as B
    on A.product_no =  B.product_no
    LEFT JOIN img as C
    on B.product_no =  C.product_no
    WHERE A.product_no LIKE '__?%'
     GROUP BY C.product_no ORDER BY A.id DESC`
    


// 상품 등록 
// 필요값 상품번호,상품이름,설명,판매자
const create_product_sql = `inselt into INSERT INTO product ("product_no", "name", "explain", "creater") VALUES(?,?,?,?)`


//상품 디테일 등록
//필요한값 상품번호,수량,색,사이즈,가격,수량,경매아이디(경매일때만)
const create_product_detail_sql = `INSERT INTO product_detail ("product_no", "qty", "color", "size", "price", "rest", "auction_id") VALUES(?,?,?,?,?,?,?)`

//상품 이미지 등록
//필요한값 상품번호,이미지 주소
const create_img = `INSERT INTO img ("product_no", "img") VALUES(?,?)`


//주문 등록(order)
//필요한값 상품상세번호 ,가격,산사람,수량
const create_order = `INSERT INTO order ("product_detail","price","buyer","qry") VALUES(?,?,?,?)`

//경매 입찰
// 경매 아이디,입찰자,입찰가격,타입
const bid_oction = `INSERT INTO auction_history ("auction_id","bider","bid","type") VALUES(?,?,?,?)`


//판매자 신청
//닉네임,사업자 번호,인증상태
const apply_seller =  `INSERT INTO seller("user_id", "seller_no", "kyc_status") VALUES(?,?,?)`


//판매자 승인
//닉네임 , 상태값
const update_seller = `UPDATE seller set kyc_status =  ? WHERE user_id =  ? `


// 판매자 요청 불러오기
// 상태값
const check_seller = `SELECT * FROM seller WHERE kyc_status =  ?`


//배송정보 불러오기
// 구매자
const get_delievery_info = `
    select A.order_id,A.reciever,A.status,A.invoice,A.request,A.recieve_type,A.phone_number,A.delievery_company,A.address,A.date from delievery as A
    LEFT JOIN orders as B
    ON A.order_id =   B.id
    WHERE B.buyer =  ?
    `


//송장 입력하기
// orderID ,송장번호
const add_invoice = `UPDATE delievery as A,(select * from orders WHERE id =  ?) as B SET A.invoice =  ? WHERE A.order_id =  b.id`


// 좋아요 추가
// 상품번호,닉네임
const add_like = `INSERT INTO likes ("product_no", "nickname") VALUES(?,?)`



//좋아요 삭제
// 상품번호, 닉네임
const delete_like = `DELETE FROM likes WHERE product_no =  ? AND nickname =  ?`


//좋아요 검색 (찜 목록?)
// 필요값 닉네임
const serch_like = `SELECT A.product_no,A.name,C.img,D.price FROM product as A
LEFT JOIN likes as B
ON B.product_no =  A.product_no
LEFT JOIN img as C
ON C.product_no =  B.product_no
LEFT JOIN product_detail as D
ON C.product_no =  D.product_no
WHERE B.nickname =  ?
GROUP BY D.price`



// 상품상세 보여주기
// 수정해야함~!!!!!!!!! 좋아요를 따로 불러와야 될듯
const show_product_detail = `
SELECT * FROM product_detail as A
LEFT JOIN product as B
ON B.product_no = A.product_no
WHERE B.product_no = ?`

//디자이너 리스트
const show_designer = `
SELECT B.nickname,B.picture FROM product as A
LEFT JOIN user as B
ON A.creater = B.nickname
GROUP BY B.nickname`

//검색 추천쿼리

//상품 리스트 가져오기

//관심목록 불러오기 (메인페이지랑 불러오기 같음)

//즉시판매 상품리스트 (페이지 네이션)

//즉시 판매 상품상세 

//내가 올린 경매 상품 리스트

//내가 올린 경매 상품 상세

//구매자가 구매한 상품리스트

//내가 참여한 경매리스트
 //필요한값 구매자 닉네임
 //like 가 빠짐 WHERE 구분으로 낙찰 유찰 입찰 체크해줘야 함
const my_actoin_list = `SELECT A.status,D.product_no,D.name,A.bid,A.date,E.img,F.status,B.id,B.deadline FROM auction_history as A
LEFT JOIN auction as B
ON A.auction_id = B.id
LEFT JOIN product_detail as C
ON B.product_no = C.id
LEFT JOIN product as D
ON C.product_no = D.product_no
LEFT JOIN img as E
ON E.product_no = D.product_no
LEFT JOIN delievery as F
ON F.auction = A.id
WHERE A.bider = ?
GROUP BY A.id
;`


//

