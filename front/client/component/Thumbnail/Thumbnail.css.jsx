import styled from "styled-components"
import Slider from "react-slick";

export const StyledThumbnail = styled.div`
margin-top: ${p=>p.isNow ? "40%":"66%"};
.thumbnail{
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.thumbnail>h3{
    font-size: 22px;
    display: flex;
    justify-content: center;
}


.thumbnail>p{
    width: 280px;
    margin-top: 20px;
    text-align: center;
    font-weight: bold;
    color: #222;
    padding:8px;
    box-sizing: content-box;
}
`

export const Styled_Slide = styled(Slider)`

.slick-list {
    width: 360px;
    height: 480px;
    margin: 0 auto;
    background-color: ${p=>p.imageBundle.length==0 ? "#f0f9ff":"none"};
  }

.slick-prev:before, .slick-next:before{
    font-family: 'slick';
    font-size: 40px;
    line-height: 1;
    opacity: .75;
    color: #000000;
    -webkit-font-smoothing: antialiased;
}

.slick-slide{
    margin-top: -20px;
}

.slick-prev:before{
    position: relative;
    left: -1.2vw;
}

div>span>input{
    margin-left: 10px;
}

div>div{
    display:flex;
    align-items: center;
    width: 100%;
}

div>div>img{
    width: 100%;
    height: auto;
    cursor: pointer;
}


`
