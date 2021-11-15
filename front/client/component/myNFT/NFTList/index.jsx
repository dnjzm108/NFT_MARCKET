import { NFTListContainer, Header, BuyTable, AuctionTable, AuctionSellTable } from "./NFTList css";
import Selectbox from "../../SelectBox";
import useChangeValue from "../../../hook/useChangeValue";
import { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListUpdateRequest } from '../../../reducers/mylist'
import { BiSearch } from 'react-icons/bi'
import BuyItem from "../NFTItem/BuyItem";
import AuctionItem from "../NFTItem/AuctionItem";
import AuctionSellItem from "../NFTItem/AuctionSellItem"
import ImmySellItem from "../NFTItem/ImmySellItem";
import OptionBox from '../../OptionBox/OptionBox'
import useNameToCode from '../../../hook/useNameToCode'

const statusList = {
  'buy':[
    {name:'전체',code:'all'},
    {name:'배송지 미입력',code:'wait'},
    {name:'상품준비중',code:'ready'},
    {name:'배송중',code:'delivery'},
    {name:'구매완료',code:'completed'},
  ],
  'auction':[
    {name:'전체',code:'all'},
    {name:'입찰',code:'bid'},
    {name:'유찰',code:'burial'},
    {name:'낙찰',code:'success'},
  ],
  'immysell':[
    {name:'전체',code:'all'},
    {name:'판매중',code:'sale'},
    {name:'매진',code:'soldout'},
    {name:'판매중단',code:'stop'},
  ],
  'auctionsell':[
    {name:'전체',code:'all'},
    {name:'경매중',code:'true'},
    {name:'경매종료',code:'false'},
    {name:'배송지 미입력',code:'wait'},
    {name:'배송 요청',code:'ready'},
    {name:'배송중',code:'delivery'},
    {name:'구매완료',code:'completed'},
  ],
}

const sortList = {
  'buy':[
    {name:'최신 순',code:'new'},
    {name:'오래된 순',code:'old'},
    {name:'높은 가격 순',code:'high'},
    {name:'낮은 가격 순',code:'low'},
    {name:'좋아요 순',code:'likes'},
  ],
  'auction':[
    {name:'최신 입찰 순',code:'new'},
    {name:'오래된 입찰 순',code:'old'},
    {name:'최신 등록 순',code:'regNew'},
    {name:'오래된 등록 순',code:'regOld'},
    {name:'높은 입찰가 순',code:'high'},
    {name:'낮은 입찰가 순',code:'low'},
    {name:'좋아요 순',code:'likes'},
  ],
  'immysell':[
    {name:'최신 주문일 순',code:'new'},
    {name:'오래된 주문일 순',code:'old'},
    {name:'높은 가격 순',code:'high'},
    {name:'낮은 가격 순',code:'low'},
  ],
  'auctionsell':[
    {name:'최신 주문일 순',code:'new'},
    {name:'오래된 주문일 순',code:'old'},
    {name:'최신 등록일 순',code:'regNew'},
    {name:'오래된 등록일 순',code:'regOld'},
    {name:'높은 입찰가 순',code:'high'},
    {name:'낮은 입찰가 순',code:'low'},
  ],
}

const typeList = {
 'buy': '구매 내역',
 'auction':'경매 내역',
 'immysell':'즉시판매 내역',
 'auctionsell':'경매판매 내역',

}

const NFTList = (props) => {
  let type = props.type
  let list = props.list
  let eng = props.eng;
  const dispatch = useDispatch();
  const mylist = useSelector(state => state.mylist);
  const { user_info } = useSelector(state => state.user);
  const status_list = useNameToCode(statusList[type]);
  const sort_list =useNameToCode(sortList[type]);
  const [status,setStatus] = useState(statusList[type][0].code)
  const [sort,setSort] = useState(sortList[type][0].code)

  const handleStatus = (code) =>{
    setStatus(code)
    alert(code);
  }

  const handleSort = (code) =>{
    setSort(code)
    alert(code);
  }

  useEffect(()=>{
    const data ={
      nickname:user_info.nickname,
      page:1,

    }
    dispatch(ListUpdateRequest(data))
  },[type])
  
  


  







  const renderBuyItem = () => {
    if (mylist.list.length == 0) {
      return <tr><td>검색결과가 없습니다.</td></tr>
    } else {
      return mylist.list.map((v, i) => {
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

  const renderAuctionItem = () => {
    if (mylist.list.length == 0) {
      return <tr><td>검색결과가 없습니다.</td></tr>
    } else {
      return mylist.list.map((v, i) => {
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
          likes={v.likes}
        />
      })
    }
  }

  const renderAuctionSellItem = () => {
    if (mylist.list.length == 0) {
      return <tr><td>검색결과가 없습니다.</td></tr>
    } else {
      return mylist.list.map((v, i) => {
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
        />
      })
    }
  }

  const renderImmySellItem = () => {
    if (mylist.list.length == 0) {
      return <tr><td>검색결과가 없습니다.</td></tr>
    } else {
      return mylist.list.map((v, i) => {
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
          <Header>
            <h3>{typeList[type]}</h3>
            <form className='search-box' onSubmit={(e) => handleSubmit(e)}>
              <BiSearch size={24} color={'#888'} />
              <input id='search-input' type="text" placeholder='상품명/상품코드 검색' onChange={(e) => handleSearch(e)} />
            </form>
            <div className='absolute'>
              <OptionBox list={statusList[type]} onClick={handleStatus} now={status}/>
              <OptionBox list={sortList[type]} onClick={handleSort} now={sort}/>
            </div>
          </Header>
      {type === 'buy' && (
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
      )}
        
      {type === 'auction' && (
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
      )}
      {type === 'immysell' && (
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
      )}
      {type === 'auctionsell' && (
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
      )}
    </NFTListContainer>
  );
}

export default NFTList;