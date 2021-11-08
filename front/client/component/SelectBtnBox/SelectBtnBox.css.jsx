import styled from "styled-components";

export const StyledSelectBtnBox = styled.div`
width: 100%;
 border-radius: 10px;
  
`;

export const StyledSelectBtnBoxItemBlue = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  width: 48%;
  border-radius: 10px;
  background-color:#1E73FA;
  color:#fff;
  font-size: 12px;
  font-weight: 400;
  padding: 7px 14px;
  outline: 0;
`

export const StyledSelectBtnBoxItemWhite = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  outline: 0;
  font-size: 12px;
  font-weight: 400;
  border-radius: 10px;
  width: 48%;
  padding: 7px 14px;
  background-color: #E1FFF0;
  color:#212529;
`



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
padding: 20px;
border-radius: 10px;
border: 1px solid rgb(229, 232, 235);
overflow: hidden;
display: flex;
justify-content: space-between;
flex-wrap: wrap;

`