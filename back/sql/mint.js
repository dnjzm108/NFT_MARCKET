
// 상품 nft 정보
const productInfo_sql =()=>{
    return(
        `insert into product ( name, explain, creater, type) values (?,?,?,?)` 
    )
}

// 상품 옵션 정보
const prdctDetail_sql =()=>{
    return(
       `insert into product_detail (color, size, price) values (?,?,?)` 
    )
}


const productNum_sql = ()=>{
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
const auction_initial_info =(product_code)=>{
    return(
        `INSERT INTO auction (product_id,deadline,option) VALUES(${product_code},?,?)`
    )
}
module.exports = {
    productInfo_sql,
    productNum_sql,
    nftInsert_sql,
    prdctDetail_sql,
    auction_initial_info
}