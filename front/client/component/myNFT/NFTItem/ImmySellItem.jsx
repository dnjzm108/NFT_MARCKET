import { StyledMyNFT } from "./NFTItem.css";
import Button from '../../Button/index'
import { useSelector } from "react-redux";

const dlvy_status = {
  'all':'전체',
  'wait':'배송지 미입력',
  'ready':'배송요청',
  'delivery':'배송중',
  'completed':'구매완료',
}


const ImmySellItem = (
  {
    color,
    img,
    name,
    date,
    product_no,
    total_qty,
    leftover,
    likes,
    type
}) => {
  
  const renderSellType=()=>{
    if(type=='buy' && leftover>0){
      return (
        <div>
          <div>판매중</div>
          <button>판매중지</button>
        </div>
      )
    }else if(type=='buy' && leftover==0){
        <div>
          <div>매진</div>
        </div>
    }else if(type=='stop'){
      <div>
        <div>판매중지</div>
        <button>판매재개</button>
      </div>
    }
  }

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
          <li className='NFT_creater'>{likes}</li>
        </ul>
      </td>
      <td>{date}</td>
      <td>{total_qty}</td>
      <td>{leftover}</td>
      <td> {renderSellType()}</td>
    </StyledMyNFT>
    );
 
}

export default ImmySellItem;