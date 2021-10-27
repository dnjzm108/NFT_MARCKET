import styled from "styled-components";

export const CheckBoxContainer = styled.div`
  width: 100%;
`


export const CheckBoxItem = styled.div`
  width: 100%;
  padding:0.75rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "ROKABold";

  &>input{
    margin-right: 16px;
  }
`


export const CheckBoxImageItem = styled.div`
  width: 100%;
  padding:0.75rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "ROKABold";

  &>input{
    display: none;
  }

  &>label{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
  }

  &>label>span{
    margin-left: 12px;
  }
  
  &>label>i>img{
    width: 32px;
    height: 32px;
    overflow: hidden;
    border: 1px solid rgb(229, 232, 235);
    border-radius: 50%;
    padding: 4px;
    cursor: pointer;
  }
`
