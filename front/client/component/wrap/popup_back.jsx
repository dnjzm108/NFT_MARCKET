import styled from "styled-components"

export const Wrap = styled.div`
&{
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
    padding: 120px;
    box-sizing:border-box;
    background-color: #fff;
    box-shadow: 0 4px 8px rgb(0 0 0 / 8%);
    border-radius: 16px;
    position: relative;
    margin: 5vh auto;
}

`