import { StyledMyNFT, StyledSellBuyDetail, StyledSellAuctionDetail } from "./NFTItem.css";
import { useSelector } from "react-redux";
import Link from "next/dist/client/link";
import { useState } from "react";


const auctionStatusList={
  'bid':'입찰',
  'burial':'유찰',
  'success':'낙찰'
}



const SellItem = ({ index }) => {
  const [open, setOpen] = useState(false)
  const { list } = useSelector(state => state.mylist);
  const nowProduct = list[index];

  const renderBuyDetail = () => {
    return (
      <StyledSellBuyDetail>
        <td colSpan='6'>
          <table>
            <thead>
              <tr>
                <th>색상</th>
                <th>사이즈</th>
                <th>입고량</th>
                <th>재고량</th>
                <th>가격</th>
              </tr>
            </thead>
            <tbody>
              {nowProduct.list.map((v, i) => {
                return (<tr key={v.color + v.size + i}>
                  <td>{v.color}</td>
                  <td>{v.size}</td>
                  <td>{v.qty}</td>
                  <td>{v.rest}</td>
                  <td>{v.price}</td>
                </tr>)
              })}
            </tbody>
          </table>
        </td>
      </StyledSellBuyDetail>
    )
  }

  const renderAuctionDetail = () => {
    return (
      <StyledSellAuctionDetail>
        <td colSpan='6'>
                  <div><strong>색상: </strong>{nowProduct.list[0].color}</div>
                  <div><strong>사이즈: </strong>{nowProduct.list[0].size}</div>
                  <div><strong>마감시간: </strong>{new Date(nowProduct.list[0].auction.deadline).toLocaleString()}</div>
                  <div><strong>옵션: </strong>{nowProduct.list[0].auction.option ? '입찰시 마감시간 5분 연장' : '-'}</div>
                  <div><strong>시작가: </strong>{nowProduct.list[0].auction.start_price}</div>
          {nowProduct.list[0].history.length === 0
            ? <div><strong>경매기록: </strong>없음</div>
            : <>
              <div><strong>경매기록: </strong></div>
            <ul className='auction_history_table'>
              <li className='auction_history_head'>
                  <span className='bid_date'>입찰시간</span>
                  <span className='bider'>입찰자</span>
                  <span className='bid'>입찰가</span>
                  <span className='auction_status'>상태</span>
              </li>

                {
                  nowProduct.list[0].history.map((v, i) => {
                    return <li key={v.bid + i}>
                      <span className='bid_date'>{new Date(v.bid_date).toLocaleString()}</span>
                      <span className='bider'>{v.bider}</span>
                      <span className='bid'>{v.bid}</span>
                      <span className={`auction_status _${v.status}`}>{auctionStatusList[v.status]}</span>
                    </li>
                  })
                }
              </ul>
            </>
          }
        </td>
      </StyledSellAuctionDetail>

    )
  }

  const renderPrice = () => {
    if (nowProduct.type == 'buy') {
      return nowProduct.lastprice;
    } else {
      if (nowProduct.max) {
        return <span>입찰가:{nowProduct.lastprice}</span>
      } else {
        return <span>시작가:{nowProduct.lastprice}</span>
      }
    }
  }


  return (
    <>
      <StyledMyNFT>
        <td className='NFT_info'>
          <div >
            <Link href={`/nft/${nowProduct.product_no}`}>
              <a ><img className='NFT_img' src={nowProduct.img} alt="" /></a>
            </Link>
          </div>
          <ul className='NFT_detail'>
            <li className='NFT_creater'>상품번호: {nowProduct.product_no}</li>
            <li className='NFT_name'><strong>{nowProduct.name}</strong></li>
            <li className='NFT_creater'>{nowProduct.likes}</li>
            <li className='NFT_creater'>판매유형: {nowProduct.type}</li>
          </ul>
        </td>
        <td>{new Date(nowProduct.date).toLocaleString()}</td>
        <td>{nowProduct.total_qty}</td>
        <td>{nowProduct.leftover}</td>
        <td>{renderPrice()}</td>
        <td>
          {
            !open
              ? <button className='list_btn ' onClick={() => setOpen(true)}>상세 보기</button>
              : <button className='list_btn hide' onClick={() => setOpen(false)}>상세 숨기기</button>
          }
        </td>
      </StyledMyNFT>
      {(open && nowProduct.type === 'buy') && renderBuyDetail()}
      {(open && nowProduct.type !== 'buy') && renderAuctionDetail()}
    </>
  );
}

export default SellItem;