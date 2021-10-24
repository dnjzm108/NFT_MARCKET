import styled from "styled-components";

export const StyledFilter = styled.div`
  position: relative;
  border-right: 1px solid rgb(229,232,235);


  .filter_open{
    position: sticky;
    top: 80px;
    width: 340px;
  }

  .filter_close{
    position: sticky;
    top: 80px;
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
    cursor: pointer;
    
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
    
    .arrow{
      color:#999;
    }
    
    &:hover{
      box-shadow: -2px 4px 2px 1px rgba(119,119,119,0.1);
      .arrow{
        color:black;
      }
    }
  }
  `