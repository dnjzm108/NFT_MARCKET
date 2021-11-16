import styled from "styled-components"

export const Big_btn = styled.button`
width: 196px;
height: 64px;
color: #ffffff;
background: #1E73FA;
padding: 18px 24px;
box-sizing: border-box;
border-radius: .25rem;
border: 0;
outline: 0;
font-size: 1rem;
}

&:hover{
    background:#6610f2;
}
`

export const Middle_btn = styled.button`
&{
width: 105px;
height: 64px;
color: #ffffff;
background: #1E73FA;
padding: 18px 24px;
box-sizing: border-box;
border-radius: .25rem;
border: 0;
outline: 0;
font-size: 1rem;
}

&:hover{
    background:#6610f2;
}
`

export const Small_btn =styled.button`
&{
width: 76px;
height: 64px;
color: #055FEC;
background: #E1F0FF;
padding: 18px 24px;
box-sizing: border-box;
font-size: 1rem;
border: 0;
outline: 0;
border-radius: .25rem;
}

&:hover{
    background: #1E73FA;
    & > a{
        color: #ffffff;
    }
}
`