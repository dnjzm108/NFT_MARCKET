import { useState } from "react";
import { RiArrowDownSLine} from "react-icons/Ri"

import { StyledSelectBox,SelectHeader,SelectBody,SelectItem} from "./SelectBox css";






const SelectBox = ({list,value,onChangeValue,useImg,width}) => {

  const [open,setOpen] = useState(false);

  const box_width = () =>{
    if(width){
      return `${width}`
    }else{
      return `240px`
    }
  }

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
          <span>{v.name}</span>
        </SelectItem>
      )
    })
  }

  return(
    <StyledSelectBox width={box_width()}>
      <SelectHeader onClick={()=>setOpen(!open)}>
        {useImg 
        ?<div>
          <img src={list[value].img} alt="" />
          <span>{list[value].name}</span>
        </div>
        :<span>{list[value]}</span>
      }
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