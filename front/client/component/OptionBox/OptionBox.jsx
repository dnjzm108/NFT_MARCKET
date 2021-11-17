import { useState } from "react";
import { RiArrowDownSLine} from "react-icons/ri"

import { StyledSelectBox,SelectHeader,SelectBody,SelectItem} from "./OptionBox.css";






const OptionBox = ({list,onClick,now,width}) => {
  const [open,setOpen] = useState(false);


  const box_width = () =>{
    if(width){
      return `${width}`
    }else{
      return `240px`
    }
  }



  const handleClick = (code) =>{
    onClick(code);
    setOpen(false);
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
        {<span>{list.filter(v=>v.code==now)[0].name}</span>
      }

        
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

export default OptionBox;