import styled from 'styled-components'

export const StyledFavoriteList = styled.div`
width:calc(100vw - 360px);
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`

export const Header = styled.div`
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

`