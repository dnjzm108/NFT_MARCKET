import { StyledNFT } from "./NFT.css";
import { useState } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import Link from "next/link";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {UpdateLike} from "../../reducers/explore"

const NFT = ({ type, product_no, price, name, creater, likes, img,isLike }) => {
  console.log(isLike)
  const dispatch = useDispatch()
  const {user_info,IsLogin} = useSelector(state=>state.user)
  const [isHover, setIsHover] = useState(false);
  const handleClick = (event) => {
    if (
      event.target.className == "like_btn" ||
      event.target.parentNode.className == "like_btn" ||
      event.target.parentNode.parentNode.className == "like_btn"
    ) {
      
        const nickname = user_info.nickname;
        
        if(nickname==null || nickname==undefined)return;

        const data = {
          product_no,
          nickname,
          isLike,
        }
        dispatch(UpdateLike(data))

    } else {
      Router.push(`/nft/${product_no}`)
    }
  };

  return (
    <StyledNFT
      onClick={(e) => handleClick(e)}
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
            <span className="content_name">
              {name}
            </span>
            <span className="content_creater">{creater}</span>
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
        {isHover && <p className="buynow">{ type=='buy'?"Buy now" : "Bid now"}</p>}

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