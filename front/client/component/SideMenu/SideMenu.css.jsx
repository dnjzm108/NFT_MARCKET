import styled from 'styled-components'

export const StyledSideMenu = styled.div`
   background-color: #f9fbfd;
   border: 1px solid #eeeff0;

   width: 340px;
  max-height: 80vh;
  position: sticky;
  top: 94px;

  .menu_open{
    width: 340px;
  }

  .menu_close{
    width: 64px;
  }

  .menu_header{
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
      color: #999;
    }
    
    &:hover{
      box-shadow: -2px 4px 2px 1px rgba(119,119,119,0.1);
      .arrow{
        color:black;
      } 
    }
  }

`

export const StyledMenuItem = styled.div`
    width: 100%;
    padding: 20px;
    border-bottom:1px solid rgb(229,232,235);
    
    &>a{
      display: inline-block;
      width: 100%;
    }
`