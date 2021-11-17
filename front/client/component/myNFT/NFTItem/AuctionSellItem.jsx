import { StyledMyNFT } from "./NFTItem.css";
import Button from '../../Button/index'
import { useSelector } from "react-redux";
import Link from "next/dist/client/link";
const dlvy_kor = {
  'all':'전체',
  'wait':'배송지 미입력',
  'ready':'배송요청',
  'delivery':'배송중',
  'completed':'구매완료',
}


const AuctionItem = (
  {
    color,
    img,
    name,
    leftover,
    order_id,
    product_no,
    size,
    start_date,
    end_date,
    option,
    start_price,
    dlvy_status,
    dlvy_id,
    latest,
    auction_id,
    likes,
}) => {

  const sample = () =>{
    alert('함수 샘플')
  }

    return (
      <StyledMyNFT>
      <td className='NFT_info'>
        <div >
        <Link href={`/nft/${product_no}`}>
        <a >
          <img className='NFT_img' src={img} alt="" />
        </a>
        </Link>
        </div>
        <ul className='NFT_detail'>
          <li className='NFT_creater'>상품번호: {product_no}</li>
          <li className='NFT_name'><strong>{name}</strong></li>
          <li className='NFT_creater'>{color} {size}</li>
          <li className='NFT_creater'>{likes}</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>경매 시작 시간: {start_date}</li>
          <li>경매 마감 시간:{end_date}</li>
          <li>경매 시작가: {start_price}</li>
          <li>option: {
            option===1
            ?'입찰 시 5분 연장'
            :'없음'
            }</li>
          
        </ul>
        </td>
      <td>{latest===null
          ? '-'
          : latest
          }</td>
      <td>{new Date(end_date)>new Date() 
          ? '경매중'
          : '경매종료'}</td>
      <td>{dlvy_status===null 
              ? '-' 
              : dlvy_kor[dlvy_status]
            }</td>
    </StyledMyNFT>
    );
 
}

export default AuctionItem;