import styled from "styled-components";

export const Liststyle = styled.div`
    &{
        background-color: #f9fbfd
    }
    .Container{
    height: 100vh;
    width: 70vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: auto;
  }

  .title{
    height: 80px;
  }

  .sellist{
    padding: 20px;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    color: grey;
    &:hover{
      color:black;
      text-decoration: underline;
    }
  }

  .buylist{
    padding: 20px;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    color: grey;
    &:hover{
      color:black;
      text-decoration: underline;
    }
  }
  
  .auclist{
    padding: 20px;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    color: grey;
    &:hover{
      color:black;
      text-decoration: underline;
    }
  }
  
  .content{
    border: 1px dotted grey;
    width: 900px;
    height: 400px;
    border-radius: 8px;
  }
`

