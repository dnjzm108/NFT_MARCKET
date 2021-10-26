import styled from "styled-components"
 
 export const Product_Wrap = styled.div`
&{
   width: 100%;
   background: #fff;
   padding-top: 90px;
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
        width: 800px;
        height: 800px;
        padding: 80px;
        box-sizing: border-box;
        background: #DCE6F0;
    }
    & > div > div:nth-child(2) > div{
        width: 640px;
        height: 640px;
        background: #ffffff;
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
    width: 250px;
    height: 150px;
    float: right;
    padding: 30px 0;
    box-sizing: border-box;
}
& > div:nth-child(2) > button{
    width: 200px;
    height: 50px;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 10px;
    margin: 5px 0;
}
& > div:nth-child(2) > button:hover{
    background: #1E73FA;
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
    position: relative
    border: 1px solid #000000;
    border-radius: 10px;
    margin: 0 5px;
    }
    & > div:nth-child(2)>ul>a>li>img{
    width: 185px;
    height: 185px;
    }
`

