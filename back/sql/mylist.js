///=== 구매 목록 sql
function updateShipQuery(){
  return `INSERT INTO 
                delivery 
            (
              reciever,
              recieve_type,
              phone_number,
              address,
              status,
              order_id
              ) 
            VALUES(
              ?,?,?,?,'ready',?
            );  
            `
}

function updateInvoiceQuery(){
  return`
    UPDATE
          delivery
    SET
        invoice=?,
        delivery_company=?,
        ship_date=NOW(),
        status='delivery'
    WHERE
        order_id=?;
  `
}

function completeDeliveryQuery(){
  return`
    UPDATE
          delivery
    SET
        complete_date=NOW(),
        status='completed'
    WHERE
        order_id=?;
  `
}






//////////======== 구매상품 쿼리
function myBuyListQuery(query,type){
  const {nickname,page,rows,search, status,sort} = query;
  let value=`
            O.order_id,
            O.price AS order_price,
            date_format(O.date,'%y-%m-%d %h:%i') as order_date, 
            O.qty, 
            D.product_no, 
            D.color, 
            D.size, 
            P.name,
            P.type as selltype, 
            P.creater,
            P.likes,
            O.total,
            V.dlvy_id,
            ifnull(V.status,'wait')as dlvy_status,
            V.reciever,
            V.address,
            V.request,
            V.recieve_type,
            V.phone_number,
            V.ready_date,
            V.ship_date,
            V.complete_date,
            V.invoice,
            V.delivery_company,
            I.img`
  if(type=='cnt'){
    value='COUNT(*) AS cnt'
  }
  let sql=`
  SELECT 
      ${value}
  FROM(
        SELECT
              *,
              (qty*price) as total
        FROM
              orders  
        WHERE 
              buyer='${nickname}'
      )	as O 
  LEFT JOIN 
            (
              SELECT 
                    product_id,product_no,color,size
               FROM
                  product_detail 
            )as D
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
    sql+=` AND (creater like '%${search}%' OR P.product_no like '%${search}%' OR name like '%${search}%')`
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
      sql+='total ASC';
      break;

    case 'high':
      sql+='total DESC';
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
  let value=`
        H.bid,
        date_format(H.date,'%y-%m-%d %h:%i:%s') as bid_date,  
        H.auction_id,
        H.status as bid_status,
        date_format(D.date,'%y-%m-%d %h:%i') as order_date,  
        D.product_no, 
        D.color,
        D.size,
        D.qty, 
        P.name, 
        P.creater,
        P.likes,
        I.img,
        L.latest,
        date_format(A.deadline,'%y-%m-%d %h:%i:%s') as deadline
        `

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
              bider='${nickname}'
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
    sql+=` AND (P.creater like '%${search}%' OR P.product_no like '%${search}%' OR P.name like '%${search}%')`
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
      sql+='A.deadline ASC'
      break;
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
            date_format(P.date,'%y-%m-%d %h:%i:%s') as start_date,   
            P.leftover,
            I.img,
            D.color,
            D.size,
            D.price as start_price,
            A.auction_id,
            date_format(A.deadline,'%y-%m-%d %h:%i:%s') as end_date,   
            A.option,
            L.latest,
            O.order_id,
            O.buyer,
            O.price,
            V.dlvy_id,
            ifnull(V.status,'wait')as dlvy_status,
            V.reciever,
            V.address,
            V.request,
            V.recieve_type,
            V.phone_number,
            V.ready_date,
            V.ship_date,
            V.complete_date,
            V.invoice,
            V.delivery_company
            `
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
      sql+=` AND  (P.name like '%${search}%' OR P.product_no like '%${search}%')`
    }else{
      sql+=` WHERE (P.name like '%${search} OR P.product_no like '%${search}%')%'`
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


/////==== 즉시 판매 대표상품, 판매내역 없는 목록. 
//// 안쓰는 거. 
function myImmySellAllListQuery(query,type){
  const {nickname,page,rows,search, status,sort} = query;
  let wherCnt = false;
  let value=`	
            P.name,
            P.product_no,
            date_format(P.date,'%y-%m-%d %h:%i') as date,   
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
      sql+=` AND  (P.name like '%${search}%' OR P.product_no like '%${search}%')`
    }else{
      sql+=` WHERE  (P.name like '%${search}% OR P.product_no like '%${search}%')'`
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


/////==== 즉시 판매 상품 리스트 쿼리
function myImmySellListQuery(query,type){
  const {nickname,page,rows,search, status,sort} = query;
  let value=`	
  O.qty,
  date_format(O.date,'%y-%m-%d %h:%i') as date,   
  O.order_id,
  O.price,
  O.buyer,
  D.color,
  D.size,
  P.product_no,
  P.name,
  P.likes,
  date_format(P.date,'%y-%m-%d %h:%i') as reg_date,   
  ifnull(V.status,'wait')as dlvy_status,
  V.reciever,
  V.address,
  V.request,
  V.recieve_type,
  V.phone_number,
  V.ready_date,
  V.ship_date,
  V.complete_date,
  V.invoice,
  V.delivery_company
  ` 

  if(type=='cnt'){
    value='COUNT(*) AS cnt'
  }
  let sql=`
            SELECT
                  ${value}
            FROM 	( 
                  SELECT
                        *,
                        (qty*price) as total
                  FROM
                        orders 
              )AS O 
            LEFT JOIN
                  delivery AS V
            ON 
                  V.order_id=O.order_id
            NATURAL JOIN
                  product_detail AS D
            LEFT JOIN 
                  product AS P
            ON
              P.product_no=D.product_no
            WHERE 
                 P.creater='${nickname}'`
  
  /////// 나중에 상품 타입에 판매 중지 값을 넣어줄 수도 있음. 
    switch(status){
      case "sale":
      sql+=` AND (P.leftover>0 AND P.type='buy')`
      break;
      case "soldout":
      sql+=` AND P.leftover=0`
      break;
      case "stop":
      sql+=` AND P.type='stop'`
      break;
      case "all": default:
      sql+=` AND P.type='buy'`
      break;
    }

  if(search!=undefined){
      sql+=` AND (P.name like '%${search}%' OR P.product_no like '%${search}%')`
    }
  

  if(type=='cnt'){
    return sql+';';
  }
  
  sql+=`\nORDER BY `
  switch(sort){
    case 'like':
      sql+='P.likes DESC';
      break;
    case 'low':
      sql+='total ASC';
      break;
    case 'high':
      sql+='total DESC';
      break;
    case 'old':
      sql+='O.date ASC';
      break;
    case 'new': default:
      sql+='O.date DESC';
      break;
  }

  sql+= `\n LIMIT ${(page-1)*rows},${rows}`

  return sql+';'; 
}




module.exports={
  myBuyListQuery,
  myAuctionListQuery,
  myAuctionSellListQuery,
  myImmySellListQuery,
  myImmySellAllListQuery,
  updateShipQuery,
  updateInvoiceQuery,
  completeDeliveryQuery
}