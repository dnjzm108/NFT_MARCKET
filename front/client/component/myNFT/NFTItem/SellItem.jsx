import { StyledMyNFT, StyledSellBuyDetail, StyledSellAuctionDetail } from "./NFTItem.css";
import { useSelector } from "react-redux";
import Link from "next/dist/client/link";
import { useState } from "react";


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
          <table className='product_detail_table'>
            <thead>
              <tr>
                <th>색상</th>
                <th>사이즈</th>
                <th>경매 마감시간</th>
                <th>옵션</th>
                <th>시작가</th>
              </tr>
            </thead>
            <tbody>
              {
                <tr>
                  <td>{nowProduct.list[0].color}</td>
                  <td>{nowProduct.list[0].size}</td>
                  <td>{new Date(nowProduct.list[0].auction.deadline).toLocaleString()}</td>
                  <td>{nowProduct.list[0].auction.option ? '입찰시 마감시간 5분 연장' : '-'}</td>
                  <td>{nowProduct.list[0].auction.start_price}</td>
                </tr>
              }
            </tbody>
          </table>
          <div>
          <span>경매기록</span>
          {nowProduct.list[0].history.length === 0
            ? <span>: 없음</span>
            : <table className='history_table'>
              <thead>
                <tr>
                  <th>입찰시간</th>
                  <th>입찰자</th>
                  <th>입찰가</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                {
                  nowProduct.list[0].history.map((v, i) => {
                    return <tr key={v.bid + i}>
                      <td>{new Date(v.bid_date).toLocaleString()}</td>
                      <td>{v.bider}</td>
                      <td>{v.bid}</td>
                      <td>{v.status}</td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          }
        </div>
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
              ? <button onClick={() => setOpen(true)}>상세 보기</button>
              : <button onClick={() => setOpen(false)}>상세 숨기기</button>
          }
        </td>
      </StyledMyNFT>
      {(open && nowProduct.type === 'buy') && renderBuyDetail()}
      {(open && nowProduct.type !== 'buy') && renderAuctionDetail()}
    </>
  );
}

export default SellItem;