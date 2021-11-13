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
  &>td:nth-child(7){
    text-align: center;
  }




`