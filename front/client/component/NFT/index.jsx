import { StyledNFT } from "./NFT.css";
import { useState } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import {GiBuyCard} from 'react-icons/gi'
import {RiAuctionFill} from 'react-icons/ri'

import {useSelector} from "react-redux";

const NFT = ({ type, product_no, price, name, creater, likes, img,isLike,handleClick }) => {

  const {user_info,IsLogin} = useSelector(state=>state.user)
  const [isHover, setIsHover] = useState(false);

  return (
    <StyledNFT
      onClick={(e) => handleClick(e,product_no,isLike)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <div className="img_container">
        <img src={img} alt="" />
      </div>
      <div className="content_container">
        <div className="content_top">
          <div className="content_top_left">
            <strong className="content_name">
              {name}
            </strong>
            <span className="content_creater">creater {creater}</span>
          </div>
          <div className="content_top_right">
            <div>{type == 'buy' ? "Price" : "Bid"}</div>
            <div className="content_price">
              <img src="/klay.png" alt="" />
              <span>{price}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="content_bottom">
        {isHover && <p className="hovertext">{ type=='buy'?"Buy now" : "Bid now"}</p>}
        {type=='buy'
        ? <GiBuyCard size={24}/>
        : <RiAuctionFill size={24}/>
        }

        <div className="like_box">
          {(isLike===user_info.nickname && IsLogin===true)
          ?(
            <i className="like_btn">
              <BsSuitHeartFill size={16} color={"red"}/>
            </i>
          )
          :(
            <i className="like_btn">
              <BsSuitHeartFill size={16} color={'gray'}/>
            </i>
          )
           
            
          }
          <span>{likes}</span>
        </div>
      </div>
    </StyledNFT>
  );
};

export default NFT;