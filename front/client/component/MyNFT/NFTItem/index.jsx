import { StyledMyNFT } from "./NFTItem.css";
import Button from '../../Button/index'

const NFTItem = ({type}) => {

  const sample = () =>{
    alert('함수 샘플')
  }

  if(type=='buy'){
    return (
      <StyledMyNFT>
      <td className='NFT_info'>
        <div className='NFT_img'><img src="/green.png" alt="" /></div>
        <ul className='NFT_detail'>
          <li className='NFT_creater'>디자이너</li>
          <li className='NFT_name'><strong>상품 이름</strong></li>
        </ul>
      </td>
      <td>주문일자</td>
      <td>주문번호</td>
      <td>주문금액</td>
      <td>주문상태</td>
    </StyledMyNFT>
    );
  }else if( type=='auction'){
    return (
      <StyledMyNFT>
      <td className='NFT_info'>
        <div className='NFT_img'><img src="/green.png" alt="" /></div>
        <ul className='NFT_detail'>
          <li className='NFT_creater'>디자이너</li>
          <li className='NFT_name'><strong>상품 이름</strong></li>
        </ul>
      </td>
      <td>입찰일자</td>
      <td>입찰금액</td>
      <td>입찰상태</td>
      <td>주문일자</td>
      <td>주문번호</td>
      <td>주문상태</td>
    </StyledMyNFT>
    );
  }
}

export default NFTItem;