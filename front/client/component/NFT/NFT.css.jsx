import styled from "styled-components";

export const StyledNFT = styled.div`
  display: flex;
  flex-direction: column;
  width: 286px;
  height: 407px;
  overflow: hidden;
  border:1px solid rgb(229,232,235);
  border-radius: 8px;
  word-wrap: break-word;
  

  .img-container>img{
    display: block;
    width: 286px;
    height: 286px;
    overflow: hidden;

  }

  .content-container{
  }
  
  .content_head{
    border-bottom: 1px solid rgb(229,232,235);
    height: 79px;
    padding: 12px;
  }

  .content_tail{
    position:relative;
    height: 42px;
    padding: 12px;
  }

  .buynow{
    position: absolute;
    left: 12px;
    color:#186887;
    font-size: 14px;
    font-weight: 600;
  }



`