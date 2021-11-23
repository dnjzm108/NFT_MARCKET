const getDesignerSql = () => {
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


const getCategorySql = () => {
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


const getAllListSql = (params, nickname) => {
      const _nickname = nickname == undefined ? '' : nickname;
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
          D.deadline,
          P.isLike,
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
                  B.img,
                  L.nickname AS isLike
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

            LEFT JOIN (
                  SELECT 
                         * 
                  FROM 
                        likes 
                  WHERE 
                        nickname='${_nickname}'
                  ) AS L 
        ON 
            A.product_no=L.product_no
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
            NATURAL JOIN (
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
                        ON 
                              auction.auction_id=L.auction_id
                )AS A
  ) AS D

  WHERE 
        leftover>0 AND type!='stop' ${where} 
  ${order}
  LIMIT 
        ${params.skip},16;
  `
}


const getBuyListSql = (params, nickname) => {
      const _nickname = nickname == undefined ? '' : nickname;
      const where = makeWhereVerse(params);
      const order = makeOrderVerse(params.sort);
      return `
  SELECT 
          P.type,
          P.product_no,
          D.price,
          P.name,
          P.creater,
          P.likes,
          P.date,
          P.isLike,
          I.img
  FROM 
            (SELECT
                  P.type,
                  P.product_no,
                  P.name,
                  P.creater,
                  P.likes,
                  P.date,
                  P.leftover,
                  L.nickname  as isLike   
            FROM 
                  product as P
            LEFT JOIN (
                        SELECT 
                               * 
                        FROM 
                              likes 
                        WHERE 
                              nickname='${_nickname}'
                        ) AS L 
            ON 
                  P.product_no=L.product_no
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
  
      WHERE 
              leftover>0 AND type!='stop' ${where}
  ${order}
  LIMIT 
      ${params.skip},16;
  `
}

const getAuctionListSql = (params, nickname) => {
      const _nickname = nickname == undefined ? '' : nickname;
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
          P.isLike,
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
                  L.nickname AS isLike,
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
            LEFT JOIN (
                  SELECT 
                         * 
                  FROM 
                        likes 
                  WHERE 
                        nickname='${_nickname}'
                  ) AS L 
        ON 
            A.product_no=L.product_no 
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
        leftover>0 AND type!='stop' ${where} 
  ${order}
  LIMIT 
        ${params.skip},16;
  `

}


const checkLikeSql = (data) =>{
      return `
      SELECT
            COUNT(nickname) as cnt
      FROM
            likes
      WHERE product_no='${data.product_no}' AND nickname='${data.nickname}'
      `
}


const insertLikeSql = ()=>{
      return `
      INSERT INTO likes (product_no,nickname) VALUES(?,?); 
      `
}

const deleteLikeSql = ()=>{
      return `
      DELETE FROM likes WHERE product_no=? AND nickname=?; 
      `
}

module.exports = {
      getDesignerSql,
      getCategorySql,
      getAllListSql,
      getBuyListSql,
      getAuctionListSql,
      checkLikeSql,
      insertLikeSql,
      deleteLikeSql,
}




function makeWhereVerse(params) {
      const { category, designer, search, priceMax, priceMin,isMine } = params;
      let where = ``
      if (designer != undefined && designer.length > 0) {
            where += ' AND ' + makeSignVerse('creater', '=', designer);
      }
      if (priceMin != undefined) {
            where += ` AND price>=${priceMin}`;
      }
      if (priceMax != undefined) {
            where += ` AND price<=${priceMax}`;
      }
      if (category != undefined) {
            where += ` AND (product_no like '${category}%')`;
      }
      if (search != undefined) {
            where += ` AND (creater like '%${search}%' OR name like '%${search}%')`;
      }
      if(isMine !=undefined){
            where += ` AND isLike='${isMine}' `
      }
      return where;
}

function makeOrderVerse(sort) {
      switch (sort) {
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

function makeSignVerse(key, sign, value) {
      if (value) {
            if (typeof value == 'string') {
                  return `${key}${sign}"${value}"`
            } else {
                  const tempArr = [];
                  value.forEach(v => {
                        tempArr.push(`${key}${sign}"${v}"`)
                  })
                  return '(' + tempArr.join(' OR ') + ')'
            }
      } else {
            return ''
      }
}

