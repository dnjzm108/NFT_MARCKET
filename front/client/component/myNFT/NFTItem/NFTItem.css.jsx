import styled from "styled-components";

export const StyledMyNFT = styled.tr`
  width: 100%;
  &>td{
    padding: 10px;
  }
  
  &:hover{
    background-color: #f7f7f7;
  } 

  .NFT_info{
    display: flex;
  }

  
  .NFT_img>img{
      width: 120px;
      height: 120px;
      overflow: hidden;
      padding: 4px;
    }
  
  .NFT_detail{
    padding-left: 10px;
    font-size: 14px;
    flex:1;
  }

  &>td:nth-child(2),
  &>td:nth-child(3),
  &>td:nth-child(4),
  &>td:nth-child(5),
  &>td:nth-child(6),
  &>td:nth-child(7),
  &>td:nth-child(8){
    text-align: center;
  }


 .order_action_btn{
  margin-top  :10px ;
  padding: 0.3125rem 0.8125rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight : 400;
    transition: color .08s ease-in-out, background-color .08s ease-in-out, border-color .08s ease-in-out, box-shadow .08s ease-in-out;
    text-align: center;
    vertical-align: middle;
    border-radius: 0.25rem;
    background-color: #007aff;
    border: 1px solid transparent;
    color:#fff;

    &:hover{
      border-color: #0053F4;
    background-color: #0053F4;
    color: white;
    }
 }

 .delivery{
   background-color: #28a745;
   color:#fff;
   
   &:hover{
     background-color: #348F2C;
      color:#fff;
    }
 }


`