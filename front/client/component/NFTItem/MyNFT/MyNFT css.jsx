import styled from "styled-components";

export const MyNFT = styled.li`
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid  #aab4be;

  .MyNFT_img{
    width: 15%;
    height: 160px;
    
    &>img{
     
    }
  }

  .MyNFT_info{
    width: 55%;
    height: 160px;
    padding: 0 16px;  
  }




  .MyNFT_name{
    font-size: 24px;
    font-weight: 600;
  }

  .MyNFT_price{
    font-size: 16px;
    font-weight: 500px;
  }

  .MyNFT_date{
    font-size: 14px;
    font-weight: 500px;
    color:#777;
  }

  .MyNFT_state{
    font-size: 16px;
  }

  .MyNFT_state_detail>p{
    font-size: 12px;
  }

  .MyNFT_designer{
    width: 15%;
    height: 160px;

    &>img{
    width: 120px;
    height: 120px;
    overflow: hidden;
    border: 1px solid rgb(229, 232, 235);
    border-radius: 50%;
    padding: 4px;
    cursor: pointer;

    }

    &>span{
      font-weight: 500;
      font-size: 24px;
    }
  }

  .MyNFT_action{
    display: flex;
    justify-content: center;
    align-items: center;
  }


  














`