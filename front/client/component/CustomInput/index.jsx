import { StyledInput ,InputWrap} from "./Input.css";
import {BiSearch} from 'react-icons/bi'
import { useState } from "react";
const CustomInput = ({onChange,placeholder,search,width,height,ftsize}) => {

  const [require,setRequire] = useState()
  const handleChange = (e) =>{
    onChange(e);

  }

  return (
    <InputWrap width={width} height={height}>
    <StyledInput fontSize={`${ftsize}`}>
      {search && 
      <label htmlFor="inpput">
        <i>
          <BiSearch size={ftsize} color={'#888'}/>
        </i>
        </label>
      }
      <input type="text" id="inpput"   onChange={(e)=>{handleChange(e)}} placeholder={placeholder}/>
      
    </StyledInput>
      </InputWrap>
  );
}

export default CustomInput;