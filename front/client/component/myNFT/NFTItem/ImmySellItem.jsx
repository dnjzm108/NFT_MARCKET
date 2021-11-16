import { StyledMyNFT } from "./NFTItem.css";
import Button from '../../Button/index'
import { useSelector } from "react-redux";
import {dlvyList} from '../NFTList/list'



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
  
 
  console.log(dlvy_status)
  const sample = () =>{
    alert('함수 샘플')
  }

    return (
      <StyledMyNFT>
      <td className='NFT_info'>
        <div className='NFT_img'><img src={img} alt="" /></div>
        <ul className='NFT_detail'>
          <li className='NFT_creater'>상품번호: {product_no}</li>
          <li className='NFT_name'><strong>{name}</strong></li>
          <li className='NFT_name'><strong>{color} {size}</strong></li>
          <li className='NFT_creater'>{likes}</li>
        </ul>
      </td>
      <td>{date}</td>
      <td>{buyer}</td>
      <td>{qty}</td>
      <td>{price}</td>
      <td>{(+price)*(+qty)}</td>
      <td>{order_id}</td>
      <td>{dlvyList[dlvy_status]}</td>
    </StyledMyNFT>
    );
 
}

export default ImmySellItem;