import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;

  padding: ${(props) => props.size};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.ftColor};
  font-family: 'ROKAMedium';
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
  }
`;

export const StyledAnchor = styled.a`
  cursor: pointer;
  width: fit-content;
  font-family: 'ROKAMedium';
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
  }
`;
