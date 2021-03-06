import styled from "styled-components";

export const StyledFilter = styled.div`
  border-right: 1px solid rgb(229,232,235);
  max-height: 80vh;
  overflow-y: scroll;
  position: sticky;
  top: 94px;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}

  .filter_open{
    height: auto;
    width: 340px;
  }

  .filter_close{
    width: 64px;
  }

  .price_input{
    width: 100%;
    padding-top: 16px;
    display: flex;
    justify-content:space-between;
    align-items: center;
  }

  .price_button{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-top: 16px;
  }

  .price_warning{
    width: 100%;
    color:#dc3545;
    font-size: 12px;
    text-align: left;
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

  .klay{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;

      &>img{
        display: inline-block;
        width: 30px;
        height: 30px;
      }

      &>span{
        font-size: 30px;
        font-weight: 600;
        margin-left: 5px;
      }
    }
  `