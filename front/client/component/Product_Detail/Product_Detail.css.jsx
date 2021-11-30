import styled from "styled-components"
import Slider from "react-slick";
 
 export const Product_Wrap = styled.div`
&{
   width: 100%;
   background: #fff;
}

& > div {
    width: 824px;
    padding: 0 12px;
    box-sizing: border-box;
    margin: 0 auto;

}

& > div > div:nth-child(1){
    padding-bottom: 10px ;
}
    & > div > div:nth-child(2){
        width: 900px;
        height: 700px;
        padding: 0 80px;
     
        box-sizing: border-box;
    }
    & > div > div:nth-child(2) > div{
        width: 640px;
        height: 640px;
        background: #ffffff;
        border: 1px solid #000000;
        margin: 0 auto;
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

export const Middle_container = styled.div`
& > div:nth-child(1){
    display: inline-block;
    width: 500px;
    height: 150px;
    padding: 30px 0;
    box-sizing: border-box;
}
& > div:nth-child(1) > h1{
   font-size: 48px;
}
& > div:nth-child(1) > h3{
   font-size: 28px;
   color: #2D374166;
   margin: 10px 0;
}
& > div:nth-child(1) > h4{
   font-size: 22px;
   color: #2D374166;
   margin: 10px 0;
}
& > div:nth-child(2){
    display: inline-block;
    width: 150px;
    height: 150px;
    float: right;
    padding: 30px 0;
    box-sizing: border-box;
}
& > div:nth-child(2) > button{
    width: 80px;
    height: 50px;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 10px;
    margin: 5px 0;
    float: right;
}
& > div:nth-child(2) > div{
    display: inline-block;
    padding-top: 15px;
    box-sizing: border-box;
}
& > div:nth-child(2) > button:hover{
    -webkit-box-shadow: 0px 7px 12px 2px rgba(119, 119, 119, 0.3);
    box-shadow: 0px 7px 12px 2px rgba(119, 119, 119, 0.3);
    /* box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px; */
    transition: all 0.1s ease 0s;
    transform: translateY(-1px);
}
& > div:nth-child(2) > button:nth-child(1){
}
`

export const Seller_contain = styled.div`
&{
    width: 100%;
    border-top: 1px solid rgba(20, 30, 40, 0.1);
    border-bottom: 1px solid rgba(20, 30, 40, 0.1);
    padding-bottom: 20px;
    box-sizing: border-box;
    margin-top: 10px;

}

& > div {
    /* margin: 0 auto; */
    text-align:center;

}
`
export const Explain = styled.div`
&{
    width: 100%;
    padding: 20px 0;
    box-sizing: border-box;
}
& > h4{
    margin-top: 10px;
}
`
export const Slide_container = styled.div`
&{
    width: 100%;
    padding: 10px 0;
    box-sizing: border-box;
}
& > div:nth-child(1){
    display: flex;
    justify-content: space-between;
}

& > div:nth-child(1) > h1{
    display: inline-block;
}
& > div:nth-child(2){
    margin-top: 30px;
}
& > div:nth-child(2)>ul{
    width: 100%;
    height: 200px;
    overflow: hidden;

}
& > div:nth-child(2)>ul>a>li:hover{
    -webkit-box-shadow: 0px 7px 12px 2px rgba(119, 119, 119, 0.3);
    box-shadow: 0px 7px 12px 2px rgba(119, 119, 119, 0.3);
    /* box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px; */
    transition: all 0.1s ease 0s;
    transform: translateY(-1px);
}
& > div:nth-child(2)>ul>a>li{
    display: inline-block;
    box-sizing: content-box;
    position: relative;
    z-index: 1;
    width: 185px;
    height: 185px;
    border: 1px solid rgb(229, 232, 235);
    border-radius: 8px;
    position: relative;
    border-radius: 10px;
    margin: 2px 5px;
    }
    & > div:nth-child(2)>ul>a>li>img{
    width: 185px;
    height: 185px;
    }
`


export const Price_contain = styled.div`
&{
    width: 100%;
    border-top: 1px solid rgba(20, 30, 40, 0.1);
    border-bottom: 1px solid rgba(20, 30, 40, 0.1);
    padding: 20px;
    box-sizing: border-box;
    margin-top: 10px;
    display: flex;
    justify-content: space-evenly;
}

& > h2 {
    font-size: 30px;
}
& > h2 >img{
    width: 50px;
    height: 50px;
    position: relative;
    top:10px
}
& > h3 {
    font-size: 2rem;
    padding: 20px;
}
`
export const Auction_contain = styled.div`
&{
    width: 100%;
    border-top: 1px solid rgba(20, 30, 40, 0.1);
    border-bottom: 1px solid rgba(20, 30, 40, 0.1);
    padding: 20px;
    box-sizing: border-box;
    margin-top: 10px;
    position: relative;
    
}

& > ul {
    display: flex;
    justify-content: space-evenly;
}
& > ul > li{
    padding-bottom: 10px;
}
& > div{
    width: 100%;
    height: 200px;
    border: 1px solid #000000;
}
`
export const Center_contain = styled.div`
&{
    padding: 10px 35%;
    box-sizing: border-box;
    text-align: center;
}
& > h1 {
    padding: 10px;
    box-sizing: border-box;
}
`

export const FixBox = styled.div`
&:nth-child(2){
    position: relative;
    height: 70px;
    z-index:3;
} 
/* &:nth-child(2) >div{
    position: absolute;
    z-index:10;
} */
&:nth-child(3){
    position: relative;
    height: 70px;
    z-index:2;
}
& > div {
    position: absolute;
    z-index:70;
}

`

//---- 팝업 css 부분 ----

export const StyledNowPopup = styled.div`
    .purchase_box{
        position: relative;
        left:50%;
        transform: translateX(-50%);
        width: 30vw;
        height: 60vh;
        margin-top: 10%;
        background-color: white;
        border-radius: 15px;
        padding: 4%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        z-index: 70;
    }
    .purchase_box>p{
        width: auto;
        display: inline-block;
    }

    .purchase_box>ul>li{
        padding: 10px;
    }
    .purchase_box>ul>li>span>img{
        width: 15px;
        height: 15px;
    }
    .purchase_box>ul>li>span{
        width: auto;
        height: auto;
        padding: 10px;
    }
    .flex_contain{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .x{
        width: 100%;
        text-align: right;
        cursor: pointer;
    }
`


