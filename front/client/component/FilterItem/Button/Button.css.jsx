import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 12px 20px;
  border: 1px solid #2081e2;
  border-radius: 10px;
  background-color: ${props =>props.color || '#ffffff' };
  color:${props =>props.color=="blue" ? '#ffffff' : "#2081e2"};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`


export const StyledAnchor = styled.a`
  padding: 12px 20px;
  border: 1px solid #2081e2;
  border-radius: 10px;
  background-color: ${props =>props.color || '#ffffff' };
  color:${props =>props.color=="blue" ? '#ffffff' : "#2081e2"};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`