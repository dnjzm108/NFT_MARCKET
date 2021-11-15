import styled from "styled-components";

export const StyledSelectBox = styled.div`
  width: ${p=>p.width}; 
  border-radius: 10px;
  
`;


export const SelectHeader = styled.button`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  font-weight: 600;
  font-size: 16px;
  border: 1px solid rgb(229, 232, 235);
  cursor: pointer;
  border-radius: 10px;

  &>div{
    display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  }

  &>div>img{
    width: 24px;
    height: 24px;
    overflow: hidden;
    border: 1px solid rgb(229, 232, 235);
    border-radius: 50%;
    padding: 4px;
    margin-right: 12px;
  }

  &:hover{
    transition: all 0.2s ease 0s;
    background-color: rgb(251, 253, 255);
  }
`

export const SelectBody = styled.div`
border-radius: 10px;
border: 1px solid rgb(229, 232, 235);
overflow: hidden;


`

export const SelectItem = styled.div`

  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid rgb(229, 232, 235);
  cursor: pointer;

  &>img{
    width: 24px;
    height: 24px;
    overflow: hidden;
    border: 1px solid rgb(229, 232, 235);
    border-radius: 50%;
    padding: 4px;
    margin-right: 12px;
  }

  &:hover{
    transition: all 0.2s ease 0s;
    background-color: rgb(251, 253, 255);
  }

`
