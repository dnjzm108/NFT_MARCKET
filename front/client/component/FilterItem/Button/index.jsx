import { StyledButton } from "./Button.css";
import { useState } from "react";
const Button = ({value,handleClick,hoverCSS,}) => {
  const [isClicked,setIsClicked] = useState(false);
  

  return (
    <StyledButton onClick={()=>{setIsClicked(!isClicked)}} isClicked={isClicked}>
      {value}
    </StyledButton>
  );
}

export default Button;