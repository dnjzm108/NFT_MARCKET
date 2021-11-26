const { query, execute } = require("../../pool")
const {update_cnt_sql,history_info_sql, product_img, show_product_detail, add_like_sql, delete_like_sql,check_like_sql,auction_detail_sql,other_product_sql,create_order_sql,create_delivery_sql,update_product_sql,update_detail_sql,bid_auction_sql,chage_history_sql,auction_history_sql,notice_order_sql } = require("../../sql/product")
const { successData } = require("../../returnData");
const {updateDeadline} = require('../../auction')
const socket = require('../../socket'); 
const {send_Token} = require('../../klaytn/KIP7_deploy')

let product_detail = async (req, res) => {
    let { product_no } = req.body
    let params = [product_no]

    let img = await execute(product_img(), params)
    let product = await execute(show_product_detail(), params)
    let data = { img, product }

    res.json(successData(data))

}



let create_like = async (req, res) => {
   let {product_no,nickname} = req.body;
   let params = [product_no,nickname]
   let result = await execute(add_like_sql(), params)

   res.json(successData(result))

}


let delete_like = async (req, res) => {
   let {product_no,nickname} = req.body;
   let params = [product_no,nickname]
   let result = await execute(delete_like_sql(), params)
   
   res.json(successData(result))
}

let check_like = async (req,res) =>{
    let {product_no,nickname} = req.body;

    if(nickname !== undefined){
        let params = [product_no,nickname]

        let result = await execute(check_like_sql(),params)
        if(result == ''){
            res.json(successData(false))
           }else{
            res.json(successData(true))
           }
    }
   
  
}

let auction_info = async (req,res) =>{
    let {product_id} = req.body;
    let params = [product_id]
 
    let [info] = await execute(auction_detail_sql(),params)
    let history = await execute(auction_history_sql(),params)
    let result = {
        info,history
    }
    console.log(result);
 
    if(result == ''){
     res.json(successData(false))
    }else{
     res.json(successData(result))
    }
}

let other_product = async(req,res) =>{
    let {product_code,product_no} =req.body;
    let params = [product_no]

    let result = await execute(other_product_sql(product_code),params)
    if(result == ''){
        res.json(successData(false))
       }else{
        res.json(successData(result))
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

   /// 토큰아이디 지정

    let cntUpdateSql = ``
    for(let i = 0; i<qty; i++){
        cntUpdateSql+=update_cnt_sql(insertId,product_no);
    }
    await query(cntUpdateSql); 


   //상품 재고 수정
   let minus_leftover= leftover - qty
   let product_parms=[minus_leftover,product_no]
   let update_product = await execute(update_product_sql(),product_parms)

   //상품 디테일 재고 수정
   let minus_rest= rest - qty
   let detail_parms=[minus_rest,product_id]
   let update_detail = await execute(update_detail_sql(),detail_parms)

   const socketMessage = {
       product_no,
       type:'buy',
       product_id,
       rest:minus_rest
   }
   socket.broadcast(socketMessage)
   res.json(successData(insertId))

}

///옵션 값에 따라 데드라인 확인해서 셋타임아웃 조정.데드라인도 업데이트 
// 
let applyauction = async (req,res) =>{
    let {product_no,option,deadline,auction_id,bider,bid,auction_history_id} = req.body

    
    const nowTime = new Date();
    let newDeadline = deadline;
    if(option){
        const deadlineUpdateSql = `UPDATE auction SET deadline=DATE_ADD(deadline, INTERVAL 5 MINUTE) where auction_id='${auction_id}';`
        await query(deadlineUpdateSql);
        const findDeadLineSql = `SELECT deadline from auction where auction_id='${auction_id}';`
        const [newAuction] = await query(findDeadLineSql);
        newDeadline = new Date(newAuction.deadline).toLocaleString();
        updateDeadline(auction_id,product_no,newAuction.deadline);
        ///////////////////////////////////
    }

    let history_parms=[auction_id,bider,bid,nowTime]
    let update_detail = await execute(bid_auction_sql(),history_parms)
    const inserted_bid = update_detail.insertId
    //이전 기록이 있을경우 유찰로 바꿔주기
    if(auction_history_id !== null){
        let chage_parms = [auction_history_id]
        let chage_history = await execute(chage_history_sql(),chage_parms)

        let [history_info] = await execute(history_info_sql(),chage_parms)
        let {bid,wallet} = history_info
        send_Token(wallet,bid)
    } 
    if(auction_id !== undefined && bider !== undefined && bid !== undefined && auction_history_id !== undefined ){
        const socketMessage={
            product_no,
            type:'auction',
            bider,
            bid,
            deadline:newDeadline,
            status:'bid',
            auction_history_id:inserted_bid,
            bid_date:nowTime.toLocaleString(),
        }
        socket.broadcast(socketMessage)
        res.json(successData(true))
    }else{
        res.json(successData(false))
    }
}

let notice_order = async (req,res) =>{
   let {order_id} = req.body

   let parms=[order_id]
   let notice = await execute(notice_order_sql(),parms)

   res.json(successData(notice))
    
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