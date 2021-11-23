import styled from "styled-components";
import Slider from "react-slick";

export const StyledFileInformation = styled.div`
margin-top: 20%;
.img_box{
    margin-top: 2%;
    width: 840px;
    height: 260px;
    border: 1px dashed #bdbdbd;
    text-align: center;
    box-sizing: border-box;
}

.img_box>p{
    font-weight: lighter;
    margin-top: 10%;
    font-size: 20px;
}

.img_box> label>div{
    display: inline-block;
    background: #1d5ddf;
    color: white;
    width: 170px;
    height: 50px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    text-align: center;
    margin-top: 30px;
    transition: .1s ease-in-out;
    line-height: 300%;
    /* justify-content: center;
    align-items: center; */
}

.img_box>label> div:hover{
    cursor: pointer;
    background: white;
    border: .5px solid #1d5ddf;
    color: #1d5ddf;
}

.file_select_input{
    display: none;
}

.information_input{
    margin-top: 6%;
}

.information_input>p{
    margin: 4% 0 10px 0;
    font-size: 20px;
    font-weight: bold;
}

.information_input>h3{
    font-size: 14px;
    font-weight: lighter;
    margin-bottom: 10px;
    color: gray;
}

.information_input> input,textarea{
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    width: 840px;
    height: 50px;
    padding: 1%;
}

.explain_box{
    height: 180px;
}


.imagecon>img{
    width: 150px;
    height: 200px;
    background-color: #efefef;
    box-sizing: border-box;
}
`

export const ImageContent=styled.div`
    display: flex;
    img{
    width: 150px;
    height: 200px;
    background-color: #efefef;
    box-sizing: border-box;
    display: flex;
    }
`
export const StyledNewRelease = styled.div`
.subject{
    font-weight: bold;
    font-size: 24px;
  }

.subject > p{
      margin-top: 5%;
  }

.intro{
      margin-top: 2%;
      display: inline-block;
      font-size: 14px;
      line-height: 26px;
      color: #8C8C8C;
  }
`

export const Styled_Slide = styled(Slider)`
.slick-slide > div {
    width: 640px;
    height: 640px;
    overflow: hidden;
  
}
.slick-slide{
    border:0;
    outline: 0;
}
.slick-slide > div > div> h3 > img{
    width: 640px;
    height: 640px;
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

`