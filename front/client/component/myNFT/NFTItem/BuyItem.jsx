import { StyledMyNFT } from "./NFTItem.css";
import Button from '../../Button/index'
import { useDispatch, useSelector } from "react-redux";
import Link from "next/dist/client/link";
import { UpdateDeliveryRequest,TransactionRequest } from "../../../reducers/mylist";
import {multipFloat} from '../../../util/float'
const sell_type={
  'buy':'즉시구매',
  'auction':'경매'
}



const BuyItem = (
  {
    color,
    creater,
    img,
    name,
    order_date,
    order_id,
    order_price,
    product_no,
    qty,
    size,
    dlvy_status,
    selltype,
    handleShipPopUp,
    handleShipTarget,
}) => {
  
  const {user_info} = useSelector(state=>state.user)
  const dispatch = useDispatch();  

  const handleShipAddress = ()=>{
    handleShipTarget(order_id)
    handleShipPopUp(true)
  }
  
  const handleCompleted = (order_id) =>{
    dispatch(TransactionRequest())
    ///////////////////////////////
    ////// 거래하는 솔리디티 //////
    //////////////////////////////
    const data={
      order_id,
      nickname:user_info.nickname,
      auth:user_info.auth,
    }
    dispatch(UpdateDeliveryRequest(data))
  }


  const renderStatus = (type)=>{
    switch(type){
      
      case 'ready':
        return(
          <>
           <div>상품준비중</div>
          </>
          )
      case 'delivery':
        return(
          <>
           <div>배송중</div>
           <button className='list_btn delivery' onClick={()=>handleCompleted(order_id)}>구매 확정</button>
          </>
          )
      case 'completed':
        return(
          <>
           <div>구매완료</div>
           <button className='list_btn completed'>영수증</button>
          </>
          )
          case 'wait': default:
            return(
              <>
               <div>배송지 미입력</div>
               <button className='list_btn wait' onClick={()=>handleShipAddress(order_id)}>배송지 입력</button>
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
          <li className='NFT_creater'>{creater}</li>
          <li className='NFT_name'><strong>{name}</strong></li>
          <li className='NFT_creater'>{color} {size}</li>
        </ul>
      </td>
      <td>{sell_type[selltype]}</td>
      <td>{order_date}</td>
      <td>{qty}</td>
      <td>{order_price}</td>
      <td>{multipFloat([order_price,qty])}</td>
      <td> <div>
        {order_id}
        </div>
        <button className='list_btn order'>
            주문서 보기
        </button></td>
      <td>{renderStatus(dlvy_status)}</td>
    </StyledMyNFT>
    );
 
}

export default BuyItem;