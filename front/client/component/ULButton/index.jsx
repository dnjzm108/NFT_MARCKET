import { useState } from "react";
import { RiArrowDownSLine} from "react-icons/Ri"

import { StyledULButton ,UlList } from "./ULButton css";

const list = ["하나","둘","셋"]




const ULButton = ({icon,value,list}) => {
  const [now,setNow] = useState(null)
  const [open,setOpen] = useState(false);

  const renderUl = () =>{
    
  }

  return (
    <>
    <StyledULButton onClick={()=>setOpen(true)}>
      {now == null 
      ?(
        <div>
        {icon && <i>{icon()}</i>}
        <div>{value}</div>
      </div>
      )
      :(<></>

      )
      }
    <i><RiArrowDownSLine size={24}/></i>
    </StyledULButton>
    {open &&
      <Ul>
        <div>
          {icon && <i>{icon()}</i>}
          <div>{value}</div>
        </div>
        {renderUl()}
      </Ul>
    }
    </>
  );
}

export default ULButton;