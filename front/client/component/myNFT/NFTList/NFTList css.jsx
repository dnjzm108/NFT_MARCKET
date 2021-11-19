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
    display: flex;
    flex-direction: row;
    top:28px;
    right:70px;
  }

  .search-box{
    width: 40%;
  height: 100%;
  padding: .625rem .75rem;


  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75;
  background-color: rgb(255, 255, 255);
  border-radius: 0.25rem;
  border:  1px solid rgb(229, 232, 235);
  cursor: text;
  }

  #search-input{
    width: 100%;
    height: 100%;
    margin-left: 3px;
    font-size: 24px;
    border: none;
    outline: none;
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
        width: 30%;
      }

      &>th:nth-child(2){
        width: 10%;
      }
      &>th:nth-child(3){
        width: 10%;

      }
      &>th:nth-child(4){
        width: 10%;

      }
      &>th:nth-child(5){
        width: 10%;

      }
      &>th:nth-child(6){
        width: 10%;
      }
      &>th:nth-child(7){
        width: 10%;
      }
      &>th:nth-child(8){
        width: 10%;
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
        width: 10%;

      }
      &>th:nth-child(5){
        width: 10%;
      }
      &>th:nth-child(6){
        width: 10%;
      }
      &>th:nth-child(7){
        width: 10%;
      }
    }
  }
`
export const AuctionSellTable = styled.table`
  width: 100%;
  padding: 28px;

  &>thead{
    width: 100%;
    height: 2vh;

    &>tr{
      width: 100%;

      &>th:nth-child(1){
        width: 30%;
      }

      &>th:nth-child(2){
        width: 30%;
      }
      &>th:nth-child(3){
        width: 10%;

      }
      &>th:nth-child(4){
        width: 10%;

      }
      &>th:nth-child(5){
        width: 10%;

      }
      &>th:nth-child(6){
        width: 10%;

      }
    }
  }
`

export const ImmySellTable = styled.table`
  width: 100%;
  padding: 28px;

  &>thead{
    width: 100%;
    height: 2vh;

    &>tr{
      width: 100%;

      &>th:nth-child(1){
        width: 30%;
      }

      &>th:nth-child(2){
        width: 10%;
      }

      &>th:nth-child(3){
        width: 10%;
      }

      &>th:nth-child(4){
        width: 10%;
      }

      &>th:nth-child(5){
        width: 10%;
      }
      &>th:nth-child(6){
        width: 10%;
      }
      &>th:nth-child(7){
        width: 10%;
      }
      &>th:nth-child(8){
        width: 10%;
      }
    }
  }
`




