import { NFTListContainer, Header, BuyTable,AuctionTable,AuctionSellTable } from "./NFTList css";
import Selectbox from "../../SelectBox";
import useChangeValue from "../../../hook/useChangeValue";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {ListUpdateRequest} from '../../../reducers/mylist'
import BuyItem from "../NFTItem/BuyItem";
import AuctionItem from "../NFTItem/AuctionItem";
import AuctionSellItem from "../NFTItem/AuctionSellItem"
import ImmySellItem from "../NFTItem/ImmySellItem";


const NFTList = (props) => {
  let type = props.type
  let list = props.list
  let eng = props.eng; 
  const dispatch = useDispatch(); 
  const mylist = useSelector(state=>state.mylist);
  const {user_info} = useSelector(state=>state.user);
  const status_list = useChangeValue(list);


  useEffect(()=>{
    if(type!=undefined&&type!=null){
      const data={
        type,
        status:eng[status_list.value],
        page:1,
        rows:10,
        nickname:'jin',
      }
      dispatch(ListUpdateRequest(data));
    }
  },[status_list.result])
 


  const renderBuyItem = ()=>{
    if(mylist.list.length==0){
      return <tr><td>검색결과가 없습니다.</td></tr>
    }else{
      return mylist.list.map((v,i)=>{
        return <BuyItem 
                key={i}
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
                likes={v.likes}
                />
      })
    }
  }

  const renderAuctionItem = ()=>{
    if(mylist.list.length==0){
      return <tr><td>검색결과가 없습니다.</td></tr>
    }else{
      return mylist.list.map((v,i)=>{
        return <AuctionItem 
                key={i}
                color={v.color}
                creater={v.creater}
                img={v.img}
                name={v.name}
                qty={v.qty}
                product_no={v.product_no}
                size={v.size}
                bid ={v.bid}
                bid_date={v.bid_date}
                bid_status={v.bid_status}
                latest = {v.latest}
                auction_id={v.auction_id}    
                likes={v.likes}            
                />
      })
    }
  }

  const renderAuctionSellItem = ()=>{
    if(mylist.list.length==0){
      return <tr><td>검색결과가 없습니다.</td></tr>
    }else{
      return mylist.list.map((v,i)=>{
        return <AuctionSellItem 
                key={i}
                color={v.color}
                img={v.img}
                name={v.name}
                leftover={v.leftover}
                order_id={v.order_id}
                product_no={v.product_no}
                size={v.size}
                start_date={v.start_date}
                end_date={v.end_date}
                option={v.option}
                start_price={v.start_price}
                dlvy_status={v.dlvy_status}
                dlvy_id={v.dlvy_id}
                latest = {v.latest}
                auction_id={v.auction_id}    
                likes={v.likes}            
                />
      })
    }
  }

  const renderImmySellItem = () =>{
    if(mylist.list.length==0){
      return <tr><td>검색결과가 없습니다.</td></tr>
    }else{
      return mylist.list.map((v,i)=>{
        return <ImmySellItem 
                key={i}
                color={v.color}
                img={v.img}
                name={v.name}
                date={v.date}
                product_no={v.product_no}
                size={v.size}
                total_qty={v.total_qty}
                leftover={v.leftover}
                likes={v.likes}     
                type={v.type}     
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
                      <Selectbox {...status_list} />
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
                {renderBuyItem()}
                </tbody>
              </BuyTable>
          </>
          )}
          {type === 'auction' && (
            <>
              <Header>
                    <h3>경매참여 내역</h3>
                    <div className='absolute'>
                      <Selectbox {...status_list} />
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
                {renderAuctionItem()}
                </tbody>
              </AuctionTable>
          </>
          )}
          {type === 'immysell' && (
            <>
              <Header>
                    <h3>판매(즉시판매) 내역</h3>
                    <div className='absolute'>
                      <Selectbox {...status_list} />
                    </div>
              </Header>
              <BuyTable>
                <thead>
                  <tr>
                    <th>상품정보</th>
                    <th>등록일자</th>
                    <th>입고량</th>
                    <th>재고량</th>
                    <th>판매상태</th>
                  </tr>
                </thead>
                <tbody>
                {renderImmySellItem()}
                </tbody>
              </BuyTable>
          </>
          )}
          {type === 'auctionsell' && (
            <>
              <Header>
                    <h3>판매(경매) 내역</h3>
                    <div className='absolute'>
                      <Selectbox {...status_list} />
                    </div>
              </Header>
              <AuctionSellTable>
                <thead>
                  <tr>
                    <th>상품정보</th>
                    <th>경매 정보</th>
                    <th>입찰가</th>
                    <th>경매상태</th>
                    <th>주문상태</th>
                  </tr>
                </thead>
                <tbody>
                {renderAuctionSellItem()}
                </tbody>
              </AuctionSellTable>
          </>
          )}
    </NFTListContainer>
  );
}

export default NFTList;