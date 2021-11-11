import { useEffect } from "react";
import { useState } from "react";
import { RiArrowDownSLine} from "react-icons/Ri"

import { StyledSelectBox,SelectHeader,SelectBody,SelectItem} from "./SelectBox css";






const SelectBox = ({list,onChangeValue,width,now}) => {

  const [open,setOpen] = useState(false);
  const [tempNow,setTempNow] = useState(null)

  const box_width = () =>{
    if(width){
      return `${width}`
    }else{
      return `240px`
    }
  }



  const handleClick = (code) =>{
    onChangeValue(code);
    setTempNow(code);
    setOpen(false);
  }

  const renderNow = ()=>{
    if(now==undefined && tempNow==null){
      setTempNow(list[0].code)
      return list[0].name;
    }else if(now==undefined && tempNow!=null){
      return list.filter(v=>v.code==tempNow).map(x=>x.name)[0];
    }
    else{
      return list.filter(v=>v.code==now).map(x=>x.name)[0];
    }
  }


  const renderList = () =>{
    return list.map((v,i)=>{
      return <SelectItem onClick={()=>{handleClick(v.code)}} key={i}>
              <span>{v.name}</span>
            </SelectItem>
    })
  }
  

  return(
    <StyledSelectBox width={box_width()}>
      <SelectHeader onClick={()=>setOpen(!open)}>
        <span>{renderNow()}</span>
        <i><RiArrowDownSLine size={24}/></i>
      </SelectHeader>
      {open &&
      <SelectBody>
         {renderList()}
      </SelectBody>
      }

    </StyledSelectBox>
  )

  


}

export default SelectBox;