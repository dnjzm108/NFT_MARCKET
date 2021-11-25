import { StyledThumbnail } from './Thumbnail.css'
import NTF from '../NFT/index'
// import { FiChevronLeft,FiChevronRight } from "react-icons/fi";
// import { GrRadial , GrStatusGoodSmall } from "react-icons/gr";
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import {Styled_Slide} from "./Thumbnail.css"


const Thumbnail = ({imageBundle,isNow,imageClick})=>{
    const [ isSelect , setIsSelect ] = useState(true);

    const handleSelect = ()=>{
        setIsSelect(!isSelect)
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const checking =()=>{
        console.log("22",imageBundle)
    }

    return(
        <StyledThumbnail isNow={isNow} >
            <div className="thumbnail">
                <h3> &lt; 대표 이미지로 보일 사진을 클릭하세요 &gt;</h3>
                <p onClick={checking}>* 선택하지 않으면 가장 앞의 사진이 대표사진으로 올라갑니다</p>
                <div className="flex_contain">
                    <Styled_Slide {...settings} imageBundle={imageBundle}>
                        {imageBundle.map((v, i) => {
                            return (
                                <div>
                                    <div key={i} >
                                    <img src={v} onClick={(e) => imageClick(e)}/>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </Styled_Slide>
                </div>
                {/* <button>선택 완료</button> */}
            </div>
        </StyledThumbnail>
    )
}

export default Thumbnail





