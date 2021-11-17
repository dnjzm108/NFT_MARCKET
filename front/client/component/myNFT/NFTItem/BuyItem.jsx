import { StyledMyNFT } from "./NFTItem.css";
import Button from '../../Button/index'
import { useDispatch, useSelector } from "react-redux";
import Link from "next/dist/client/link";
import { UpdateOrder } from "../../../reducers/mylist";

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
    img,
    name,
    order_date,
    order_id,
    order_price,
    product_no,
    qty,
    size,
    status,
    selltype,
    handleShipPopUp
}) => {
  const dispatch = useDispatch();  
  const handleShipAddress = ()=>{
    const data ={
    color,
    name,
    creater,
    order_date,
    order_id,
    order_price,
    product_no,
    qty,
    size,
    status,
    selltype  
    }
    dispatch(UpdateOrder(data));
    handleShipPopUp(true)
  }
  

  const sample = () =>{
    alert('함수 샘플')
  }


  const renderStatus = (type)=>{
    switch(type){
      case 'wait':
        return(
          <>
           <div>배송지 미입력</div>
           <button className='order_action_btn wait' onClick={()=>handleShipAddress()}>배송지 입력</button>
          </>
          )
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
           <button className='order_action_btn delivery'>구매 확정</button>
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
      <td>{qty*order_price}</td>
      <td> <div>
        {order_id}
        </div>
        <button className='order_action_btn order'>
            주문서 보기
        </button></td>
      <td>{renderStatus(status)}</td>
    </StyledMyNFT>
    );
 
}

export default BuyItem;