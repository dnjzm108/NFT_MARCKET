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

    const handleThumbnail = (e)=>{
        imageBundle.map((v,i)=>{
            if(imageBundle[i]==e.target.currentSrc){
                return changeArrayOrder(imageBundle,i,-i)
            }
        })
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

    const check1= ()=>{
        console.log(imageBundle)
    }


    return(
        <StyledThumbnail isNow={isNow} >
            <div className="thumbnail">
                <h3>대표 이미지로 보일<br/> 사진을 클릭하세요</h3>
                <div className="flex_contain">
                    <Styled_Slide {...settings} imageBundle={imageBundle}>
                        {imageBundle.map((v, i) => {
                            return (
                                <div key={i} onClick={(e)=>imageClick(e)} >
                                    <img src={v} />
                                </div>
                            )
                        })
                        }
                    </Styled_Slide>
                </div>
                
                <p>* 선택하지 않으면 가장 앞의 사진이 대표사진으로 올라갑니다</p>
                {/* <div onClick={checking}>선택되었습니다</div> */}
            </div>
        </StyledThumbnail>
    )
}

export default Thumbnail





