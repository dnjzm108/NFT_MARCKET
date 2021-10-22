import styled from "styled-components";

export const StyledFilter = styled.div`
  border-right: 1px solid rgb(229,232,235);

  .filter_open{
    width: 340px;
  }

  .filter_close{
    width: 64px;
  }

  .filter_header{
    width: 100%;
    height: 64px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom:1px solid rgb(229,232,235);

    &>div{
      display: flex;
    justify-content: space-between;
    align-items: center;
    }

    &>div:nth-child(1)>i{
      margin-right: 10px;
    }

    &>div:nth-child(1)>span{
      font-size: 16px;
      font-weight: 600;
    }

    &:hover{
      box-shadow: -2px 4px 2px 1px rgba(119,119,119,0.1);
      

    }
  }
`