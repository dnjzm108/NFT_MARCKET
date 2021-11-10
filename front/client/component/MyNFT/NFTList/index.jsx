import { NFTListContainer, Header, BuyTable,AuctionTable } from "./NFTList css";
import Selectbox from "../../SelectBox";
import useChangeValue from "../../../hook/useChangeValue";
import NFTItem from "../NFTItem/index";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {ListUpdateRequest} from '../../../reducers/mylist'

const auction_list = ["전체", "입찰", "유찰", "낙찰"]
const auction_eng = ["all", "bid", "burial", "success"]

const buy_list = ["전체","배송지 미입력","상품준비중", "배송중", "구매완료"]
const buy_eng = ["all","wait","ready", "delivery", "complite"]

const immySell_list = ["판매중", "판매종료"]
const immySell_eng = ["true", "false"]

const auctionSell_list = ["경매중", "경매종료"]
const auctionSell_eng = ["true", "false"]




const NFTList = ({ type }) => {
  const dispatch = useDispatch(); 
  const mylist = useSelector(state=>state.mylist);
  const {user_info} = useSelector(state=>state.user);
  const immySell_state = useChangeValue(immySell_list)
  const auctionSell_state = useChangeValue(auctionSell_list)
  const buy_state = useChangeValue(buy_list)
  const auction_state = useChangeValue(auction_list)



  useEffect(()=>{
    console.log('타입바뀔때')
    if(type!=undefined&&type!=null){
      const data={
        type,
        status:'all',
        page:1,
        rows:10,
        nickname:'seong',
      }
      dispatch(ListUpdateRequest(data));
    }
  },[type])


  useEffect(()=>{
    if(type!=undefined&&type!=null&&type==='immysell'){
      console.log('즉시판매')
      const data={
        type,
        status:immySell_eng[immySell_state.value],
        page:1,
        rows:10,
        nickname:'seong',
      }
      dispatch(ListUpdateRequest(data));
    }
  },[immySell_state.result])

  useEffect(()=>{
    
    if(type!=undefined&&type!=null&&type==='auctionsell'){
      console.log('경매판매')
      const data={
        type,
        status:auctionSell_eng[auctionSell_state.value],
        page:1,
        rows:10,
        nickname:'seong',
      }
      dispatch(ListUpdateRequest(data));
    }
  },[auctionSell_state.result])
  
  useEffect(()=>{    
    if(type!=undefined&&type!=null&&type==='buy'){
      console.log('구매')
      const data={
        type,
        status:buy_eng[buy_state.value],
        page:1,
        rows:10,
        nickname:'seong',
      }
      dispatch(ListUpdateRequest(data));
    }
  },[buy_state.result])

  useEffect(()=>{
    if(type!=undefined&&type!=null&&type==='auction'){
      console.log('경매')
      console.log(type)
      const data={
        type,
        status:auction_eng[auction_state.value],
        page:1,
        rows:10,
        nickname:'seong',
      }
      dispatch(ListUpdateRequest(data));
    }
  },[auction_state.result])
 


  const renderNFTItem = ()=>{
    
    if(mylist.list.length==0){
      return <tr><td>검색결과가 없습니다.</td></tr>
    }else{
      return mylist.list.map((v,i)=>{
        return <NFTItem 
                key={i}
                type={type}
                color={v.color}
                creater={v.creater}
                dlvy_id={v.dlvy_id}
                img={v.img}
                name={v.name}
                order_date={v.order_date}
                order_id={v.order_id}
                order_price={v.order_price}
                product_no={v.product_no}
                qty={v.qty}
                size={v.size}
                status={v.status}
                selltype={v.selltype}
                />
      })
    }
  }



  return (
    <NFTListContainer>

          {type === 'buy' && (
            <>
              <Header>
                    <h3>구매 내역</h3>
                    <div className='absolute'>
                      <Selectbox {...buy_state} />
                    </div>
              </Header>
              <BuyTable>
                <thead>
                  <tr>
                    <th>상품정보</th>
                    <th>구매유형</th>
                    <th>주문일자</th>
                    <th>주문번호</th>
                    <th>주문금액</th>
                    <th>주문상태</th>
                  </tr>
                </thead>
                <tbody>
                {renderNFTItem()}
                </tbody>
              </BuyTable>
          </>
          )}
          {type === 'auction' && (
            <>
              <Header>
                    <h3>경매참여 내역</h3>
                    <div className='absolute'>
                      <Selectbox {...auction_state} />
                    </div>
              </Header>
              <AuctionTable>
                <thead>
                  <tr>
                    <th>상품정보</th>
                    <th>입찰시간</th>
                    <th>입찰가</th>
                    <th>현재 입찰가</th>
                    <th>입찰상태</th>
                  </tr>
                </thead>
                <tbody>
                {renderNFTItem()}
                </tbody>
              </AuctionTable>
          </>
          )}
          {type === 'immysell' && (
            <>
              <Header>
                    <h3>판매(즉시판매) 내역</h3>
                    <div className='absolute'>
                      <Selectbox {...immySell_state} />
                    </div>
              </Header>
              <BuyTable>
                <thead>
                  <tr>
                    <th>상품정보</th>
                    <th>주문일자</th>
                    <th>주문번호</th>
                    <th>주문금액</th>
                    <th>주문상태</th>
                  </tr>
                </thead>
                <tbody>
                  <NFTItem />
                  <NFTItem />
                  <NFTItem />
                  <NFTItem />
                  <NFTItem />
                  <NFTItem />
                </tbody>
              </BuyTable>
          </>
          )}
          {type === 'auctionsell' && (
            <>
              <Header>
                    <h3>판매(경매) 내역</h3>
                    <div className='absolute'>
                      <Selectbox {...auctionSell_state} />
                    </div>
              </Header>
              <BuyTable>
                <thead>
                  <tr>
                    <th>상품정보</th>
                    <th>주문일자</th>
                    <th>주문번호</th>
                    <th>주문금액</th>
                    <th>주문상태</th>
                  </tr>
                </thead>
                <tbody>
                  <NFTItem />
                  <NFTItem />
                  <NFTItem />
                  <NFTItem />
                  <NFTItem />
                  <NFTItem />
                </tbody>
              </BuyTable>
          </>
          )}
    </NFTListContainer>
  );
}

export default NFTList;