import { StyledButton,StyledAnchor } from "./Button.css";
import { useState } from "react";
import Link from 'next/link'
const Button = (props) => {
  const {color,url,func,icon,value} = props

  const bgColor=()=>{
    switch(color){
      case 'white':
        return '#fff';
      case 'blue':
        return '#2081e2'
      default:
        return '#fff';
    }
  }

  const ftColor = () =>{
    switch(color){
      case 'white':
        return '#000';
      case 'blue':
        return '#fff'
      default:
        return '#000'
    }
  }

  if(url==undefined){
    return (
      <StyledButton onClick={()=>func()} bgColor={bgColor()} ftColor={ftColor()}>
        {icon && icon()}
        {value}
      </StyledButton>
    );
  }else{
    return(
      <Link href={url}>
        <StyledAnchor backgroundColor={bgColor()} ftColor={ftColor()}>
        {icon && icon()}
          {value}
        </StyledAnchor>
      </Link>
    )
  }




  
}

export default Button;