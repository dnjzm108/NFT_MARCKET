import { StyledThumbnail } from './Thumbnail.css'
import NTF from '../NFT/index'
// import { FiChevronLeft,FiChevronRight } from "react-icons/fi";
// import { GrRadial , GrStatusGoodSmall } from "react-icons/gr";
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import {Styled_Slide} from "./Thumbnail.css"


const Thumbnail = ({imageBundle})=>{
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

    const handleThumbnail = (e,i)=>{
        // console.log(i)
        // console.log(imageBundle[i])
        // console.log("11",imageBundle)
        // changeArrayOrder(imageBundle,2,-2)
    }

    const changeArrayOrder=(list,targetidx,moveValue)=>{
        const newPosi = targetidx+moveValue;
        const temp = JSON.parse(JSON.stringify(list))
        const target = temp.splice(targetidx,1)[0]
        temp.splice(newPosi,0,target)
        return temp;
    }

    const checking =()=>{
        console.log("22",imageBundle)
    }


    return(
        <StyledThumbnail>
            <div className="thumbnail">
                <h3>대표 이미지를 선택해주세요</h3>
                <div className="flex_contain">
                    <Styled_Slide {...settings} isSelect={isSelect}>
                        {imageBundle.map((v, i) => {
                            return (
                                <div key={i}>
                                    <img src={v} onClick={(e,i)=>handleThumbnail(e,i)}/>
                                </div>
                            )
                        })
                        }
                    </Styled_Slide>
                </div>
                
                <p>* 선택하지 않으면 가장 앞의 사진이 대표사진으로 올라갑니다</p>
                <div onClick={checking}>대표사진으로 선택</div>
            </div>
        </StyledThumbnail>
    )
}

export default Thumbnail





