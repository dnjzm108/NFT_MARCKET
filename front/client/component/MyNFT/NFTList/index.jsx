import { NFTListContainer,Header,Table } from "./NFTList css";
import Selectbox from "../../SelectBox";
import useChangeValue from "../../../hook/useChangeValue";
import NFTItem from "../NFTItem/index";





const NFTList = ({type}) => {

  const auction_list = ["전체","입찰","유찰","낙찰"]
  const sell_list = ["전체","입찰","유찰","낙찰"]
  const buy_list = ["전체","입찰","유찰","낙찰"]
  const sell_state =useChangeValue(sell_list)
  const buy_state =useChangeValue(buy_list)
  const auction_state =useChangeValue(auction_list)

  const renderItem = ()=>{
    
  }


  return (
    <NFTListContainer>
      <Header>
        {type==='sell' && (
          <>
          <h3>나의 판매 목록</h3>
          <div className='absolute'>
          <Selectbox {...sell_state}/>
          </div>
          </>
        )}
        {type==='buy' && (
          <>
          <h3>나의 구매 목록</h3>
          <div className='absolute'>
          <Selectbox {...buy_state}/>
          </div>
          </>
        )}
        {type==='auction' && (
          <>
          <h3>나의 경매 목록</h3>
          <div className='absolute'>
          <Selectbox {...auction_state}/>
          </div>
          </>
        )
        }
      </Header>
      <Table>
        {/* {renderListItem()} */}
        <thead>
          <tr>
            <th>NFT정보</th>
            <th>주문일자</th>
            <th>주문번호</th>
            <th>주문금액</th>
            <th>주문상태</th>
          </tr>
        </thead>
        <tbody>
          <NFTItem/>
          <NFTItem/>
          <NFTItem/>
          <NFTItem/>
          <NFTItem/>
          <NFTItem/>
        </tbody>
      </Table>
    </NFTListContainer>
  );
}

export default NFTList;