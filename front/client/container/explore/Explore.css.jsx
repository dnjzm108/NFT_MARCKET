import styled from "styled-components";

export const StyledExplore = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100vw;
  height: auto;
  & > div {
    position: relative;
    display: flex;
  }
  .content-box{
    display: flex;
    flex-direction: row;
  }

  .content-right{
    flex:1;
  }
`;
