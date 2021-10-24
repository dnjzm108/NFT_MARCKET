import styled from "styled-components";

export const StyledNavToggle = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }

  background: transparent;
  border-color: transparent;
  & > .nav-toggle {
    display: none;
  }
  & > .nav-toggle + label {
    display: block;
    width: 2.5rem;
    height: 2rem;
    position: relative;
    cursor: pointer;
  }
  & > .nav-toggle + label > span {
    display: block;
    position: absolute;
    width: 100%;
    height: 5px;
    border-radius: 30px;
    background: #000;
    transition: all 0.35s;
  }

  & > .nav-toggle + label > span:nth-child(1) {
    top: 0;
  }

  & > .nav-toggle + label > span:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
  }

  & > .nav-toggle + label > span:nth-child(3) {
    bottom: 0;
  }

  & > .nav-toggle:checked + label > span:nth-child(1) {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }

  & > .nav-toggle:checked + label > span:nth-child(2) {
    opacity: 0;
  }

  & > .nav-toggle:checked + label > span:nth-child(3) {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
  }
`;
