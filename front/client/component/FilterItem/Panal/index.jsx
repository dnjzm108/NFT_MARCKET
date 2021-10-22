import { StyledPanal } from "./Panal.css";
import { useState } from "react";

import {RiArrowUpSLine, RiArrowDownSLine} from "react-icons/Ri"

const Panal = ({children, value}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [hover,setHover] = useState(false);

  return (
    <StyledPanal>
      <div className='panal_header' 
        onClick={()=>setIsOpen(!isOpen)} 
        onMouseEnter={()=>{setHover(true)}}
        onMouseLeave={()=>{setHover(false)}}
        >
        <span>
          {value}
        </span>
        <span>
          {
            isOpen 
            ? <i><RiArrowDownSLine size={24}  color={hover?'black':'#999'}/></i>
            : <i><RiArrowUpSLine size={24}  color={hover?'black':'#999'}/></i>
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