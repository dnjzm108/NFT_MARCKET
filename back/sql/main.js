const getDesignerSql = ()=>{
  return `
  SELECT 
        U.nickname,
        U.picture 
  FROM 
        product as P
  LEFT JOIN 
        user as U
  ON 
        P.creater = U.nickname
  GROUP BY 
        U.nickname`
}


const getCategorySql = ()=> {
  return `
  SELECT 
        B.code AS b_code,
        B.value AS b_name,
        M.code AS m_code,
        M.value AS m_name  
  FROM 
        middlecategory AS M 
  LEFT JOIN 
        bigcategory AS B
  ON 
        M.big_code=B.code
  ;`
}


const getAllListSql = (params)=>{
  
  const where = makeWhereVerse(params);
  const order = makeOrderVerse(params.sort);
  return `
  SELECT 
          P.product_no,
          P.name,
          P.creater,
          P.likes,
          P.type,
          P.date,
          ifnull(D.bid,D.price) AS price,
          P.img
  FROM(
          SELECT
                  A.name,
                  A.creater,
                  A.likes,
                  A.type,
                  A.product_no,
                  A.date,
                  A.leftover,
                  B.img
          FROM
                  product AS A
          NATURAL JOIN ( 
                          SELECT
                                img, 
                                product_no
                          FROM
                                product_image
                          GROUP BY
                                product_no
                ) AS B
      )AS P
  NATURAL JOIN(
            SELECT 
                  Q.product_id,
                  Q.product_no,
                  Q.price,A.bid
            FROM( 
                  SELECT 
                          product_no,product_id,price
                  FROM 
                          product_detail 
                  GROUP BY 
                          product_no
                )AS Q
            LEFT JOIN (
                        SELECT 
                                auction.auction_id AS auction_id,
                                auction.product_id,
                                L.bid
                        FROM 
                                auction
                        LEFT JOIN( 
                                  SELECT 
                                          *
                                  FROM(
                                          SELECT 
                                                  *
                                          FROM
                                                  auction_history
                                          WHERE
                                                  (auction_id,bid) IN (
                                                                    SELECT 
                                                                          auction_id, 
                                                                          max(bid) AS bid
                                                                    FROM 
                                                                          auction_history
                                                                    GROUP BY 
                                                                          auction_id
                                                                      )
                                            ORDER BY 
                                                  bid DESC
                                        ) AS H
                                  GROUP BY 
                                        auction_id
                                  )AS L
                        ON auction.auction_id=L.auction_id
                )AS A
            ON Q.product_id=A.product_id
  ) AS D
  WHERE 
        leftover>0 ${where} 
  ${order}
  LIMIT 
        ${params.skip},16;
  `
}


const getBuyListSql = (params) =>{
  const where = makeWhereVerse(params);
  const order = makeOrderVerse(params.sort);
  return`
  SELECT 
          P.type,
          P.product_no,
          D.price,
          P.name,
          P.creater,
          P.likes,
          P.date,
          I.img
  FROM 
            (SELECT 
                      * 
              FROM 
                    product  
              WHERE
                    type="buy"
              ) AS P  
  NATURAL JOIN
              (SELECT
                      price,
                      product_no 
                FROM 
                      product_detail
                GROUP BY 
                      product_no
              ) AS D
  NATURAL JOIN
              (SELECT
                      img,
                      product_no
              FROM
                    product_image
              GROUP BY
                    product_no
              ) AS I 
  ${where}
  ${order}
  LIMIT 
      ${params.skip},16;
  `
}

const getAuctionListSql = (params) =>{
  const where = makeWhereVerse(params);
  const order = makeOrderVerse(params.sort);
  return `
  SELECT 
          P.product_no,
          P.name,
          P.creater,
          P.likes,
          P.type,
          P.date,
          ifnull(D.bid,D.price) AS price,
          P.img,
          D.deadline
  FROM(
          SELECT
                  A.name,
                  A.creater,
                  A.likes,
                  A.type,
                  A.product_no,
                  A.date,
                  A.leftover,
                  I.img
          FROM( 
                SELECT 
                        *
                FROM
                      product
                WHERE type='auction'
          )AS A
          NATURAL JOIN ( 
                          SELECT
                                img, 
                                product_no
                          FROM
                                product_image
                          GROUP BY
                                product_no
                ) AS I
      )AS P
  NATURAL JOIN(
            SELECT 
                  Q.product_id,
                  Q.product_no,
                  Q.price,
                  A.bid,
                  A.deadline
            FROM( 
                  SELECT 
                          product_no,product_id,price
                  FROM 
                          product_detail 
                  GROUP BY 
                          product_no
                )AS Q
            LEFT JOIN (
                        SELECT 
                                auction.auction_id AS auction_id,
                                auction.product_id,
                                auction.deadline,
                                L.bid
                        FROM 
                                auction
                        LEFT JOIN( 
                                  SELECT 
                                          *
                                  FROM(
                                          SELECT 
                                                  *
                                          FROM
                                                  auction_history
                                          WHERE
                                                  (auction_id,bid) IN (
                                                                    SELECT 
                                                                          auction_id, 
                                                                          max(bid) AS bid
                                                                    FROM 
                                                                          auction_history
                                                                    GROUP BY 
                                                                          auction_id
                                                                      )
                                            ORDER BY 
                                                  bid DESC
                                        ) AS H
                                  GROUP BY 
                                        auction_id
                                  )AS L
                        ON auction.auction_id=L.auction_id
                )AS A
            ON Q.product_id=A.product_id
  ) AS D
  WHERE 
        leftover>0 ${where} 
  ${order}
  LIMIT 
        ${params.skip},16;
  `

}


function makeWhereVerse(params){
  const {category,designer,search,price_max,price_min} = params;
  let where = ``
  if(designer!=undefined &&designer.length>0){
    where += ' AND '+makeSignVerse('creater','=',designer);
  }
  if(price_min!=undefined && price_max!=undefined){
    where += ` AND (price>=${price_min} AND price<=${price_max} )`;
  }
  if(category!=undefined){
    where +=` AND (product_no like '${category}%')`;
  }
  if(search!=undefined){
    where +=` AND (creater like '%${search}%' OR name like '%${search}%')`;
  }
  return where;
}

function makeOrderVerse(sort){
  switch(sort){
    case 'like':
      return ` ORDER BY likes DESC`;
    case 'low':
      return ` ORDER BY price ASC`;
    case 'high':
      return ` ORDER BY price DESC`;
    case 'old':
      return ` ORDER BY date ASC`;
    case 'dead':
      return ` ORDER BY deadline ASC`
    case 'new': default:
      return ` ORDER BY date DESC`;
  }
}

function makeSignVerse(key,sign,value){
  if(value){
    if(typeof value=='string'){
      return `${key}${sign}"${value}"`
    }else{
      const tempArr = [];
      value.forEach(v=>{
        tempArr.push(`${key}${sign}"${v}"`)
      })
      return '('+tempArr.join(' OR ')+')'
    }
  }else{
    return ''
  }
}

module.exports={
  getDesignerSql,
  getCategorySql,
  getAllListSql,
  getBuyListSql,
  getAuctionListSql,
}
