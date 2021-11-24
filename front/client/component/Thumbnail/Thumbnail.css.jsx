import styled from "styled-components"
import Slider from "react-slick";

export const StyledThumbnail = styled.div`
margin-top: ${p=>p.isNow ? "40%":"66%"};
.thumbnail{
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;
}

.thumbnail>h3{
    font-size: 20px;
    width: 300px;
    display: flex;
    justify-content: center;
}

.thumbnail>p{
    width: 280px;
    margin-top: 20%;
    text-align: center;
    font-weight: bold;
    color: #222;
}
`

export const Styled_Slide = styled(Slider)`

.slick-list {
    
    width: 320px;
    height: 400px;
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

.slick-prev:before{
    position: relative;
    left: -1.2vw;
}

div>button{
    width: 50px;
    float: right;
    border-radius: 30px;
    border: 1px solid #222;
    background-color: ${p=> !p.isSelect ? "#222": "white"};
    color: ${p=> !p.isSelect ?  "white": "#222"};
    padding: 4px;
    margin: 6%;
    cursor: pointer;
}

div>div{
    display:flex;
    align-items: center;
    width: 100%;
    padding: 8px;
}

div>div>img{
    width: 100%;
    height: auto;
}
`
