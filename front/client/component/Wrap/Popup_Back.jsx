import styled from "styled-components"

export const Wrap = styled.div`
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
    width: 100%;
    height: 100%;
    background-color: black;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    opacity: .9;
}
`

export const Wrap_vh = styled.div`
&{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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
    width: 100%;
    height: 100%;
    background-color: black;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    opacity: .9;
}

`