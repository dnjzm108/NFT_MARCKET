import styled from "styled-components";

export const NFTListContainer = styled.div`
width:calc(100vw - 360px);
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`

export const Header = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size:2vw;
  padding: 28px;
  /* border-bottom: 3px solid black; */
  &>h3{
    margin-right: 24px;
  }

  .absolute{
    position: absolute;
    top:28px;
    left:350px;
  }
`

export const BuyTable = styled.table`
  width: 100%;
  padding: 28px;

  &>thead{
    width: 100%;
    height: 2vh;

    &>tr{
      width: 100%;

      &>th:nth-child(1){
        width: 40%;
      }

      &>th:nth-child(2){
        width: 12%;
      }
      &>th:nth-child(3){
        width: 12%;

      }
      &>th:nth-child(4){
        width: 12%;

      }
      &>th:nth-child(5){
        width: 12%;

      }
      &>th:nth-child(6){
        width: 12%;

      }
    }
  }
`
export const AuctionTable = styled.table`
  width: 100%;
  padding: 28px;

  &>thead{
    width: 100%;
    height: 2vh;

    &>tr{
      width: 100%;

      &>th:nth-child(1){
        width: 40%;
      }

      &>th:nth-child(2){
        width: 15%;
      }
      &>th:nth-child(3){
        width: 15%;

      }
      &>th:nth-child(4){
        width: 15%;

      }
      &>th:nth-child(5){
        width: 15%;

      }
    }
  }
`


