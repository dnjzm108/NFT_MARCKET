// 카테고리 대분류
const big_cate_sql = () => {
    return (`select * from bigcategory`)
}

// 카테고리 중분류
//필요값 대분류 코드
const middle_cate_sql = () => {
    return (`select * from middlecategory where big_code = ?`)
}
//대분류 아이템
//필요값 대분류 코드
const big_item_sql = () => {
    return (`select * from product_detail as A
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
     `)

}

//중분류 아이템
//필요값 중분류 코드
const middle_item_sql = () => {
    return (` select * from product_detail as A
    LEFT JOIN product as B
    on A.product_no =  B.product_no
    LEFT JOIN img as C
    on B.product_no =  C.product_no
    WHERE A.product_no LIKE '__?%'
     GROUP BY C.product_no ORDER BY A.id DESC`)
}


// 상품 등록 
// 필요값 상품번호,상품이름,설명,판매자
const create_product_sql = () => {
    return (`inselt into INSERT INTO product ("product_no", "name", "explain", "creater") VALUES(?,?,?,?)`)
}


//상품 디테일 등록
//필요한값 상품번호,수량,색,사이즈,가격,수량,경매아이디(경매일때만)
const create_product_detail_sql = () => {
    return (`INSERT INTO product_detail ("product_no", "qty", "color", "size", "price", "rest", "auction_id") VALUES(?,?,?,?,?,?,?)`)
}

//상품 이미지 등록
//필요한값 상품번호,이미지 주소
const create_img = () => {
    return (
        `INSERT INTO img ("product_no", "img") VALUES(?,?)`
    )
}







//배송정보 불러오기
// 구매자
const get_delievery_info = () => {
    return (
        `select A.order_id,A.reciever,A.status,A.invoice,A.request,A.recieve_type,A.phone_number,A.delievery_company,A.address,A.date from delievery as A
    LEFT JOIN orders as B
    ON A.order_id =   B.id
    WHERE B.buyer =  ?`
    )
}


//송장 입력하기
// orderID ,송장번호
const add_invoice = () => {
    return (
        `UPDATE delievery as A,(select * from orders WHERE id =  ?) as B SET A.invoice =  ? WHERE A.order_id =  b.id`
    )
}





//좋아요 검색 (찜 목록?)
// 필요값 닉네임
const serch_like = () => {
    return (
        `SELECT A.product_no,A.name,C.img,D.price FROM product as A
LEFT JOIN likes as B
ON B.product_no =  A.product_no
LEFT JOIN img as C
ON C.product_no =  B.product_no
LEFT JOIN product_detail as D
ON C.product_no =  D.product_no
WHERE B.nickname =  ?
GROUP BY D.price`
    )
}



//디자이너 리스트
const show_designer = () => {
    return (
        `SELECT B.nickname,B.picture FROM product as A
LEFT JOIN user as B
ON A.creater = B.nickname
GROUP BY B.nickname`
    )
}

//검색 추천쿼리

//상품 리스트 가져오기
// 수정 해야함  인피니트 스크롤 상품 번호 ,디자이너 ,가격, 상품이름 ,종하용순,낮은 가격순,높은가격순,최신순,오래된순
const getProductList = (Limit,Where,Cate) =>{
    let where = ``
    let limit =`LIMIT ${Limit},20`
    
     if(Where !== undefined ){

     }

    let sql= `SELECT A.product_no,A.name,A.date,A.creater,B.price,A.likes,C.img FROM product as A
    LEFT JOIN product_detail as B
    ON A.product_no = B.product_no
    LEFT JOIN img as C
    ON A.product_no = C.product_no
    ${where}
    GROUP BY A.product_no
    ORDER BY A.date DESC
    ${limit}`


    return sql
}

//관심목록 불러오기 (메인페이지랑 불러오기 같음)

//즉시판매 상품리스트 (페이지 네이션)
//페이지 네이션 및 where 조거부분 추가
const getImmysellList = () =>{
    return(
        `SELECT A.product_no,A.name,A.date,A.likes,C.img FROM product as A
        LEFT JOIN product_detail as B
        ON A.product_no = B.product_no
        LEFT JOIN img as C
        ON A.product_no = C.product_no
        WHERE A.creater = ?
        GROUP BY A.product_no`
    )
}

//즉시 판매 상품상세 
//상품번호 필요
const getImmySell = () => {
    return (`SELECT * FROM product as A
LEFT JOIN product_detail as B
ON A.product_no = B.product_no
WHERE A.product_no = ?`
    )
}

