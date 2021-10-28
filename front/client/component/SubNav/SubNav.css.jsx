import styled from "styled-components";

export const Liststyle = styled.div`

    .Container{
    height: 100vh;
    width: 80vw;
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

  .btn{
    display: flex;
  }
  
  
  .content{
    border: 1px dotted grey;
    width: 1380px;
    height: 700px;
    border-radius: 8px;
  }

<<<<<<< HEAD:front/client/component/myNFT/sub.css.jsx
  .ProMenu{
    border-bottom: 1px solid ${p=>p.isSelect ? 'black' : "none"};
  }

  .sellist{
    border-bottom: 1px solid ${p=>!p.isSelect ? 'black' : "none"};
  }
  /* .buylist{
    border-bottom: 1px solid ${p=>!p.isSelect ? 'black' : "none"};
  } */
  /* .auclist{
    border-bottom: 1px solid ${p=>p.isSelect ? 'black' : "none"};
  } */
=======
  .buylist{
    border-bottom: 1px solid ${p=>p.isSelect==1 ? 'black' : "none"};
  }
  .sellist{
    border-bottom: 1px solid ${p=>p.isSelect==2 ? 'black' : "none"};
  }
  .auclist{
    border-bottom: 1px solid ${p=>p.isSelect==3 ? 'black' : "none"};
  }
>>>>>>> 83b7f2c84514beb88ddb607a4ad6afb0828cc0ac:front/client/component/SubNav/SubNav.css.jsx
`

