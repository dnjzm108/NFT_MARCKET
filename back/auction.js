const { query, execute } = require("./pool");

let auctions = {};


function updateDeadline(auction_id, newDeadline) {
  console.log('업데이트!!!')
  
  clearTimeout(auctions[auction_id]);
  
  const deadline = new Date(newDeadline).getTime();
  const now = new Date().getTime();
  const remainTime = now - deadline;
  const timeout = setTimeout(() => {
    auctionSuccess(auction_id);
  }, remainTime);
  auctions[auction_id] = timeout
  console.log(auctions[auction_id])
}


function startDeadline(auction_id, deadline) {
  
  const deadTime = new Date(deadline).getTime();
  const now = new Date().getTime();

  const remainTime = (deadTime - now);
  const timeout = setTimeout(() => {
    auctionSuccess(auction_id);
  }, remainTime)
  auctions[auction_id] = timeout;
  console.log(auctions[auction_id])
}


async function auctionSuccess(auction_id) {

  ///일단 경매 입찰자가 있는지 확인.
  // 없다면 경매만 죽이고 종료. 
  //있다면 낙찰시키고 주문 들어감. 
  const isBidSQL =`
  SELECT
        H.bid,
        H.bider,
        D.product_id
  FROM 
		    (SELECT
		    			*
		    	FROM
		    			auction
		    	WHERE 
		    			auction_id='${auction_id}'
		    ) AS A
  NATURAL JOIN (
				SELECT 
						*
				FROM
						auction_history
				WHERE
						auction_id='${auction_id}'
				ORDER BY
						  DATE DESC
				LIMIT 1 ) AS H
NATURAL JOIN 
			product_detail AS D; 

  `
  const [isBid] = await query(isBidSQL);
  if(isBid!=undefined){//입찰이 있을 때. 
    const {bid,bider,product_id} = isBid;
    /// 마지막 입찰 낙찰로 바꿔준다.
    const updateSQL = `
  UPDATE 
	        auction_history
  SET 
	      status='success'
  WHERE 
      auction_history_id=(
                          SELECT 
		                              auction_history_id
                          FROM 
		                              auction_history
                          WHERE
		                              auction_id='${auction_id}'
                          ORDER BY 
                                  date DESC
                          LIMIT 1
                                  ); 
  `
  await query(updateSQL);

  // 오더에 추가도 해준다. 
  const insertOrderSQL = `
  INSERT INTO
  orders
  (product_id,price,buyer)
  VALUES(?,?,?);
  `
  const insertOrderParams = [product_id,bid,bider]; 
  await execute(insertOrderSQL,insertOrderParams);
  }

  const stopAuctionSQL=`
  UPDATE
	      product
  SET 
	      TYPE='stop'
  WHERE 
      product_no = (SELECT 
	                        D.product_no
                    FROM 
	                        auction AS A
                    LEFT JOIN
	                        product_detail AS D
                    ON 
	                      A.product_id=D.product_id
                  WHERE auction_id='${auction_id}'
                )
  ; `
  await query(stopAuctionSQL);

  delete auctions[auction_id];
}


function testDeadline(){
  console.log(auctions)
}

module.exports={
  startDeadline,
  updateDeadline,
  testDeadline
}