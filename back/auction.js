const { query, execute } = require("./pool");
const {isBidSql,newBidSql,addOrderSql,stopAuctionSQL} = require('./sql/auction')
let auctions = {};


function updateDeadline(auction_id, newDeadline) {
  clearTimeout(auctions[auction_id]);
  const deadline = new Date(newDeadline).getTime()
  const now = new Date().getTime();
  const remainTime =deadline-now;
  const timeout = setTimeout(() => {
    auctionSuccess(auction_id);
  }, remainTime);
  auctions[auction_id] = timeout
}


function startDeadline(auction_id, deadline) {
  const deadTime = new Date(deadline).getTime();
  const now = new Date().getTime();

  const remainTime = deadTime - now;
  const timeout = setTimeout(() => {
    auctionSuccess(auction_id);
  }, remainTime)
  auctions[auction_id] = timeout;
}


async function auctionSuccess(auction_id) {

  ///일단 경매 입찰자가 있는지 확인.
  // 없다면 경매만 죽이고 종료. 
  //있다면 낙찰시키고 주문 들어감. 
  const [isBid] = await query(isBidSql(auction_id));
  if(isBid!=undefined){//입찰이 있을 때. 
    const {bid,bider,product_id} = isBid;
    /// 마지막 입찰 낙찰로 바꿔준다.
  await query(newBidSql(auction_id));

  // 오더도 추가해준다. 
  await execute(addOrderSql(),[product_id,bid,bider]);
  }

  // 그리고 경매 종료해준다!
  await query(stopAuctionSQL(auction_id));

  delete auctions[auction_id];

}


module.exports={
  startDeadline,
  updateDeadline,
}