const { query } = require('../../pool');
const {successData,errorData} = require('../../returnData')
const {
  getDesignerSql,
  getCategorySql,
  getAllListSql,
  getBuyListSql,
  getAuctionListSql
} = require('../../sql/main')


const getMainInit = async(req,res) => {
  console.log('init')
  //필터 디자이너 목록 가져오기
  const designerSql = getDesignerSql();
  const designerResult = await query(designerSql);
  const designer = designerResult.map(v=>{ return {"name":v.nickname, "img":v.picture}})

  //필터 카테고리 가져오기
  const categorySql = getCategorySql();
  const categoryResult = await query(categorySql);
  
  //프론트에서 관리하기 편한 형태로 정리
  const category = clearCategory(categoryResult); 

  //메인컨텐츠 가져오기.
  const listSql = getAllListSql({skip:0});
  const list = await query(listSql);

  const data = {
    designer,
    category,
    list,
    skip:16
  }
  res.json(successData(data))
}

const getMain = async(req,res)=>{
  console.log('get')

  let params = req.query;
  params.skip = params.skip==undefined ? 0 : params.skip
  let listSql;
  switch(params.type){
    case 'buy':
      listSql=getBuyListSql(params);
      break;
    case 'auction':
      listSql=getAuctionListSql(params);
      break;
    case 'all': default:
      listSql=getAllListSql(params);
      break;
  }
  const list = await query(listSql);
  const data = {
    list,
    skip:+params.skip+16
  }
  res.json(successData(data))

}






module.exports={
  getMainInit,
  getMain
}

function clearCategory(category){
  let categoryTemp = {};
  const bigCategory = new Set(category.map(v=>{ 
    const {b_code,b_name} = v;
    return JSON.stringify({b_code,b_name})
  }))

  bigCategory.forEach(v=>{
    const {b_code,b_name} = JSON.parse(v);
    categoryTemp[b_code] = {
      name:b_name, 
      code:b_code,
      list:[{name:'전체', code:b_code}]
    }
  })

  category.forEach(v=>{
    const {m_name,m_code,b_code} = v;
    categoryTemp[b_code].list.push({name:m_name, code:`${b_code}${m_code}`})
  })
  return  Object.entries(categoryTemp).map(v=>v[1]); 
}