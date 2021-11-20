
// 상품 nft 정보
const productInfo_sql =()=>{
    return(
'INSERT INTO product (\`product_no\`,\`name\`,\`explain\`,creater,\`date\`,likes,\`type\`,total_qty,leftover,symbol,contractAddr,tokenURI) VALUES(?,?,?,?,?,0,?,?,?,?,NULL,NULL)'
    )
}

// 상품 옵션 정보 넣기
const prdctDetail_sql =(getProductNo,qty)=>{
    return(
       `insert into product_detail (product_no, color, size, qty, rest, price) values (${getProductNo},?,?,?,${qty},?)` 
    )
}

// 상품 상세코드 앞 4자리가 같은 상품들 중 
// 맨 마지막 상품 가져옴 
const productNum_sql = (category)=>{
    return(
        `SELECT * FROM product WHERE product_no LIKE '${category}%'
         ORDER BY product_no DESC LIMIT 1 ;`
    )
}

const nftInsert_sql =()=>{
    return(
        `INSERT INTO auction ( product_no, name, explain, creater, DATE, likes, TYPE, total_qty, leftover, symbol, contractAddr ,tokenURI) 
        VALUES();`
    )
}

// 판매자가 입력한 경매 정보 넣기
const auction_option_info =()=>{
    return(
        `INSERT INTO auction (product_id,deadline,option) VALUES(?,?,?)`
    )
}
module.exports = {
    productInfo_sql,
    productNum_sql,
    nftInsert_sql,
    prdctDetail_sql,
    auction_option_info
}