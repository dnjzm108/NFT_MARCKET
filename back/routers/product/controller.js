const { query, execute } = require("../../pool")
const { product_img, show_product_detail, add_like_sql, delete_like_sql,check_like_sql,auction_detail_sql,other_product_sql,create_order_sql,create_delivery_sql,update_product_sql,update_detail_sql,bid_auction_sql,chage_history_sql,chage_product_likes,notice_order_sql } = require("../../sql/product")

let product_detail = async (req, res) => {
    let { product_no } = req.body
    let params = [product_no]

    let img = await execute(product_img(), params)
    let product = await execute(show_product_detail(), params)
    let data = { img, product }

    res.json(data)

}



let create_like = async (req, res) => {
   let {product_no,nickname,likes} = req.body;
   let params = [product_no,nickname]
   let result = await execute(add_like_sql(), params)

   let plus_like = likes + 1
   let product_params = [ plus_like,product_no]
   let product_like = await execute(chage_product_likes(), product_params)
   res.json(result)

}


let delete_like = async (req, res) => {
   let {product_no,nickname,likes} = req.body;
   let params = [product_no,nickname]
   let result = await execute(delete_like_sql(), params)

   let minus_like = likes - 1
   let product_params = [minus_like,product_no]
   let product_like = await execute(chage_product_likes(), product_params)
   res.json(result)
}

let check_like = async (req,res) =>{
    let {product_no,nickname} = req.body;

    if(nickname !== undefined){
        let params = [product_no,nickname]

        let result = await execute(check_like_sql(),params)
        if(result == ''){
            res.json(false)
           }else{
            res.json(true)
           }
    }
   
  
}

let auction_info = async (req,res) =>{
    let {product_id} = req.body;
    let params = [product_id]
 
    let result = await execute(auction_detail_sql(),params)
 
    if(result == ''){
     res.json(false)
    }else{
     res.json(result)
    }
}

let other_product = async(req,res) =>{
    let {product_code,product_no} =req.body;
    let params = [product_no]
console.log(product_code,product_no);
    let result = await execute(other_product_sql(product_code),params)
    if(result == ''){
        res.json(false)
       }else{
        res.json(result)
       }
}

let order = async (req,res) =>{
   let {product_id,buyer,price,qty,product_no,reciever,request,recieve_type,phone_number,address,rest,leftover} = req.body

   //오더 테이블 추가
   let order_parms=[product_id,price,buyer,qty]
   let create_order = await execute(create_order_sql(),order_parms)
    
   let {insertId} = create_order
    //배송정보 추가
    let delivery_parms=[insertId,reciever,request,recieve_type,phone_number,address]
   let create_delivery = await execute(create_delivery_sql(),delivery_parms)


   //상품 재고 수정
   let minus_leftover= leftover - qty
   let product_parms=[minus_leftover,product_no]
   let update_product = await execute(update_product_sql(),product_parms)

   //상품 디테일 재고 수정
   let minus_rest= rest - qty
   let detail_parms=[minus_rest,product_id]
   let update_detail = await execute(update_detail_sql(),detail_parms)

   res.json(insertId)

}

let applyauction = async (req,res) =>{
    let {auction_id,bider,bid,auction_history_id} = req.body

    let history_parms=[auction_id,bider,bid]
    let update_detail = await execute(bid_auction_sql(),history_parms)
  console.log(update_detail);
    //이전 기록이 있을경우 유찰로 바꿔주기
    if(auction_history_id !== null){
        let chage_parms = [auction_history_id]
        let chage_history = await execute(chage_history_sql(),chage_parms)
    console.log(chage_history);
    } 
}

let notice_order = async (req,res) =>{
   let {order_id} = req.body

   let parms=[order_id]
   let notice = await execute(notice_order_sql(),parms)
   console.log(notice);
   res.json(notice)
    
}
module.exports = {
    product_detail,
    create_like,
    delete_like,
    check_like,
    auction_info,
    other_product,
    order,
    applyauction,
    notice_order
}