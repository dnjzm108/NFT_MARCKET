import { StyledNFT } from "./NFT.css";
import { useState } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import Link from "next/link";
import  Router  from "next/router";

const NFT = ({type,product_no,price,name,creater,likes,img,bid}) => {
  const [isHover, setIsHover] = useState(false);

  const handleClick = (event) => {
    if (
      event.target.className == "like_btn" ||
      event.target.parentNode.className == "like_btn" ||
      event.target.parentNode.parentNode.className == "like_btn"
    ) {
      console.log("조아요 클릭");
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
            {type==='buy'
            &&
            <>
            <div>Price</div>
            <div className="content_price">
              <img src="/klay.png" alt="" />
              <span>{price}</span>
              </div>
            </>            
            }
            {type==='auction'
            &&
            <>
              <div>Bid</div>
              <div className="content_price">
                <img src="/klay.png" alt="" />
                <span>{bid==undefined ? price : bid}</span>
              </div>
            </>
            }
            
          </div>
        </div>
      </div>
      <div className="content_bottom">
        {isHover && <p className="buynow">Buy now</p>}

        <div className="like_box">
          <i className="like_btn">
            <BsSuitHeartFill size={16} />
          </i>
          <span>{likes}</span>
        </div>
      </div>
    </StyledNFT>
  );
};

export default NFT;