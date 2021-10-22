import { StyledButton,StyledAnchor } from "./Button.css";
import { useState } from "react";
import Link from 'next/link'
const Button = ({icon,value,color,url,func,size}) => {
  
  if(url==undefined){
    return (
      <StyledButton onClick={()=>{func}} color={color}>
        {icon && icon()}
        {value}
      </StyledButton>
    );
  }else{
    return(
      <Link href={url}>
        <StyledAnchor>
        {icon && icon()}
          {value}
        </StyledAnchor>
      </Link>
    )
  }




  
}

export default Button;