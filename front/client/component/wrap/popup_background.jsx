import styled from 'styled-components'

export const Popup_background = styled.div`
&{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: relative;
}
&::before{
    content: "";
    background-color: black;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    opacity: .6;
}
`
