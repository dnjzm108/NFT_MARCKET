import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${props =>props.isClicked ? 'blue' : 'white' };
`