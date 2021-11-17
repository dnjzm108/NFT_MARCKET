const {query, execute} = require('../../pool');
const {myBuyListQuery,
      myAuctionListQuery,
      myAuctionSellListQuery,
      myImmySellListQuery,
      updateShipQuery
    } = require('../../sql/mylist');
const {successData,errorData,error400} = require('../../returnData')


const getMyBuy = async(req,res)=>{
  const cntsql = myBuyListQuery({...req.query,nickname:'jin'},'cnt');
  const [cntResult] = await query(cntsql);
  const cnt = cntResult.cnt;
  // 요청한 값이 없을 떄. 
  if(cnt==0){
    const data={
      page:1,
      pageblock:[1],
      totalPage:1,
      list:[]
    }
    res.json(successData(data))
    return
  }

  const {page,rows, pageblock, totalPage} =makePageBlock(cnt,req.query.page,req.query.rows)
  const params = {...req.query,page,rows}
  const sql = myBuyListQuery(params);
  const result = await query(sql);
  const data = {
    list:result,
    page,
    pageblock,
    totalPage,
  }
  res.json(successData(data))
} 



const getMyAuction = async(req,res)=>{
  const cntsql = myAuctionListQuery({...req.query},'cnt');
  const [cntResult] = await query(cntsql);
  const cnt = cntResult.cnt;
  // 요청한 값이 없을 떄. 
  if(cnt==0){
    const data={
      page:1,
      pageblock:[1],
      totalPage:1,
      list:[]
    }
    res.json(successData(data))
    return
  }

  const {page,rows, pageblock, totalPage} =makePageBlock(cnt,req.query.page,req.query.rows)
  const params = {...req.query,page,rows}
  const sql = myAuctionListQuery(params);
  const result = await query(sql);
  const data = {
    list:result,
    page,
    pageblock,
    totalPage,
  }
  res.json(successData(data))

}

const getMyImmySellALL = async(req,res)=>{
  const cntsql = myImmySellAllListQuery(req.query,'cnt');
  const [cntResult] = await query(cntsql);
  const cnt = cntResult.cnt;
  
  // 요청한 값이 없을 떄. 
  if(cnt==0){
    const data={
      page:1,
      pageblock:[1],
      totalPage:1,
      list:[]
    }
    res.json(successData(data))
    return
  }

  const {page,rows, pageblock, totalPage} =makePageBlock(cnt,req.query.page,req.query.rows)
  const params = {...req.query,page,rows}
  const sql = myImmySellAllListQuery(params);
  const result = await query(sql);
  const data = {
    list:result,
    page,
    pageblock,
    totalPage,
  }
  res.json(successData(data))
}

const getMyImmySell = async(req,res)=>{
  const cntsql = myImmySellListQuery(req.query,'cnt');
  const [cntResult] = await query(cntsql);
  const cnt = cntResult.cnt;
  
  // 요청한 값이 없을 떄. 
  if(cnt==0){
    const data={
      page:1,
      pageblock:[1],
      totalPage:1,
      list:[]
    }
    res.json(successData(data))
    return
  }

  const {page,rows, pageblock, totalPage} =makePageBlock(cnt,req.query.page,req.query.rows)
  const params = {...req.query,page,rows}
  const sql = myImmySellListQuery(params);
  const result = await query(sql);
  const data = {
    list:result,
    page,
    pageblock,
    totalPage,
  }
  res.json(successData(data))
}

const getMyAuctionSell = async(req,res)=>{
  const cntsql = myAuctionSellListQuery(req.query,'cnt');
  const [cntResult] = await query(cntsql);
  const cnt = cntResult.cnt;
  
  // 요청한 값이 없을 떄. 
  if(cnt==0){
    const data={
      page:1,
      pageblock:[1],
      totalPage:1,
      list:[]
    }
    res.json(successData(data))
    return
  }

  const {page,rows, pageblock, totalPage} =makePageBlock(cnt,req.query.page,req.query.rows)
  const params = {...req.query,page,rows}
  const sql = myAuctionSellListQuery(params);
  const result = await query(sql);
  const data = {
    list:result,
    page,
    pageblock,
    totalPage,
  }
  res.json(successData(data))

}
///////////////////////////////////////
///// 주문자 확인하는 코드 추가하기 ////
///////////////////////////////////////
const updateShipInfo = async(req,res)=>{
  const {
    reciever,
    recieve_type,
    phone_number,
    address,
    order_id,
  } = req.body;
  const shipSql = updateShipQuery();
  const params=[
    reciever,
    recieve_type,
    phone_number,
    address,
    order_id,]
  const result = await execute(shipSql,params)
  if(result==false){
    res.json(error400())
    return;
  }
  const data={
    order_id,
  }
  res.json(successData(data))
}




const makePageBlock = (cnt,page,rows) => {
  const totalPage = Math.ceil(cnt / rows) >0 ?Math.ceil(cnt / rows) : 1;
  if (page > totalPage) page = totalPage;
  let block = 10;
  while (page > block) {
      block += 10;
  }
  const pageblock = [];
  for (let i = block - 9; i <= block; i++) {
      pageblock.push(+i);
      if (i === totalPage) break;
  }
  if(page==0) page=1 
  return { page: page, rows: +rows, pageblock: pageblock, totalPage: totalPage }
}

module.exports={
  getMyBuy,
  getMyAuction,
  getMyImmySell,
  getMyAuctionSell,
  updateShipInfo,
}