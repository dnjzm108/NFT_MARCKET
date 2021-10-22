import { StyledFilter } from "./Filter.css";
import {RiFilter3Line, RiArrowLeftLine, RiArrowRightLine} from 'react-icons/Ri'
import Button from "../Button";
import Panal from "../FilterItem/Panal";
import { useState } from "react";

const Filter = () => {
  const [open,setOpen] = useState(false)

  const renderIcon=()=>{
   return (
     <>
      <RiFilter3Line size={24} />
     </>
   )   
  }

  const handleClick= () =>{
    alert('함수실행')
  }
  return (

    <StyledFilter>
      {open
        ?
        <div className='filter_open'>
        <div className='filter_header'  onClick={()=>{setOpen(false)}}>
        <div>
          <i><RiFilter3Line size={24} /></i>
          <span>필터</span>
        </div>
        <div >
          <i className='arrow'><RiArrowLeftLine size={24}/></i>
        </div>
      </div>
      <Panal value='안녕' >
        <Button value='버튼' url='/kkk'  size='small' />
        <Button value='버튼' func={handleClick} color='blue' size='small'/>
      </Panal>
      <Panal value='안녕'>
      </Panal>
      <Panal value='안녕' >
      </Panal>
      <Panal value='안녕'>
      </Panal>
      </div>
        :
        <div className="filter_close" >
          <div className='filter_header'  onClick={()=>{setOpen(true)}}>
           <div>
             <i className='arrow'><RiArrowRightLine size={24} /></i>
          </div>
        </div>
        </div>
      }

      
    </StyledFilter>
  );
}

export default Filter;