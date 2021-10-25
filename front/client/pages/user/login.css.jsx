import styled from "styled-components"

const Content = styled.div`
& > span {
    display: block;
    margin: 15px;
    color:#2D3741B3;
}

& > button {
    width: 400px;
    height: 80px;
    background-color: #ffffff;
    color: #2D3741B3;
    padding: 26px 24px;
    box-sizing: border-box;
    border: 1px solid #aab4be;
    border-radius: 4px;
    margin: 20px 0 ;
}
& > span > a {
    text-decoration: underline;
    color:#2D3741B3;
}
`

const Logo = styled.span`
width: 20vw;
background-color: #fff;
position: relative;
display:block;
margin: 0 auto 0;
`

const Copyed = styled.span`
 color:#6c757d;
`
const Icon_Close = styled.div`
     &{ 
      position: absolute;
      right: 20px;
      top:20px;
     }

     & > svg{
       cursor:pointer;
     }
`


module.exports={Content,Logo,Copyed,Icon_Close}