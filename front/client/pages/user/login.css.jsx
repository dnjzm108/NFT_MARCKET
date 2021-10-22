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
     &{ position: absolute;
      right: 20px;
      top:20px;
     }

     & > svg{
       cursor:pointer;
     }
`

const LoginWrap = styled.div`
&{
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: relative;
  text-align:center;
  background-color: black;
  background: url(https://www.krafter.space/images/explore_banner.svg);
  background-repeat: repeat;
  background-size: cover;
  padding: 10vh;
  box-sizing: border-box;
}
&::before{
    content: "";
    background-color: black;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    opacity: .9;
}

& > div {
    width: 720px;
    height: 540px;
    padding: 120px;
    box-sizing:border-box;
    background-color: #fff;
    box-shadow: 0 4px 8px rgb(0 0 0 / 8%);
    border-radius: 16px;
    position: relative;
    margin: 5vh auto;
}

`
module.exports={Content,Logo,Copyed,Icon_Close,LoginWrap}