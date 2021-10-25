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

module.exports = { Logo,Circle,Copyed,Small_Contain,Check_Content,Line}