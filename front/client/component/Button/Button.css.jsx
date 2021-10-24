import styled from "styled-components";

export const StyledButton = styled.button`
cursor: pointer;

  padding: ${props=> props.size};
  background-color: ${props => props.bgColor};
  color:${props => props.ftColor};
  text-align: center;
  display:flex;
  align-items:center;
  border-radius: .25rem;
  border: ${props=>props.border};
  outline: 0;
  font-size: 1rem;
  font-weight: 400;

  &>i{
    margin-right:3px;
  }

  &:hover{
    background:${props=>props.hover.bg};
    color:${props=>props.hover.ft};
    border: ${props=>props.hover.border};
  }
`


export const StyledAnchor = styled.a` 
cursor: pointer;
width:fit-content;
  padding: ${props=> props.size};
  background-color: ${props => props.bgColor};
  color:${props => props.ftColor};
  text-align: center;
  display:flex;
  align-items:center;
  border-radius: .25rem;
  border: ${props=>props.border};
  outline: 0;
  font-size: 1rem;
  font-weight: 400;  
  &>i{
    margin-right:3px;
  }

  &:hover{
    background:${props=>props.hover.bg};
    color:${props=>props.hover.ft};
    border: ${props=>props.hover.border};
  }
`