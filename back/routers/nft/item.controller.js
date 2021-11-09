const { type } = require("caver-js/packages/caver-transaction");
const { execute,query } = require("../../pool")



const getNfts= async(req,res)=>{
  const {type,price,designer,category,sort,searchtype,searchvalue,skip} = req.query.search;
  makeFilterQuery(req.query)
  const sql = `SELECT * FROM `
}

const testGetNFT = async(req,res)=>{
  const {skip} = req.query;
  console.log(req.query);
  const data = {
    success:true,
    filter:req.query,
    nft:[],
    skip
  }
  res.json(data)
}

const getFilterData = async(req,res)=>{

  const show_designer = `
  SELECT B.nickname,B.picture FROM product as A
  LEFT JOIN user as B
  ON A.creater = B.nickname
  GROUP BY B.nickname`
  const designer = await query(show_designer);
  const designerResult = designer.map(v=>{ return {"name":v.nickname, "img":v.picture}})

  const categorySql = `
  SELECT 
        B.code AS b_code,B.value AS b_name, M.code AS m_code, M.value AS m_name  
  FROM 
        middlecategory AS M 
  LEFT JOIN 
        bigcategory AS B
  ON 
        M.big_code=B.code
  ;`
  const categoryResult = await query(categorySql);

  const category={}; 
  const bigCategory = new Set(categoryResult.map(v=>{ 
    const {b_code,b_name} = v;
    return JSON.stringify({b_code,b_name})
  }))
  
  bigCategory.forEach(v=>{
    const {b_code,b_name} = JSON.parse(v);
    category[b_code] = {
      name:b_name, 
      code:b_code,
      list:[{name:'전체', code:b_code}]
    }
  })

  categoryResult.forEach(v=>{
    const {m_name,m_code,b_code} = v;
    category[b_code].list.push({name:m_name, code:`${b_code}${m_code}`})
  })
   const categoryLast = Object.entries(category).map(v=>v[1]); 

  if(designer==false || categoryResult==false){
    res.json(errorData)    
  }else{
    const data ={
      success:true,
      category:categoryLast,
      designer:designerResult,
    }
    res.json(data)
  }
  
}

module.exports={
  getNfts,
  testGetNFT,
  getFilterData
}

const makeFilterQuery = (query) =>{
  const {type,price_min,price_max,designer,category,sort,search,skip,} = query;

  let mainVerse;
  
  //// 구매일 때, 
    mainVerse = `
                SELECT 
                        * 
                FROM 
                      product  AS A
                NATURAL JOIN
                            (SELECT
                                    price, product_no 
                              FROM 
                                    product_detail
                              GROUP BY 
                                    product_no
                            ) AS B
                NATURAL JOIN
                            (SELECT
                                  product_img, product_no
                            FROM
                                  img
                            GROUP BY
                                  product_no
                            ) AS C 
                WHERE 
                      rest>0 AND type=${type}  
                ORDER BY 
                      

                `



  const typeVerse = makeWhereVerse('type',type);
  const designerVerse = makeWhereVerse('',type);
  // const typeVerse = makeWhereVerse('type',type);
  // const typeVerse = makeWhereVerse('type',type);
}

const makeWhereVerse = (key,value)=>{
  if(value){
    if(value.length==1){
      return `${key}=${value}`
    }else{
      const tempArr = [];
      value.forEach(v=>{
        tempArr.push(`${key}=${v}`)
      })
      return '('+tempArr.join(' OR ')+')'
    }
  }else{
    return ''
  }
}

