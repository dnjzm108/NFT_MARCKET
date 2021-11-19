import { StyledSideMenu,StyledMenuItem } from "./SideMenu.css";
import {RiArrowLeftLine,RiArrowRightLine, RiMenu2Line} from 'react-icons/ri'
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

  return (
    <StyledSideMenu>

        <div className='menu_open'>
          <div className='menu_header'>
              <i><RiMenu2Line size={24} /></i>
              <span>내 정보</span>
          </div>
          <MenuItem value='나의 프로필' url='/user/profile'/>
          <MenuItem value='판매(즉시판매) 내역' url='/user/list/immysell'/>
          <MenuItem value='판매(경매) 내역' url='/user/list/auctionsell'/>
          <MenuItem value='구매 내역' url='/user/list/buy'/>
          <MenuItem value='경매 내역' url='/user/list/auction'/>
          <MenuItem value='관심 상품' url='/user/list/favorite'/>
      </div>

       
      
    </StyledSideMenu>
  );
}

export default SideMenu;