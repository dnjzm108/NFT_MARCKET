import styled from "styled-components";

export const Liststyle = styled.div`

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

  .title > h3{
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

  .buylist{
    border-bottom: 1px solid ${p=>p.isSelect==1 ? 'black' : "none"};
  }
  .sellist{
    border-bottom: 1px solid ${p=>p.isSelect==2 ? 'black' : "none"};
  }
  .auclist{
    border-bottom: 1px solid ${p=>p.isSelect==3 ? 'black' : "none"};
  }
`
