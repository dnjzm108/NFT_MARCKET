import styled from "styled-components";

export const AccordionMenu = styled.div`
  position: absolute;
  width: 100%;
  left: 0px;
  top: 10vh;
  z-index: 5;
  background: #fff;
  padding: 7vh 0;

  display: ${(props) => (props.flag ? "block" : "none")};

  & > ul {
    display: flex;
    flex-direction: column;
  }

  & > ul > li {
    margin-top: 20px;
    text-align: center;
  }
`;
