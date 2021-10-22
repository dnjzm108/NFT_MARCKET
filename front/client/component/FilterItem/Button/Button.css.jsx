import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 12px 20px;
  border: 1px solid #2081e2;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
  color:${props => props.ftColor};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  display:flex;
  align-items:center;
`


export const StyledAnchor = styled.a`
  
  padding: 12px 20px;
  border: 1px solid #2081e2;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
  color:${props => props.ftColor};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  display:flex;
  align-items:center;
`