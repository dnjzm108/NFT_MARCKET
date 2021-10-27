import { StyledSideMenu,StyledMenuItem } from "./SideMenu.css";
import {RiArrowLeftLine,RiArrowRightLine, RiMenu2Line} from 'react-icons/Ri'
import { useState } from "react";
import Link from 'next/link'


const MenuItem = ({url,value}) =>{
  return (
    <StyledMenuItem>
        <Link href={url}>
          <a>
            {value}
          </a>
        </Link>
    </StyledMenuItem>
  )
}




const SideMenu = () => {
  const [open,setOpen] = useState(true);

  return (
    <StyledSideMenu>
        {open
        ?
        <div className='menu_open'>
          <div className='menu_header'  onClick={()=>{setOpen(false)}}>
            <div>
              <i><RiMenu2Line size={24} /></i>
              <span>내 정보</span>
            </div>
            <div >
              <i className='arrow'><RiArrowLeftLine size={24}/></i>
            </div>
          </div>
          <MenuItem value='나의 프로필' url='/user/info?type=profile'/>
          <MenuItem value='판매 목록' url='/user/info?type=sell'/>
          <MenuItem value='구매 목록' url='/user/info?type=buy'/>
          <MenuItem value='경매 목록' url='/user/info?type=auction'/>
          <MenuItem value='관심 목록' url='/user/info?type=favorite'/>
      </div>

        :
        
        <div className="menu_close" >
          <div className='menu_header'  onClick={()=>{setOpen(true)}}>
           <div>
             <i className='arrow'><RiArrowRightLine size={24} /></i>
          </div>
        </div>
        </div>
      }
      
    </StyledSideMenu>
  );
}

export default SideMenu;