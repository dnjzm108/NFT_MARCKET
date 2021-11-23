import styled from "styled-components"

export const Content = styled.div`
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
     &{ position: absolute;
      right: 20px;
      top:20px;
     }

     & > svg{
       cursor:pointer;
     }
`
export const Container = styled.div`
&{
    width: 720px;
    padding: 50px;
    box-sizing:border-box;
    background-color: #fff;
    box-shadow: 0 4px 8px rgb(0 0 0 / 8%);
    border-radius: 16px;
    position: relative;
    margin: 5vh auto;
}

`