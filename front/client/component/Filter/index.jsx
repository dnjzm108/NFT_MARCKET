import { StyledFilter } from "./Filter.css";
import {RiFilter3Line, RiArrowLeftLine, RiArrowRightLine} from 'react-icons/Ri'
import Button from "../FilterItem/Button";
import Panal from "../FilterItem/Panal";
import { useState } from "react";

const Filter = () => {
  const [hover,setHover]=useState(false)
  const [open,setOpen] = useState(false)

  const renderIcon=()=>{
   return (
     <>
      <RiFilter3Line size={24} />
     </>
   )   
  }

  const handleClick=()=>{
    console.log('Button Click')
  }

  return (

    <StyledFilter>
      {open
        ?
        <div className='filter_open'>
        <div className='filter_header' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>{setHover(false)}}>
        <div>
          <i><RiFilter3Line size={24} /></i>
          <span>필터</span>
        </div>
        <div>
          <i  onClick={()=>{setOpen(false)}}><RiArrowLeftLine size={24} color={hover?'black':'#999'}/></i>
        </div>
      </div>
      <Panal value='안녕' >
        <Button value='버튼' url='/kkk' size='big'/>
      </Panal>
      <Panal value='안녕'>
        <Button value='아이콘 적용' icon={renderIcon}/>
      </Panal>
      <Panal value='안녕' >
        <Button value='버튼' func={handleClick}/>
      </Panal>
      <Panal value='안녕'>
        <Button value='button' color="blue"/>
      </Panal>
      </div>
        :
        <div className="filter_close">
          <div className='filter_header' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>{setHover(false)}}>
           <div>
             <i onClick={()=>{setOpen(true)}}><RiArrowRightLine size={24} color={hover?'black':'#999'}/></i>
          </div>
        </div>
        </div>
      }

      
    </StyledFilter>
  );
}

export default Filter;