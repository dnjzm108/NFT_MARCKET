import { StyledThumbnail } from './Thumbnail.css'
import NTF from '../NFT/index'
// import { FiChevronLeft,FiChevronRight } from "react-icons/fi";
// import { GrRadial , GrStatusGoodSmall } from "react-icons/gr";
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import {Styled_Slide} from "./Thumbnail.css"


const Thumbnail = ()=>{
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


    return(
        <StyledThumbnail>
            <div className="thumbnail">
                <h3>대표 이미지를 선택해주세요</h3>
                <div className="flex_contain">
                    <Styled_Slide {...settings} isSelect={isSelect}>
                        {
                            
                        }
                        <div>
                            <button onClick={()=>handleSelect()}>선택</button>
                            <h3>1</h3>
                        </div>
                        <div>
                            <NTF/>
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
                    </Styled_Slide>
                </div>
                <p>* 선택하지 않으면 가장 앞의 사진이 대표사진으로 올라갑니다</p>
            </div>
        </StyledThumbnail>
    )
}

export default Thumbnail





