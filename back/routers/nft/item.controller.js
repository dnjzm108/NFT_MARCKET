const { type } = require("caver-js/packages/caver-transaction");
const { execute,query } = require("../../pool")



const getNfts= async(req,res)=>{
  const {type,price,designer,category,sort,searchtype,searchvalue,skip} = req.query.search;
  makeFilterQuery(req.query)
  const sql = `SELECT * FROM `
}

const testGetNFT = async(req,res)=>{
  const {skip} = req.query;
  const sql = ` SELECT * FROM nft
                NATURAL JOIN nft_images
                GROUP BY nft_images.nft_id
                LIMIT ?,10;`
  const result = await execute(sql,[skip]);
  const data ={
    success:true,
    nft:result,
    skip:skip
  }
  res.json(data);
}

const getDesigner = async(req,res)=>{

  const sql = `SELECT user_nick AS name,user_image AS img
                FROM user
                WHERE user_type=4;`
  const result = await query(sql);
  if(!result) res.json({success:false})
  else{
    res.json({
      success:true,
      designer:result[0]
    })
  }
}


module.exports={
  getNfts,
  testGetNFT,
  getDesigner
}

const makeFilterQuery = (query) =>{
  const {type,price,designer,category,sort,searchtype,searchvalue,skip,start} = query.search;
  const sql =`
    SELECT * 
    FROM nft
    LEFT JOIN auction
    ON auction.nft_id=nft.id
    LEFT JOIN purchase
    ON purchase.nft_id=nft.id
    WHERE 
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


const temp = {
  search: {
    sortAscending: 'false',
    sortBy: 'LAST_SALE_DATE',
    toggles: [ 'ON_AUCTION', 'HAS_OFFERS' ]
  }
}