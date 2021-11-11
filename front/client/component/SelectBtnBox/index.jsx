import {StyledSelectBtnBoxItemBlue,StyledSelectBtnBoxItemWhite,StyledSelectBtnBox,SelectHeader,SelectBody} from './SelectBtnBox.css'
import { useState } from 'react'
import { RiArrowDownSLine} from "react-icons/Ri"



const SelectBtnBoxItem = ({name,onClick,now,code}) =>{
  return(
    <>
     {now===code 
      ? (
        <StyledSelectBtnBoxItemBlue onClick={()=>{onClick(null)}} >
        {name}
        </StyledSelectBtnBoxItemBlue> 
        )
        :(
          <StyledSelectBtnBoxItemWhite onClick={()=>{onClick(code)}}>
          {name}
        </StyledSelectBtnBoxItemWhite> 
      )}
    </>
    )
  }






const SelectBtnBox = ({title,list,onClick,now}) => {

  const [open,setOpen] = useState(false);
 

  const renderItem = () => { 
    return list.map((v,i)=>{
      return <SelectBtnBoxItem  name={v.name} key={v+i} onClick={onClick} now={now} code={v.code}/>
    })
  }  


  return (
    <StyledSelectBtnBox >
      <SelectHeader onClick={()=>setOpen(!open)}>
        <span>{title}</span>
        <i><RiArrowDownSLine size={18}/></i>
      </SelectHeader>
      {open &&
      <SelectBody>
        {renderItem()}
      </SelectBody>
      }
    </StyledSelectBtnBox>
  );
}

export default SelectBtnBox;