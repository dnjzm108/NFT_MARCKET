import styled from "styled-components";

export const InputWrap = styled.div`
  width:${p=>p.width};
  height: ${p=>p.height};

  .required_msg{
    padding: 2px 12px;
    color:#dc3545;
    font-size: 12px;
  }
`


export const StyledInput = styled.div`
  width: 100%;
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
  border: ${p=>p.require==true? '1px solid #dc3545' : '1px solid rgb(229, 232, 235)'};
  cursor: text;

  &>input{
    width: 100%;
    height: 100%;
    font-size: 16px;
    border: none;
    outline: none;
  }
  & > input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

  &>input::placeholder {
  color:#888;
}

`