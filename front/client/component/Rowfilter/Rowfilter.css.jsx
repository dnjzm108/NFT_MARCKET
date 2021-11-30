import styled from "styled-components";

export const StyledRowFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 40px;



  .add-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;


  }

  .search-box{
    width: 60%;
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

  .sort_relative{
    position:relative;
    width: 240px;
    height: 50px;

  }

  .sort_absolute{
    position:absolute;
    top:-6px;
    z-index: 4;
  }



`