// 상품의 주문 리스트 부분  판매자에게만 보여야 하는곳 !!
//상품번호 필요
const getImmySellDetail = () => {
    return (
        `SELECT A.color,A.size,A.price,B.buyer,B.qry,B.date,C.reciever,C.status,C.invoice FROM product_detail as A
LEFT JOIN orders as B
ON A.id = B.product_detail
LEFT JOIN delievery as C
ON B.id = C.order_id
WHERE A.product_no = ? AND B.buyer IS NOT NULL`
    )
}

//내가 올린 경매 상품 리스트

//내가 올린 경매 상품 상세
//상품번호
const AuctionSell = () => {
    return (
        `SELECT A.name,A.explain,A.creater,A.date,A.likes,B.color,B.size,B.price,C.deadline FROM product as A
LEFT JOIN product_detail as B
ON A.product_no = B.product_no
LEFT JOIN auction as C
ON C.product_no = B.id
WHERE A.product_no = ? AND C.deadline IS NOT NULL`
    )
}

//내가 올린 경매 상품 경매 리스트 판매자에게만 보여야 하는곳 !!
//상품번호
const AuctionSellDetail = () => {
    return (
        `SELECT A.color,A.size,B.deadline,C.bider,C.bid,C.date,C.status,D.status,D.invoice FROM product_detail as A
LEFT JOIN auction as B
ON B.product_no = A.id
LEFT JOIN auction_history as C
ON C.auction_id = B.id
LEFT JOIN delievery as D
ON D.auction = C.id
WHERE A.product_no = ? `
    )
}

//구매자가 구매한 상품리스트

//내가 참여한 경매리스트
//필요한값 구매자 닉네임
//like 가 빠짐 WHERE 구분으로 낙찰 유찰 입찰 체크해줘야 함
const my_actoin_list = () => {
    return (
        `SELECT A.status,D.product_no,D.name,A.bid,A.date,E.img,F.status,B.id,B.deadline FROM auction_history as A
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
GROUP BY A.id`
    )
}


function makeFilterQuery(query){
    const {type,price_min,price_max,designer,category,sort,search,skip,} = query;
  
    let mainVerse;
     const where = makeWhereVerse(query);
     const order = sortVerse(sort); 
    //// 구매일 때, 
      mainVerse = `
                  SELECT 
                          * 
                  FROM 
                        product  AS A
                  NATURAL JOIN
                              (SELECT
                                      price, product_no 
                                FROM 
                                      product_detail
                                GROUP BY 
                                      product_no
                              ) AS B
                  NATURAL JOIN
                              (SELECT
                                    product_img, product_no
                              FROM
                                    img
                              GROUP BY
                                    product_no
                              ) AS C 
                  ${where}
                  ${order}
                  LIMIT ${skip},10; 
  
                  `
    return mainVerse;
  }
  
  
  
  
  
  
  
  function makeWhereVerse(query){
    const {type,price_min,price_max,designer,category,sort,search,skip,} = query;
    let where = `WHERE rest>0`
    if(designer.length>0){
      where += ' AND '+makeSignVerse('creater','=',designer);
    }
    if(price_min!=undefined && price_max!=undefined){
      where += ' AND (' + makeSignVerse('price','>=',price_min) +' AND '+ makeSignVerse('price','<=',price_max) +')';
    }
    if(category!=undefined){
      where +=' AND ' + `(product_no like '${category}%')`;
    }
    if(search!=undefined){
      where +=' AND ' + `(creater like '%${search}%' OR name like '%${search}%')`;
    }
  
    where += sortVerse(sort); 
  
    return where; 
  }
  
  
  
  function makeSignVerse(key,sign,value){
    if(value){
      if(typeof value=='string'){
        return `${key}${sign}"${value}"`
      }else{
        const tempArr = [];
        value.forEach(v=>{
          tempArr.push(`${key}${sign}"${v}"`)
        })
        return '('+tempArr.join(' OR ')+')'
      }
    }else{
      return ''
    }
  }
  
  function sortVerse(sort){
    let tmp = ` ORDER BY `
    switch(sort){
      case 'like':
        return tmp+'liked DESC';
      case 'old':
        return tmp+'date ASC';
      case 'new':
        return tmp+'date DESC';
      case 'low':
        return tmp+'price ASC';
      case 'high':
        return tmp+'price DESC';
      default:
        return tmp+'date DESC';
    }
  }
  
  
  





module.exports = {
    makeFilterQuery
}
