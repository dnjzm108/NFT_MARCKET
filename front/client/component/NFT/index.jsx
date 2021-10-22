import { StyledNFT} from "./NFT.css";
import {tempData} from "../../public/temp"
import { useState } from "react";
import {BsSuitHeartFill} from "react-icons/bs"
import Link from 'next/link'


const data = tempData[0].img


const NFT = () => {
  const [isHover,setIsHover] = useState(false);

  const handleClick = (event) =>{
    if(event.target.className=='like_btn' ||event.target.parentNode.className=='like_btn' ||event.target.parentNode.parentNode.className=='like_btn' ){
      console.log('조아요 클릭')
    }else{
      console.log('링크이동')
    }
  }

  return (
    <StyledNFT onClick={(e)=>handleClick(e)} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>{setIsHover(false)}}>
      <div className='img_container'>
        <img src={data} alt="" />
      </div>
      <div className='content_container'>
        <div className='content_top'>
          <div className='content_top_left'>
              <span className='content_name'>
              짜장면 한 그릇먹고 싶다던지 그런 소망 없어요?
              </span>
              <span className='content_creater'>
                노무현 친구
              </span>
            </div> 
            <div className='content_top_right'>
                <div>Price</div>
                <div className='content_price'>
                  <img src="/klay.png" alt="" />
                  <span >100</span>
                </div>
                <div className='content_offer'>
                  Offer for
                  <img src="/klay.png" alt="" />
                  <span>0.00001</span>
                </div>
            </div>

          </div>
        </div>
        <div className='content_bottom'>
          {isHover && <p className='buynow'>Buy now</p>}
          
          <div className='like_box'>
            <i className='like_btn'><BsSuitHeartFill size={16}/></i>
            <span>500</span>
          </div>
        </div>
    </StyledNFT>
  );
}

export default NFT;