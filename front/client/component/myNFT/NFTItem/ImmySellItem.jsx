import { StyledMyNFT } from "./NFTItem.css";
import Button from '../../Button/index'
import { useSelector,useDispatch} from "react-redux";
import {dlvyList} from '../NFTList/list'
import Link from "next/dist/client/link";
import {multipFloat} from '../../../util/float'
import {getReceiptRequest } from "../../../reducers/mylist";








const ImmySellItem = (
  {
    color,
    size,
    img,
    name,
    date,
    product_no,
    qty,
    order_price,
    likes,
    dlvy_status,
    order_id,
    buyer,
    handleInvoiceTarget,
    handleInvoicePopUp,
    handleOrderTarget,
    handleOrderPopUp,
    handleReceiptPopUp,

}) => {
  const dispatch = useDispatch();
  const {user_info} = useSelector(state=>state.user)

  const handleInvoice = (data) =>{
    handleInvoiceTarget(data)
      handleInvoicePopUp(true)
  }

  const handleOrder = (data) =>{
    handleOrderTarget(data)
    handleOrderPopUp(true)
  }

  const handleReceipt = (order_id)=>{
    const data = {
      order_id,
      nickname:user_info.nickname,
      auth:user_info.auth,}
    dispatch(getReceiptRequest(data));
    handleReceiptPopUp(true);
  }



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
           <button className='list_btn invoice' onClick={()=>handleInvoice(order_id)}>송장 입력</button>
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
           <button className='list_btn completed' onClick={()=>handleReceipt(order_id)}>영수증</button>
          </>
          )
    }
  } 


    return (
      <StyledMyNFT>
      <td className='NFT_info'>
        <div >
        <Link href={`/nft/${product_no}`}>
        <a ><img className='NFT_img' src={img} alt="" /></a>
        </Link>
        </div>
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
      <td>{order_price}</td>
      <td>{multipFloat([order_price,qty])}</td>
      <td>
        <div>
        {order_id}
        </div>
        <button className='list_btn order' onClick={()=>handleOrder(order_id)}>
            주문서 보기
        </button>
      </td>
      <td>{renderStatus(dlvy_status)}</td>
    </StyledMyNFT>
    );
 
}

export default ImmySellItem;