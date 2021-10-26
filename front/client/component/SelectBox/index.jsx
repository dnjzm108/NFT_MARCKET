import { useState } from "react";
import { RiArrowDownSLine} from "react-icons/Ri"

import { StyledSelectBox,SelectHeader,SelectBody,SelectItem} from "./SelectBox css";






const SelectBox = ({list,value,onChangeValue,useImg}) => {

  const [open,setOpen] = useState(false);

  const handleClick = (i) =>{
    onChangeValue(i);
    setOpen(false);
  }

  const renderList = () =>{
    return list.map((v,i)=>{
      return <SelectItem onClick={()=>{handleClick(i)}} key={i}>
              <span>{v}</span>  
            </SelectItem>
    })
  }

  const renderListWithImage = () =>{
    return list.map((v,i)=>{
      return(
        <SelectItem onClick={()=>{handleClick(i)}} key={i}>
          <img src={v.img} alt="" />
          <span>{v.value}</span>
        </SelectItem>
      )
    })
  }

  return(
    <StyledSelectBox>
      <SelectHeader onClick={()=>setOpen(!open)}>
        <div>{list[value]}</div>
        <i><RiArrowDownSLine size={24}/></i>
      </SelectHeader>
      {open &&
      <SelectBody>
        {useImg ? renderListWithImage(): renderList()}
      </SelectBody>
      }

    </StyledSelectBox>
  )

  


}

export default SelectBox;