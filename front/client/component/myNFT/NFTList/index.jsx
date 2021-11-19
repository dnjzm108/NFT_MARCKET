import { NFTListContainer, Header, BuyTable,ImmySellTable, AuctionTable, AuctionSellTable,FavoriteTable } from "./NFTList css";
import { useDispatch, useSelector } from "react-redux";
import { ListUpdateRequest } from '../../../reducers/mylist'
import { BiSearch } from 'react-icons/bi'
import {useState} from 'react'
import BuyItem from "../NFTItem/BuyItem";
import AuctionItem from "../NFTItem/AuctionItem";
import AuctionSellItem from "../NFTItem/AuctionSellItem"
import ImmySellItem from "../NFTItem/ImmySellItem";
import OptionBox from '../../OptionBox/OptionBox'
import {statusList,sortList,typeList} from './list.js'
import { useRouter } from "next/router";
import Invoice from '../../Invoice'
import Gallary from '../../Gallery'
import ShipAddress from "../../Popup/ShipAddress";
const NFTList = () => {
  const dispatch = useDispatch();
  const {list, searchData,transactionLoading} = useSelector(state => state.mylist);
  const {user_info} = useSelector(state => state.user);
  const [input,setInput] = useState(''); 
  const router = useRouter()
  const {type} = router.query
  const [invoicePopUp,setInvoicePopUp] = useState(false)
  const [shipPopUp,setShipPopUp] = useState(false)
  const [invoice,setInvoice] = useState("");
  const [ship,setShip] = useState("");




  const handleSort = (code)=>{
    const data = {
      ...searchData,
      nickname:user_info.nickname,
      sort:code
    };
    dispatch(ListUpdateRequest(data))
  }
   
  const handleStatus = (code)=>{
    const data = {
      ...searchData,
      nickname:user_info.nickname,
      status:code
    };
    dispatch(ListUpdateRequest(data))
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = {
      ...searchData,
      nickname:user_info.nickname,
      search:input
    };
    dispatch(ListUpdateRequest(data))
  }

  const handleSearchInPut = (e)=>{
    setInput(e.target.value)
  }












  const renderBuyItem = () => {
    if (list.length == 0) {
      return <tr><td>검색결과가 없습니다.</td></tr>
    } else {
      return list.map((v, i) => {
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
          dlvy_status={v.dlvy_status}
          selltype={v.selltype}
          likes={v.likes}
          handleShipTarget ={setShip}
          handleShipPopUp={setShipPopUp}
        />
      })
    }
  }

  const renderAuctionItem = () => {
    if (list.length == 0) {
      return <tr><td>검색결과가 없습니다.</td></tr>
    } else {
      return list.map((v, i) => {
        return <AuctionItem
          key={i}
          color={v.color}
          creater={v.creater}
          img={v.img}
          name={v.name}
          qty={v.qty}
          product_no={v.product_no}
          size={v.size}
          bid={v.bid}
          bid_date={v.bid_date}
          bid_status={v.bid_status}
          latest={v.latest}
          auction_id={v.auction_id}
          deadline={v.deadline}
          likes={v.likes}
        />
      })
    }
  }

  const renderAuctionSellItem = () => {
    if (list.length == 0) {
      return <tr><td>검색결과가 없습니다.</td></tr>
    } else {
      return list.map((v, i) => {
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
          latest={v.latest}
          auction_id={v.auction_id}
          likes={v.likes}
          handleInvoiceTarget = {setInvoice}
          handleInvoicePopUp={setInvoicePopUp}
        />
      })
    }
  }

  const renderImmySellItem = () => {
    if (list.length == 0) {
      return <tr><td>검색결과가 없습니다.</td></tr>
    } else {
      return list.map((v, i) => {
        return <ImmySellItem
          key={i}
          color={v.color}
          size={v.size}
          img={v.img}
          name={v.name}
          date={v.date}
          product_no={v.product_no}
          qty={v.qty}
          likes={v.likes}
          order_id={v.order_id}
          price={v.price}
          buyer={v.buyer}
          dlvy_status={v.dlvy_status}
          handleInvoiceTarget = {setInvoice}
          handleInvoicePopUp={setInvoicePopUp}
        />
      })
    }
  }

  const renderFavorite = () => {
    if (list.length == 0) {
      return <tr><td>검색결과가 없습니다.</td></tr>
    } else {
      return list.map((v, i) => {
        return <ImmySellItem
        type={v.type}
        product_no={v.product_no}
        price={v.price}
        name={v.name}
        creater={v.creater}
        likes={v.likes}
        img={v.img}
        isLike={v.isLike}
        />
      })
    }
  }




 


  if(type==null) return <span>로딩중입니다.</span>
  return (
    <NFTListContainer>
      {shipPopUp ? <ShipAddress order_id={ship}handleShipPopUp={setShipPopUp} /> : ""}
      {invoicePopUp ? <Invoice order_id={invoice} handleInvoicePopUp={setInvoicePopUp} /> : ""}
      {transactionLoading ? <span>구매요청중</span> : ""}
          <Header>
            <h3>{typeList[type]}</h3>
            <form className='search-box' onSubmit={(e) => handleSubmit(e)}>
              <BiSearch size={24} color={'#888'} />
              <input id='search-input' type="text" placeholder={(type==='buy' ||type==='auction')? '상품명/상품번호/디자이너 검색':'상품명/상품번호 검색'} onChange={(e) => handleSearchInPut(e)} />
            </form>
            <div className='absolute'>
              <OptionBox list={statusList[type]} onClick={handleStatus} now={searchData.status}/>
              <OptionBox list={sortList[type]} onClick={handleSort} now={searchData.sort}/>
            </div>
          </Header>
      {type === 'buy' && (
          <BuyTable>
            <thead>
              <tr>
                <th>상품정보</th>
                <th>구매유형</th>
                <th>주문일자</th>
                <th>주문량</th>
                <th>가격</th>
                <th>주문량*가격</th>
                <th>주문번호</th>
                <th>주문상태</th>
              </tr>
            </thead>
            <tbody>
              {renderBuyItem()}
            </tbody>
          </BuyTable>
      )}
        
      {type === 'auction' && (
          <AuctionTable>
            <thead>
              <tr>
                <th>상품정보</th>
                <th>입찰시간</th>
                <th>마감시간</th>
                <th>나의 입찰가</th>
                <th>마지막 입찰가</th>
                <th>입찰상태</th>
              </tr>
            </thead>
            <tbody>
              {renderAuctionItem()}
            </tbody>
          </AuctionTable>
      )}
      {type === 'immysell' && (
          <ImmySellTable>
            <thead>
              <tr>
                <th>상품정보</th>
                <th>주문일자</th>
                <th>주문자</th>
                <th>주문량</th>
                <th>가격</th>
                <th>주문량×가격</th>
                <th>주문번호</th>
                <th>주문상태</th>
              </tr>
            </thead>
            <tbody>
              {renderImmySellItem()}
            </tbody>
          </ImmySellTable>
      )}
      {type === 'auctionsell' && (
          <AuctionSellTable>
            <thead>
              <tr>
                <th>상품정보</th>
                <th>경매 정보</th>
                <th>입찰가</th>
                <th>경매상태</th>
                <th>주문번호</th>
                <th>주문상태</th>
              </tr>
            </thead>
            <tbody>
              {renderAuctionSellItem()}
            </tbody>
          </AuctionSellTable>
      )}

      {type === 'favorite' && (
          <FavoriteTable>
              {renderFavorite()}
          </FavoriteTable>
      )}
    </NFTListContainer>
  );
}

export default NFTList;