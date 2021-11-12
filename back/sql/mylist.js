///=== 구매 목록 sql

//////////======== 구매상품 쿼리
function myBuyListQuery(query,type){
  const {nickname,page,rows,search, status,sort} = query;
  let value=`O.order_id,O.price AS order_price,O.date as order_date, O.qty, D.product_no, D.color, D.size, P.name,P.type as selltype, P.creater,P.likes,V.dlvy_id,V.status,V.address,I.img`
  if(type=='cnt'){
    value='COUNT(*) AS cnt'
  }
  let sql=`
  SELECT 
      ${value}
  FROM(
        SELECT
              *
        FROM
              orders  
        WHERE 
              buyer='${nickname}'
      )	as O 
  LEFT JOIN 
            product_detail as D
  ON 
            O.product_id=D.product_id
  LEFT JOIN 
            product as P
  ON 
    P.product_no=D.product_no
  LEFT JOIN
            (SELECT 
                   *
              FROM 
                  product_image
              GROUP BY 
                  product_no
            ) as I
  ON
    I.product_no=P.product_no
  LEFT JOIN
          delivery as V
  ON
    O.order_id=V.order_id
  WHERE 
        (P.type='buy' OR P.type='auction') `
  
  if(status!=undefined&&status!="all"){
    if(status=='null'){
      sql+=` AND V.address is null`
    }else{
      sql+=` AND V.status='${status}'`
    }
  }

  if(search!=undefined){
    sql+=` AND (creater like '%${search}%' OR name like '%${search}%')`
  }

  if(type=='cnt'){
    return sql+';';
  }
  
  sql+=`\nORDER BY `
  switch(sort){
    case 'like':
      sql+='likes DESC';
      break;
    case 'old':
      sql+='order_date ASC';
      break;

    case 'new':
      sql+='order_date DESC';
      break;

    case 'low':
      sql+='price ASC';
      break;

    case 'high':
      sql+='price DESC';
      break;

    default:
      sql+='order_date DESC';
  }

  sql+= `\n LIMIT ${(page-1)*rows},${rows}`

  return sql+';'; 
}



//////////======== 경매상품 쿼리
function myAuctionListQuery(query,type){
  const {nickname,page,rows,search, status,sort} = query;
  let value=`H.bid,H.date as bid_date,H.auction_id,H.status as bid_status,D.date as order_date, D.product_no, D.color, D.size,D.qty, P.name, P.creater,P.likes,I.img,L.latest`
  if(type=='cnt'){
    value='COUNT(*) AS cnt'
  }
  let sql=`
  SELECT 
         ${value}
  FROM(
        SELECT
              *
        FROM
              auction_history
        WHERE
              bidder='${nickname}'
      )	as H
  LEFT JOIN (
            SELECT 
                       *
              FROM(
                    SELECT 
                           auction_id,bid AS latest
                    FROM
                          auction_history
                    WHERE
                          (auction_id,bid) 
                    IN (
                          SELECT 
                                auction_id, max(bid) AS bid
                          FROM 
                                auction_history
                          GROUP BY 
                                auction_id
                       )
                    ORDER BY bid DESC
                    ) AS H
                   GROUP BY 
                            auction_id
     ) AS L
  ON 
        H.auction_id=L.auction_id 
  LEFT JOIN
          auction as A
  ON
    H.auction_id=A.auction_id
  LEFT JOIN 
            ( SELECT
							* 
					FROM
							product_detail 
					NATURAL JOIN orders
				)
				as D
  ON 
            A.product_id=D.product_id
  LEFT JOIN 
            product as P
  ON 
    D.product_no=P.product_no
  LEFT JOIN
            (SELECT 
                   *
              FROM 
                  product_image
              GROUP BY 
                  product_no
            ) as I
  ON
    P.product_no=I.product_no
  WHERE 
        P.type='auction'`
  
  if(status!=undefined&&status!="all"){
    sql+=` AND H.status='${status}'`
  }

  if(search!=undefined){
    sql+=` AND (P.creater like '%${search}%' OR P.name like '%${search}%')`
  }

  if(type=='cnt'){
    return sql+';';
  }
  
  sql+=`\nORDER BY `
  switch(sort){
    case 'like':
      sql+='P.likes DESC';
      break;
    case 'old':
      sql+='H.date ASC';
      break;
    case 'new':
      sql+='H.date DESC';
      break;
    case 'dead':
      sql+='A.deadline DESC'
    case 'low':
      sql+='H.bid ASC';
      break;
    case 'high':
      sql+='H.bid DESC';
      break;
    default:
      sql+='H.date DESC';
  }

  sql+= `\n LIMIT ${(page-1)*rows},${rows}`

  return sql+';'; 
}



