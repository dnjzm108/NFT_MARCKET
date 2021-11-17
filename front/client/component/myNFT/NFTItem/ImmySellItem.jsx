import { StyledMyNFT } from "./NFTItem.css";
import Button from '../../Button/index'
import { useSelector } from "react-redux";
import {dlvyList} from '../NFTList/list'
import Link from "next/dist/client/link";








const ImmySellItem = (
  {
    color,
    size,
    img,
    name,
    date,
    product_no,
    qty,
    price,
    likes,
    dlvy_status,
    order_id,
    buyer
}) => {


  const renderStatus = (type)=>{
    switch(type){
      case 'wait':
        return(
          <>
           <div>배송지 미입력</div>
          </>
          )
      case 'ready':
        return(
          <>
           <div>상품준비중</div>
           <button className='order_action_btn invoice'>송장 입력</button>
          </>
          )
      case 'delivery':
        return(
          <>
           <div>배송중</div>
          </>
          )
      case 'completed':
        return(
          <>
           <div>구매완료</div>
           <button className='order_action_btn completed'>영수증</button>
          </>
          )
        
    }
  } 
  
 
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
          <li className='NFT_name'><strong>{name}</strong></li>
          <li className='NFT_name'><strong>{color} {size}</strong></li>
          <li className='NFT_creater'>{likes}</li>
        </ul>
        </a>
        </Link>
      </td>
      <td>{date}</td>
      <td>{buyer}</td>
      <td>{qty}</td>
      <td>{price}</td>
      <td>{(+price)*(+qty)}</td>
      <td>{order_id}</td>
      <td>{renderStatus(dlvy_status)}</td>
    </StyledMyNFT>
    );
 
}

export default ImmySellItem;