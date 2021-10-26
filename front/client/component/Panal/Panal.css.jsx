import styled from "styled-components";

export const StyledPanal = styled.div`


  
  .panal_header{
    width: 340px;
    height: 64px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    border-bottom:1px solid rgb(229,232,235);
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;


    .arrow{
    color:#999;
    }

    &:hover{
      .arrow{
        color:black;
      }
    }

    
  }

  .panal_body{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;

    max-height: 30vh;
    overflow-y: ${p=>p.scroll? 'scroll' : 'hidden'};
    padding: ${p=>p.scroll ? '20px 0 20px 20px' : '20px 20px 20px 20px'};
    background-color: rgb(251, 253, 255);
    border-bottom:1px solid rgb(229,232,235);
  }



`