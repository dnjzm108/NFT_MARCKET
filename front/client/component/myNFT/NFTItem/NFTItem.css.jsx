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

  
  .NFT_img{
      width: 120px;
      height: 120px;
      overflow: hidden;
      padding: 4px;
      cursor: pointer;
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


 .list_btn{
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
   border-color: #28a745;
   color:#fff;
   
   &:hover{
     background-color: #348F2C;
   border-color: #28a745;

      color:#fff;
    }
 }

 .hide{
   background-color: #FF4B45;
   border-color: #FF4B45;
   color:#fff;
   
   &:hover{
     background-color: #FF312B;
   border-color: #FF4B45;

      color:#fff;
    }
 }

 .invoice{
   background-color: #e9207e;
   border-color: #e9207e;
   color:#fff;
   
   &:hover{
     background-color: #d11a6f;
   border-color: #e9207e;

      color:#fff;
    }
 }

 .completed{
   background-color: #fd7e14;
   border-color: #fd7e14;
   color:#fff;
   
   &:hover{
     background-color: #e06806;
    border-color: #fd7e14;
      color:#fff;
    }
 }

 .order{
   background-color: #777;
   border-color: #777;
   color:#fff;
   
   &:hover{
     background-color: #555555;
    border-color: #555555;
      color:#fff;
    }
 }

 .auction_type{
   font-weight: 800;
 }

 .bid{
  color:blue;
 } 

 .burial{
   color:red;
 }

 .success{
   color:green;
 }
`

export const StyledSellBuyDetail = styled.tr`


  &>td>table{
    margin: 2rem auto;
    width: 80%;
    thead>tr{
      &>th{
        padding: 4px;
        font-size: 1.5rem;
      }
      &>th:nth-child(1){
        width: 20%;
      }
      &>th:nth-child(2){
        width: 20%;
      }
      &>th:nth-child(3){
        width: 20%;
      }
      &>th:nth-child(4){
        width: 20%;
      }
      &>th:nth-child(5){
        width: 20%;
      }
    }

    td{
      text-align: center;
      padding: 4px;
      font-size: 1rem;
      border-bottom: 1px solid black;
    }

  }





`

export const StyledSellAuctionDetail = styled.tr`
  .product_detail_table{
    margin: 0 auto;
    width: 80%;

    thead>tr{
      font-size: 1.5rem;
      &>th{
        padding: 4px;
      }
      &>th:nth-child(1){
        width: 20%;
      }
      &>th:nth-child(2){
        width: 20%;
      }
      &>th:nth-child(3){
        width: 20%;
      }
      &>th:nth-child(4){
        width: 20%;
      }
      &>th:nth-child(5){
        width: 20%;
      }
    }

    td{
      text-align: center;
      padding: 4px;
    }
  }

  

  div{
    width: 60%;
    margin: 1rem auto;
    text-align: left;
    font-size: 1.5rem;
    font-weight: 400;
  }

  strong{
    font-weight: 600;
  }

  ul{
    width: 60%;
    margin: 1rem auto 2rem;
    
    .auction_history_head{
      font-size:1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    &>li{
      margin-bottom: 0.5rem;
    }

    &>li>span{
      display: inline-block;
      text-align: center;
    }
    .bid_date{
      width: 40%;
    }
    .bider{
      width: 20%;
    }
    .bid{
      width: 20%;
    }
    .auction_status{
      width: 20%;
    }

    ._bid{
      color:blue
    }

    ._burial{
      color:grey
    }
    ._success{
      color:green
    }

  }

`