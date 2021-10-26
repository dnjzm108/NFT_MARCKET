import { StyledPanal } from "./Panal.css";
import { useState } from "react";

import {RiArrowUpSLine, RiArrowDownSLine} from "react-icons/Ri"

const Panal = ({children, value,scroll}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [hover,setHover] = useState(false);
  
  const Scroll = () =>{
    switch(scroll){
      case true:
        return true;
      default:
        return false
    }
  }

  return (
    <StyledPanal scroll={Scroll()}>
      <div className='panal_header' 
        onClick={()=>setIsOpen(!isOpen)} 
        >
        <span>
          {value}
        </span>
        <span>
          {
            isOpen 
            ? <i className='arrow'><RiArrowDownSLine size={24}  /></i>
            : <i className='arrow'><RiArrowUpSLine size={24}  /></i>
          }
        </span>
      </div>
      {
        isOpen && 
        <div className='panal_body'>
          {children}
        </div>
      }
    </StyledPanal>
  );
}

export default Panal;