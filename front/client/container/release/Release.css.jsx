import styled from 'styled-components'
import Slider from "react-slick";

export const StyledRelease = styled.div`

  width: 80vw;
  /* height: auto; */
  /* overflow: hidden; */

  margin:  0 auto;
  color: #4c4c4c;
  padding: 4%;

.flex_contain{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.flex_contain>div>h2{
  font-size: 38px;
}
`

export const Slide_Wrap = styled.div`
&{
  position: absolute;
  right: 7%;
  top: 55%;
}
`

export const Styled_Slide = styled(Slider)`
&{
  position: relative;
  
  width: 300px;
}
.slick-slide > div {
    width: 300px;
    height: 300px;
    overflow: hidden;
  
}
.slick-slide{
    border:0;
    outline: 0;
}
.slick-slide > div > div> h3 > img{
    width: 300px;
    height: 300px;
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
    left: -20px;
}
/* .slick-next:before{
  position: relative;
    left: -600px;
} */
`