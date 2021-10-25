import styled from "styled-components"
 
 export const Product_Wrap = styled.div`
&{
   width: 100%;
   background: #fff;
   margin-top: 100px;
}

& > div {
    width: 824px;
    padding: 0 12px;
    box-sizing: border-box;
    margin: 0 auto;

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
`

export const Seller_contain = styled.div`
&{
    width: 100%;
    border-top: 1px solid rgba(20, 30, 40, 0.1);
    border-bottom: 1px solid rgba(20, 30, 40, 0.1);
    padding: 10px;
    box-sizing: border-box;

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
& > div:nth-child(1) > h1{
    display: inline-block;
}
& > div:nth-child(1) > button{
    display: inline-block;
    width: 110px;
    height: 40px;
    padding: 8px 16px;
    box-sizing: border-box;
    float: right;
    background: #ffffff;
    border-radius: 5px;
    color: #2D3741B3;
    font-weight: bold;
    font-size: 15px;

}
& > div:nth-child(2){
    margin-top: 30px;
}
& > div:nth-child(2)>ul{
    width: 100%;
    height: 200px;
    overflow: hidden;

}
& > div:nth-child(2)>ul>li{
    display: inline-block;
    width: 185px;
    height: 185px;
    border: 1px solid #000000;
    border-radius: 10px;
    margin: 0 5px;
    }
`