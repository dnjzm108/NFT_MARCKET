const {query, execute} = require('../../pool');
const {myBuyListQuery,
      myAuctionListQuery,
      myAuctionSellListQuery,
      myImmySellListQuery,
      updateShipQuery,
      updateInvoiceQuery,
      completeDeliveryQuery,
      mySellListQuery,
      getOrderInfoQuery,
      getMyFavoriteQuery,
    } = require('../../sql/mylist');
const {sendKlay} = require('../../klaytn/KIP7_deploy')
const {mintNFT} = require('../../klaytn/KIP17');     
const {successData,errorData,error400} = require('../../returnData');
const {multipFloat} = require('../../util')



const getMyBuy = async(req,res)=>{
  const cntsql = myBuyListQuery(req.query,'cnt');
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
  const cntsql = myAuctionListQuery(req.query,'cnt');
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
  const _nickname = req.get('nickname')
  const nickname = decodeURIComponent(atob(_nickname)); 
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

  const {page,rows, pageblock, totalPage} = makePageBlock(cnt,req.query.page,req.query.rows)
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


const getMySell = async(req,res)=>{
  const _nickname = req.get('nickname')
  const nickname = decodeURIComponent(atob(_nickname)); 
  const cntsql = mySellListQuery(req.query,'cnt');
  
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

  const {page,rows, pageblock, totalPage} = makePageBlock(cnt,req.query.page,req.query.rows)
  const params = {...req.query,page,rows}
  const sql = mySellListQuery(params);
  const result = await query(sql);
  const clearResult = [...new Set(result
                            .map(v=>{return JSON.stringify({
                              product_no:v.product_no,
                              name:v.name,
                              date:v.date,
                              total_qty:v.total_qty,
                              leftover:v.leftover,
                              symbol:v.symbol,
                              likes:v.likes,
                              tokenURI:v.tokenURI,
                              contractAddr:v.contractAddr,
                              type:v.type,
                              img:v.img,
                              lastprice:v.lastprice,
                              max:v.max,
                              list:[],
                            })})
                          )
                ].map(w=>JSON.parse(w));


  clearResult.forEach((c,k)=>{
    if(c.type=='buy'){  //즉시구매 상품일때 
      for(let i = 0; i<result.length; i++){
        const s = result[i]
        if(c.product_no==s.product_no){
          clearResult[k].list.push({
            color:s.color,
            size:s.size,
            qty:s.qty,
            rest:s.rest,
            price:s.price,
          })
        }
      }
    }else{ //경매상품일때. 
      for(let i = 0; i<result.length; i++){
        const s = result[i]
        if(c.product_no==s.product_no && c.list.length==0){
          c.list.push({
            color:s.color,
            size:s.size,
            qty:s.qty,
            rest:s.rest,
            auction:{
              deadline:s.deadline,
              option:s.option,
              start_price:s.startprice
            },
            history:[]
          })
          if(s.bid_date){
            c.list[0].history.push({
              bid:s.bid,
              bider:s.bider,
              status:s.status,
              bid_date:s.bid_date,
            })
          }
        }else if(c.product_no==s.product_no && c.list.length>0){
          if(s.bid_date){
            c.list[0].history.push({
              bid:s.bid,
              bider:s.bider,
              status:s.status,
              bid_date:s.bid_date,
            })
          }
        }
      }
    }
  })
  const data = {
    list:clearResult,
    page,
    pageblock,
    totalPage,
  }
  res.json(successData(data))
}



const getMyFavorite = async(req,res)=>{
  const _nickname = req.get('nickname')
  const {page,status,sort,search} = req.query;
  const skip = (page-1)*16;
  const nickname = decodeURIComponent(atob(_nickname)); 
  const favoriteSql = getMyFavoriteQuery(nickname,sort,status,skip,search);
  const result = await query(favoriteSql);
  const data = {
    list:result,
    page:page,
    pageblock:[1],
    totalPage:1,
  }
  res.json(successData(data))
}



///////////////////////////////////////
/////아래 3개 주문자 확인하는 코드 추가하기 ////
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


const updateInvoiceInfo = async(req,res)=>{
  const {
    invoice,
    delivery_company,
    order_id,
  } = req.body;
  const invoiceSql = updateInvoiceQuery();
  const params=[
    invoice,
    delivery_company,
    order_id,]
  const result = await execute(invoiceSql,params)
  if(result==false){
    res.json(error400())
    return;
  }
  const data={
    order_id,
  }
  res.json(successData(data))
}


///////////////////////////////////////////////////
/////////////영수증 발급하는 쿼리 추가해야됨///////
/////////////////////////////////////////////////
const completeDelivery = async(req,res)=>{
  const {order_id} = req.body;
  const order_info =await execute(getOrderInfoQuery(),[order_id]);
  
  const {price,
		qty,
		buyer_wallet,
		contractAddr,
		tokenURI,
		seller_wallet} = order_info[0];
    let transactionHash=''
    const tokenId = order_info.map(v=>v.tokenId);

    //구매자한테 NFT 보내주기.
    for(let i = 0; i<tokenId.length; i++){
      const tokenID = tokenId[i]
      await mintNFT(contractAddr,tokenID,tokenURI,buyer_wallet)
    }


    const total_price = String(multipFloat([price,qty]))
    //판매자 주소로 pricd * qty 만큼 보내주기.
      const klayReciept = await sendKlay(seller_wallet,total_price)
      if(klayReciept.success){
        transactionHash=klayReciept.receipt.transactionHash;
      }else{
        res.json(errorData({code:'fail send to seller klay'}))
        return;
      }
    
  const result = await query(completeDeliveryQuery(order_id,transactionHash))
  if(result==false){
    res.json(error400())
    return;
  }
  const data={
    tokenId,order_id
  }
  res.json(successData(data))
}











module.exports={
  getMyBuy,
  getMyAuction,
  getMyImmySell,
  getMyAuctionSell,
  updateShipInfo,
  updateInvoiceInfo,
  completeDelivery,
  getMySell,
  getMyFavorite

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