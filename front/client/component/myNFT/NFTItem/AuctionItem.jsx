import { StyledMyNFT } from "./NFTItem.css";
import Button from '../../Button/index'
import { useSelector } from "react-redux";
import Link from "next/dist/client/link";
const dlvy_status = {
  'all':'전체',
  'wait':'배송지 미입력',
  'ready':'상품준비중',
  'delivery':'배송중',
  'completed':'구매완료',
}

const sell_type={
  'buy':'즉시구매',
  'auction':'경매'
}

const bid_kor={
  'bid':'입찰',
  'burial':'유찰',
  'success':'낙찰',
}

const AuctionItem = (
  {
    color,
    creater,
    img,
    name,
    product_no,
    auction_id,
    qty,
    size,
    bid,
    bid_status,
    bid_date,
    latest
}) => {

  const sample = () =>{
    alert('함수 샘플')
  }

    return (
      <StyledMyNFT>

      <td>
        <Link href={`/nft/${product_no}`}>
        <a  className='NFT_info'>
        <div className='NFT_img'><img src={img} alt="" /></div>
        <ul className='NFT_detail'>
          <li className='NFT_creater'>상품번호: {product_no}</li>
          <li className='NFT_creater'>{creater}</li>
          <li className='NFT_name'><strong>{name}</strong></li>
          <li className='NFT_creater'>{color} {size}</li>
          <li className='NFT_creater'>수량:{qty}</li>
        </ul>
          </a>
      </Link>
      </td>
      <td>{bid_date}</td>
      <td>{bid}</td>
      <td>{latest}</td>
      <td>{bid_kor[bid_status]}</td>
    </StyledMyNFT>
    );
 
}

export default AuctionItem;