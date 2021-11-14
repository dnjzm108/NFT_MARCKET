import styled from "styled-components";

export const StyledSearchView = styled.div`
 display: flex;
 justify-content: flex-start;
 align-items: center;
 padding: 20px;

`

export const StyledSearchViewItem = styled.button`
  border-radius: 10px; 
  border: 1px solid rgb(229, 232, 235);
  overflow: hidden;
  -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    display: flex;
    min-height: 54px;
    padding: 10px 20px;
    border-width: 1px;
    border-style: solid;
    background-color: rgba(21, 178, 229, 0.06);
    border-color: rgb(21, 178, 229);
    margin: 10px;

  &>span{
    margin-right: 3px;
    font-family: 'Pretendard-Light';
    font-size: 16px;
  }

  &>svg{
    color:gray;
  }

  &:hover {
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    &>svg{
      color:black;
    }
  }
`