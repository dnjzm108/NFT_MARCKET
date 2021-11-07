import styled from "styled-components"

const Content = styled.div`
& > span {
    display: block;
    margin: 15px;
    color:#2D3741B3;
}
& > span > a {
    text-decoration: underline;
    color:#2D3741B3;
}
`

const Logo = styled.span`
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


module.exports={Content,Logo,Copyed,Icon_Close}