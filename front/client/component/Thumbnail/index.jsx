import { StyledThumbnail,Styled_Slide } from './Thumbnail.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";


const Thumbnail = ({imageBundle,isNow,imageClick,images})=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return(
        <StyledThumbnail isNow={isNow} >
            <div className="thumbnail">
                <h3> &lt; 대표 이미지로 보일 사진을 클릭하세요 &gt;</h3>
                <p>* 선택하지 않으면 가장 앞의 사진이 대표사진으로 올라갑니다</p>
                <div className="flex_contain">
                    <Styled_Slide {...settings} imageBundle={imageBundle}>
                        {imageBundle.map((v, i) => {
                            return (
                                <div key={i} >
                                    <img src={v} onClick={(e) => imageClick(e)} />
                                </div>
                            )
                        })
                        }
                    </Styled_Slide>
                </div>
            </div>
        </StyledThumbnail>
    )
}

export default Thumbnail





