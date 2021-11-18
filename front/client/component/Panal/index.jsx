import { StyledPanal } from "./Panal.css";
import { useState } from "react";

import {RiArrowUpSLine, RiArrowDownSLine} from "react-icons/ri"

const Panal = ({children, value}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [hover,setHover] = useState(false);


  return (
    <StyledPanal >
      <div className='panal_header' 
        onClick={()=>setIsOpen(!isOpen)} 
        >
        <span>
          {value}
        </span>
        <span>
          {
            isOpen 
            ? <i className='arrow'><RiArrowUpSLine size={24}  /></i>
            : <i className='arrow'><RiArrowDownSLine size={24}  /></i>
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