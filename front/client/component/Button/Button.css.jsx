import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  ${p=>p.btn_color}


  padding: ${(props) => props.size};
  /* background-color: ${(props) => props.bgColor};
  color: ${(props) => props.ftColor}; */
  text-align: center;
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  /* border: ${(props) => props.border}; */
  outline: 0;
  font-size: 1rem;
  font-weight: 400;

  & > i {
    margin-right: 3px;
  }

  &:hover {
    ${p=>p.btn_hover}
    /* background: ${(props) => props.hoverBg};
    color: ${(props) => props.hoverFontColor};
    border: ${(props) => props.hoverBorder}; */
  }
`;

export const StyledAnchor = styled.a`
  /* cursor: pointer;
  width: fit-content;
  padding: ${(props) => props.size};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.ftColor};
  text-align: center;
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  border: ${(props) => props.border};
  outline: 0;
  font-size: 1rem;
  font-weight: 400;
  & > i {
    margin-right: 3px;
  }

  &:hover {
    background: ${(props) => props.hoverBg};
    color: ${(props) => props.hoverFontColor};
    border: ${(props) => props.hoverBorder};
  } */
`;
