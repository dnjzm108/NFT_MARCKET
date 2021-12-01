const { query, execute } = require("./pool.js");
const {isBidSql,newBidSql,addOrderSql,stopAuctionSQL,findAuctionQuery} = require('./sql/auction')
const {update_cnt_sql} = require('./sql/product');
let auctions = {};
const socket = require('./socket');


const updateDeadline=(auction_id,product_no,newDeadline)=>{
  clearTimeout(auctions[auction_id]);
  const deadline = new Date(newDeadline).getTime()
  const now = new Date().getTime();
  const remainTime =deadline-now;
  const timeout = setTimeout(() => {
    auctionSuccess(auction_id,product_no);
  }, remainTime);
  auctions[auction_id] = timeout
}


const startDeadline=(auction_id,product_no,deadline)=>{
  const deadTime = new Date(deadline).getTime();
  const now = new Date().getTime();
  const remainTime = deadTime - now;
  const timeout = setTimeout(() => {
    auctionSuccess(auction_id,product_no);
  }, remainTime)
  auctions[auction_id] = timeout;
}


const auctionSuccess= async(auction_id,product_no)=>{

  ///일단 경매 입찰자가 있는지 확인.
  // 없다면 경매만 죽이고 종료. 
  //있다면 낙찰시키고 주문 들어감. 
  let isSoldout=false;
  const [isBid] = await query(isBidSql(auction_id));
  if(isBid!=undefined){//입찰이 있을 때. 
    isSoldout=true
    const {bid,bider,product_id} = isBid;
    /// 마지막 입찰 낙찰로 바꿔준다.
    await query(newBidSql(auction_id));

    // 오더도 추가해준다. 
    const order =  await execute(addOrderSql(),[product_id,bid,bider]);
    const order_id = order.insertId;
    await query(update_cnt_sql(order_id,product_no))
  }

  // 그리고 경매 종료해준다!
  await query(stopAuctionSQL(auction_id,isSoldout));
  delete auctions[auction_id];
  const socketMessage = {
    product_no,
    type:'stop',
  }
  socket.broadcast(socketMessage)
}

const check=async()=>{
  auctions={};
  const prev_auctions  = await query(findAuctionQuery())
  const now = new Date();
  if(prev_auctions==undefined)return;
  prev_auctions.forEach((v,i)=>{

    if(v.deadline<=now && v.type!='stop'){
      /// 이때는 경매 stop으로 바꾸고 마지막입찰을  낙찰로 바꿔줘야함.
      auctionSuccess(v.auction_id,v.product_no);
    }else if(v.deadline>now){
      //이떄는 경매 셋타임아웃 설정해줘야함.
      startDeadline(v.auction_id,v.product_no,v.deadline);
    }
  })

  console.log('auction setting completed!')

}







module.exports={
  startDeadline,
  updateDeadline,
  check,
}