/// 경매 판매 상품 리스트 쿼리
function myAuctionSellListQuery(query,type){
  const {nickname,page,rows,search, status,sort} = query;
  let value=`P.product_no,
            P.name,
            P.creater,
            P.likes,
            P.date as start_date,
            P.leftover,
            I.img,
            D.color,
            D.size,
            D.price as start_price,
            A.auction_id,
            A.deadline as end_date,
            A.option,
            L.latest,
            O.order_id,
            O.buyer,
            V.dlvy_id,
            V.status as dlvy_status` 
  let wherCnt = false;
  if(type=='cnt'){
    value='COUNT(*) AS cnt'
  }
  let sql=`
            SELECT 
            		${value}
            FROM
            		( SELECT 
            					*
            			FROM
            					product 
            			WHERE 
            					type='auction' AND creater='${nickname}'
            		)AS P
            INNER JOIN
                        (SELECT 
                               *
                          FROM 
                              product_image
                          GROUP BY 
                              product_no
                        ) as I
            ON
                P.product_no=I.product_no 
            INNER JOIN
            			product_detail AS D		
            ON 
            	P.product_no=D.product_no
            INNER JOIN
            		auction AS A
            ON
            	D.product_id=A.product_id
            LEFT JOIN (
                        SELECT 
                                   *
                          FROM(
                                SELECT 
                                       auction_id,bid AS latest
                                FROM
                                      auction_history
                                WHERE
                                      (auction_id,bid) 
                                IN (
                                      SELECT 
                                            auction_id, max(bid) AS bid
                                      FROM 
                                            auction_history
                                      GROUP BY 
                                            auction_id
                                   )
                                ORDER BY bid DESC
                                ) AS H
                               GROUP BY 
                                        auction_id
                 ) AS L
            ON 
               A.auction_id=L.auction_id
            LEFT JOIN 
            			 orders AS O 
            ON  
            	D.product_id=O.product_id
            LEFT JOIN
                     delivery AS V
            ON 
            	O.order_id=V.order_id
           
  `
  
  if(status!=undefined&&status!="all"){
    wherCnt=true; 
    switch(status){
      case "true":
      sql+=`WHERE date(A.deadline)>=date(now()) `
      break;
      case "false":
      sql+=`WHERE date(A.deadline)<date(now()) `
      break;
      case "wait":
      sql+=`WHERE V.status='wait' `
      break;
      case "ready":
      sql+=`WHERE V.status='ready' `
      break;
      case "delivery":
      sql+=`WHERE V.status='delivery' `
      break;
      case "completed":
      sql+=`WHERE V.status='completed' `
      break;
      default:
        break; 
    }
  }

  if(search!=undefined){
    if(wherCnt){
      sql+=` AND  P.name like '%${search}%'`
    }else{
      sql+=` WHERE  P.name like '%${search}%'`
      wherCnt=true; 
    }
  }

  if(type=='cnt'){
    return sql+';';
  }
  
  sql+=`\nORDER BY `
  switch(sort){
    case 'like':
      sql+='P.likes DESC';
      break;
    case 'old':
      sql+='P.date ASC';
      break;
    case 'new':
      sql+='P.date DESC';
      break;
    case 'dead':
      sql+='A.deadline DESC'
      break;
    case 'low':
      sql+='L.latest ASC';
      break;
    case 'high':
      sql+='L.latest DESC';
      break;
    default:
      sql+='P.date DESC';
  }

  sql+= `\n LIMIT ${(page-1)*rows},${rows}`

  return sql+';'; 
}


/////==== 즉시 판매 상품 리스트 쿼리
function myImmySellListQuery(query,type){
  const {nickname,page,rows,search, status,sort} = query;
  let wherCnt = false;
  let value=`	
            P.name,
            P.product_no,
            P.date, 
            P.likes,
            P.total_qty,
            P.leftover,
            P.type,
            I.img` 
  if(type=='cnt'){
    value='COUNT(*) AS cnt'
  }
  let sql=`
            SELECT 
                  ${value}
            FROM (
                  SELECT
                        *
                  FROM
                      product
                    WHERE 
                        type!='auction' AND creater='${nickname}'
                  ) AS P 
            INNER JOIN
                      (SELECT 
                             *
                        FROM 
                            product_image
                        GROUP BY 
                            product_no
                      ) as I
            ON
              P.product_no=I.product_no 
  `
  
  /////// 나중에 상품 타입에 판매 중지 값을 넣어줄 수도 있음. 
  if(status!=undefined&&status!="all"){
    wherCnt=true; 
    switch(status){
      case "sale":
      sql+=`WHERE (P.leftover>0 AND P.type!='stop')`
      break;
      case "soldout":
      sql+=`WHERE P.leftover=0`
      break;
      case "stop":
      sql+=`WHERE P.type='stop'`
      break;
    }
  }

  if(search!=undefined){
    if(wherCnt){
      sql+=` AND  P.name like '%${search}%'`
    }else{
      sql+=` WHERE  P.name like '%${search}%'`
      wherCnt=true; 
    }
  }

  if(type=='cnt'){
    return sql+';';
  }
  
  sql+=`\nORDER BY `
  switch(sort){
    case 'like':
      sql+='P.likes DESC';
      break;
    case 'old':
      sql+='P.date ASC';
      break;
    case 'new':
      sql+='P.date DESC';
      break;
    default:
      sql+='P.date DESC';
  }

  sql+= `\n LIMIT ${(page-1)*rows},${rows}`

  return sql+';'; 
}
















module.exports={
  myBuyListQuery,
  myAuctionListQuery,
  myAuctionSellListQuery,
  myImmySellListQuery
}