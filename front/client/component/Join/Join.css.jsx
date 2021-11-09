import styled from "styled-components"

export const Logo = styled.span`
&{
width: 330px;
height: 100px;
position: relative;
display:block;
margin: 0 auto 0;
overflow: hidden;
}
&>img{
    width: 330px;
    height: 150px;
    position: absolute;
    left: 0;
    top:-35px;
}
`

export const Circle = styled.div`
& > input{
    width: 100px;
}
& > label{
    display: block;
    width: 120px;
    height: 120px;
    border-radius: 100%;
    border: 1px dashed gray;
    padding: 45px;
    box-sizing: border-box;
    margin: 40px auto 20px;

}
& > label:hover {
    background: rgb(20, 30, 40);
    color: white;
}

`

export const Copyed = styled.span`
position: relative;
display:block;
margin: 10vh auto 0;
 color:#6c757d;
`


export const Small_Contain = styled.div`
& {
    margin: 70px auto;
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

`
export const Check_Content = styled.div`
   &{
   text-align:left;
   margin: 25px 0;
   }

   & > label > a{
    color:#1E73FA;
    text-decoration: underline;
}
`

export const Line = styled.div`
&{
    width: 80%;
    height: 1px;
    border: 1px solid gba(20,30,40,0.8);
    margin: 50px 0;

}
`

export const Btn_Box = styled.div`
&{
    width: 230px;
    margin: 0 auto;
    display: inline-flex;
    justify-content: space-evenly;
}

`