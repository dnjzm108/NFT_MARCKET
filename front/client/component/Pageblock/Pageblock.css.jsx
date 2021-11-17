import styled from "styled-components";

export const StyledPageBlock = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  &>button{
    padding: 0.25rem 0.75rem;
    border: 0;
    margin-left: 0;
    background-color: rgba(50,50,124,0.08);
    color: #263747;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none
  }

  &>button:hover{
    background-color: rgba(50,50,124,0.16);
    color: #263747;
  }

  .now{
    background-color: #0078ff;
    color:#fff;
  }

  .now:hover{
    background-color: #0078ff;
    color:#fff;
  }

`