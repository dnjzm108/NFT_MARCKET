import styled from "styled-components";

export const StyledULButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  padding: 16px;
  width: 240px;
  background-color: #fff;
  border: 1px solid rgb(229, 232, 235);
  text-align: left;
  cursor: pointer;

  &:hover{
    transition: all 0.2s ease 0s;
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    background-color: rgb(251, 253, 255);
  }

  &>div{
    display: flex;
    justify-content: center;
    align-items: center;
    
    &>i{
      margin-right: 16px;
    }
  }
`;

export const List =styled.div`

` 