const { type } = require("caver-js/packages/caver-transaction");
const { execute,query } = require("../../pool");
const { successData } = require("../../returnData");
const {makeFilterQuery} = require('../../sql/search')
const errorData={
  success:false,
}


const getNFTs= async(req,res)=>{
  const sql = makeFilterQuery(req.query);
  const result = await query(sql);
  const data ={
    skip:req.query.skip,
    nft:result
  }
  res.json(successData(data))
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
  getFilterData,
  getNFTs,
}


