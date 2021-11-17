const { type } = require("caver-js/packages/caver-transaction");
const { execute,query } = require("../../pool");
const { successData } = require("../../returnData");
const {makeFilterQuery} = require('../../sql/search')
const { productNum_sql } = require('../../sql/mint')
const errorData={
  success:false,
}



const getNFTs= async(req,res)=>{
  const category = `B105`
  const LastProduct = await query(productNum_sql(category))
  // 특정 카테고리에 해당하는 한줄 데이터 다가져옴
  
}

const getLastProduct = async(req,res)=>{
  const category = `B105`
  const LastProduct = await query(productNum_sql(category))
}



module.exports={
  getNFTs,
}


