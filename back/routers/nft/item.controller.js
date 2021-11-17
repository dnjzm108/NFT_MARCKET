const { type } = require("caver-js/packages/caver-transaction");
const { execute,query } = require("../../pool");
const { successData } = require("../../returnData");
const {makeFilterQuery} = require('../../sql/search')
const errorData={
  success:false,
}


const getNFTs= async(req,res)=>{
  
  const p = 12;
  const d = new Date('2021-11-10')
  const o = false;
  
  const params = [p,d,o]
  const sql = `INSERT INTO auction (product_id,deadline,option) VALUES(?,?,?);`
  const result = await execute(sql,params)
  
}




module.exports={
  getNFTs,
}


