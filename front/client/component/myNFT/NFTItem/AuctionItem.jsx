import { StyledMyNFT } from "./NFTItem.css";
import Button from '../../Button/index'
import { useSelector } from "react-redux";
import Link from "next/dist/client/link";




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
    latest,
    deadline
}) => {

  const renderStatus = (type)=>{
    switch(type){
      case 'bid':
        return(
           <div className='auction_type bid'>입찰</div>
          )
      case 'burial':
        return(
           <div className='auction_type burial' >유찰</div>
          )
      case 'success':
        return(
           <div className='auction_type success'>낙찰</div>
          )
      default:
        return;
    }
  } 
  
    return (
      <StyledMyNFT>
      <td className='NFT_info'>
        <div>
        <Link href={`/nft/${product_no}`}>
        <a  >
          <img  className='NFT_img' src={img} alt="" />
          </a>
      </Link>
        </div>
        <ul className='NFT_detail'>
          <li className='NFT_creater'>상품번호: {product_no}</li>
          <li className='NFT_creater'>{creater}</li>
          <li className='NFT_name'><strong>{name}</strong></li>
          <li className='NFT_creater'>{color} {size}</li>
          <li className='NFT_creater'>수량:{qty}</li>
        </ul>
      </td>
      <td>{bid_date}</td>
      <td>{deadline}</td>
      <td>{bid}</td>
      <td>{latest}</td>
      <td>{renderStatus(bid_status)}</td>
    </StyledMyNFT>
    );
 
}

export default AuctionItem;