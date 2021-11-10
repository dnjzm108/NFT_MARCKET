import { NFTListContainer, Header, BuyTable,AuctionTable } from "./NFTList css";
import Selectbox from "../../SelectBox";
import useChangeValue from "../../../hook/useChangeValue";
import NFTItem from "../NFTItem/index";





const NFTList = ({ type }) => {

  const auction_list = ["전체", "입찰", "유찰", "낙찰", "상품준비중", "배송중", "구매완료"]
  const buy_list = ["전체","상품준비중", "배송중", "구매완료"]
  const sell_list = ["즉시판매", "경매"]
  const sell_state = useChangeValue(sell_list)
  const buy_state = useChangeValue(buy_list)
  const auction_state = useChangeValue(auction_list)



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
                    <th>주문일자</th>
                    <th>주문번호</th>
                    <th>주문금액</th>
                    <th>주문상태</th>
                  </tr>
                </thead>
                <tbody>
                  <NFTItem type='buy'/>
                  <NFTItem type='buy'/>
                  <NFTItem type='buy'/>
                  <NFTItem type='buy'/>
                  <NFTItem type='buy'/>
                  <NFTItem type='buy'/>
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
                    <th>입찰일자</th>
                    <th>입찰금액</th>
                    <th>입찰상태</th>
                    <th>주문일자</th>
                    <th>주문번호</th>
                    <th>주문상태</th>
                  </tr>
                </thead>
                <tbody>
                  <NFTItem type='auction'/>
                  <NFTItem type='auction'/>
                  <NFTItem type='auction'/>
                  <NFTItem type='auction'/>
                  <NFTItem type='auction'/>
                  <NFTItem type='auction'/>
                </tbody>
              </AuctionTable>
          </>
          )}
          {type === 'immysell' && (
            <>
              <Header>
                    <h3>판매(즉시판매) 내역</h3>
                    <div className='absolute'>
                      <Selectbox {...buy_state} />
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
                      <Selectbox {...buy_state} />
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