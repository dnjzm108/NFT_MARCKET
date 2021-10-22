import styled from "styled-components"

const Logo = styled.span`
width: 20vw;
background-color: #fff;
position: relative;
display:block;
margin: 5vh auto 5vh;
`
const Circle = styled.div`
&{
    width: 120px;
    height: 120px;
    border-radius: 100%;
    border: 1px dashed gray;
    padding: 45px;
    box-sizing: border-box;
    margin: 40px auto 20px;

}
&:hover {
    background: rgb(20, 30, 40);
    color: white;
}

`

const Copyed = styled.span`
position: relative;
display:block;
margin: 10vh auto 0;
 color:#6c757d;
`

const Joinwrap = styled.div`
&{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
& > form{
    width: 720px;
    padding: 80px;
    box-sizing:border-box;
    background-color: #fff;
    box-shadow: 0 4px 8px rgb(0 0 0 / 8%);
    border-radius: 16px;
    position: relative;
    margin: auto;
}
& > form > h1{
    text-align:left;
}

`

const Small_Contain = styled.div`
& {
    margin: 40px auto;
}
& > label{
    font-weight: 700;
    font-size: 20px;
    color: #2d3741;
    display: inline-block;
    float: left;
    margin: 0 0 20px 0;
}

& > td{
    font-size: 12px;
    line-height: 20px;
    color: rgba(45,55,65,.7);
    float: right;
    display: inline-block;
}

& > input{
    display: block;
    width: 100%;
    height: calc(1.75em + 1.25rem + 2px);
    padding: .625rem .75rem;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.75;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
}

`
const Check_Content = styled.div`
   &{
   text-align:left;
   margin: 25px 0;
   }

   & > label > a{
    color:#1E73FA;
    text-decoration: underline;
}
`

const Line = styled.div`
&{
    width: 80%;
    height: 1px;
    border: 1px solid gba(20,30,40,0.8);
    margin: 50px 0;

}
`

module.exports = { Logo,Circle,Copyed,Joinwrap ,Small_Contain,Check_Content,Line}