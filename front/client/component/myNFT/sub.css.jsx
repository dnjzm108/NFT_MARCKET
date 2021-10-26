import styled from "styled-components";

export const Liststyle = styled.div`
    &{
        background-color: #f9fbfd;
        border: 1px solid #eeeff0;
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
    display: flex;
    flex-direction: row;
    padding: 20px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    color: black;
  }

  .title > h1{
      padding: 20px;
    & :hover{
        color: grey;
    }
  }

  
  
  .content{
    border: 1px dotted grey;
    width: 900px;
    height: 400px;
    border-radius: 8px;
  }

  .sellist{
    border-bottom: 1px solid ${p=>p.isSelect ? 'black' : "none"};
  }
  .buylist{
    border-bottom: 1px solid ${p=>!p.isSelect ? 'black' : "none"};
  }
  /* .auclist{
    border-bottom: 1px solid ${p=>p.isSelect ? 'black' : "none"};
  } */
`

