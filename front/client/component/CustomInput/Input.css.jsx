import styled from "styled-components";

export const InputWrap = styled.div`
  width:${p=>p.width};
  height: ${p=>p.height};
`


export const StyledInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: text;
  width: 100%;
  height: 100%;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    border: 1px solid rgb(229, 232, 235);
    width: 100%;
    padding: 12px;

  &>input{
    width: 100%;
    height: 100%;
    font-size: 16px;
    border: none;
    outline: none;
  }

  &>input::placeholder {
  color:#888;
}

`