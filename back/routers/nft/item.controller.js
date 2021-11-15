const { type } = require("caver-js/packages/caver-transaction");
const { execute,query } = require("../../pool");
const { successData } = require("../../returnData");
const {makeFilterQuery} = require('../../sql/search')
const errorData={
  success:false,
}


const getNFTs= async(req,res)=>{

  
  const sql = makeFilterQuery(req.query);
  // console.log(sql)
  const result = await query(sql);
  const data ={
    skip:req.query.skip,
    nft:result
  }
  res.json(successData(data))
}




module.exports={
  getNFTs,
}


