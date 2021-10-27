// import { StyledThumbnail } from './Thumbnail.css'
// import NTF from '../NFT/index'
// import { FiChevronLeft,FiChevronRight } from "react-icons/fi";
// import { GrRadial , GrStatusGoodSmall } from "react-icons/gr";
// import { useState } from 'react';

// const Thumbnail = ()=>{
//     const [isPicture, setIsPicture] = useState(true)
//     const [prevPicture, setPrevPicture] = useState(true)
//     const [nxtPicture, setNxtPicture] = useState(true)
    
//     const handlePass = ()=>{
//         setIsPicture(!isPicture)
//     }

//     return(
//         <StyledThumbnail>
//             <div className="thumbnail">
//                 <h3>대표 사진을 선택해주세요</h3>
//                 <div className="flex_contain">
//                     <FiChevronLeft size="30" />
//                     <NTF />
//                     <FiChevronRight size="30" />
//                 </div>
//             </div>
//             <div className="pass">
//                 {/* {
//                     isPicture ? <GrRadial size="10"/> : <GrStatusGoodSmall size="14"/>
//                 } */}
//             <GrRadial size="10"/><GrRadial size="10"/><GrRadial size="10"/>
//             <GrStatusGoodSmall size="14"/><GrRadial size="10"/><GrRadial size="10"/>
//             <GrRadial size="10"/><GrRadial size="10"/><GrRadial size="10"/>
//             </div>
//         </StyledThumbnail>
//     )
// }

// export default Thumbnail

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Wrap>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        </Wrap>
      </div>
    );
  }
}