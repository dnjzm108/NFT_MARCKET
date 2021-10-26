import styled from 'styled-components'

export const Footter_Wrap = styled.div`
&{
position: relative;
 bottom: 0;
 width: 100%;
 height: 244px;
 padding: 58px 80px;
 background: #141E28;
 box-sizing: border-box;

}
& > div:nth-child(1){
    height: 70px;
    overflow: hidden;
}
& > div:nth-child(1) > div{
    float: right;
}
& > div:nth-child(1) > img{
   position: absolute;
   top: 15px;
   left: 65px;
}

& > div:nth-child(1) > div > button{
    width: 125px;
    height: 48px;
    color: #ffffff;
    padding: 10px 24px;
    background: #141E28;
    box-sizing: border-box;
    border: 1px solid #ffffff;
    border-radius: 5px;
    margin: 0 5px;
}
& > div:nth-child(1) > div > button:hover{
    background: #46505A;
}
& > div{
 color: #FFFFFF66;
 margin: 20px 0;
} 
& > div > div{
    display: inline-block;
    margin: 0 12px;
}
& > div > a{
 color: #FFFFFF66;
}
`