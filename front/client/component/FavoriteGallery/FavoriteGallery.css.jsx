import styled from 'styled-components'

export const StyledFavoriteGalley = styled.div`
 width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 28px;
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
    z-index: 2;
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