const isBidSql = (auction_id)=>{
  return`
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
}


const newBidSql = (auction_id)=>{
  return`
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
}

const addOrderSql = ()=>{
  return`
  INSERT INTO
  orders
  (product_id,price,buyer)
  VALUES(?,?,?);
  `
}


const stopAuctionSQL=(auction_id)=>{
  return`
  UPDATE
	      product
  SET 
	      type='stop',
        leftover=0
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
  ; 
  UPDATE
	      product_detail
  SET 
	      rest=1
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
                );`
}



module.exports={
  isBidSql,
  newBidSql,
  addOrderSql,
  stopAuctionSQL



}