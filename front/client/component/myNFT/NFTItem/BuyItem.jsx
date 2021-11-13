import { StyledMyNFT } from "./NFTItem.css";
import Button from '../../Button/index'
import { useSelector } from "react-redux";

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

const BuyItem = (
  {type,
    color,
    creater,
    dlvy_id,
    img,
    name,
    order_date,
    order_id,
    order_price,
    product_no,
    qty,
    size,
    status,
    selltype
}) => {
  

  const sample = () =>{
    alert('함수 샘플')
  }

    return (
      <StyledMyNFT>
      <td className='NFT_info'>
        <div className='NFT_img'><img src={img} alt="" /></div>
        <ul className='NFT_detail'>
          <li className='NFT_creater'>상품번호: {product_no}</li>
          <li className='NFT_creater'>{creater}</li>
          <li className='NFT_name'><strong>{name}</strong></li>
          <li className='NFT_creater'>{color} {size}</li>
          <li className='NFT_creater'>수량:{qty}</li>
        </ul>
      </td>
      <td>{sell_type[selltype]}</td>
      <td>{order_date}</td>
      <td>{order_id}</td>
      <td>{order_price}</td>
      <td>{dlvy_status[status]}</td>
    </StyledMyNFT>
    );
 
}

export default BuyItem;