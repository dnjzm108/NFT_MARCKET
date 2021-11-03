import styled from "styled-components"

export const Content = styled.div`

& > span {
    display: block;
    margin: 15px;
    color:#2D3741B3;
}

& > button {
    display: flex;
    justify-content: space-between;
    width: 400px;
    height: 80px;
    background-color: #ffffff;
    color: #2D3741B3;
    padding: 33px 24px;
    box-sizing: border-box;
    border: 1px solid #aab4be;
    border-radius: 4px;
    margin: 20px auto ;
    font-weight: bold;
    font-size: 1rem;
}
& > button:hover{
    background: #F9FBFD;
}
& > button>img{
    width: 30px;
    height: 30px;
    position: relative;
    top: -10px;
}
& > span > a {
    text-decoration: underline;
    color:#2D3741B3;
}
`

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

export const Copyed = styled.span`
 color:#6c757d;
`
export const Icon_Close = styled.div`
     &{ 
      position: absolute;
      right: 20px;
      top:20px;
     }

     & > svg{
       cursor:pointer;
     }
`


