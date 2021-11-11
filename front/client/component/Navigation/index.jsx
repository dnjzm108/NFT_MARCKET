import Link from "next/link";
import {
  NavigationWrap,
  NavigationContainer,
  Logo,
  NavItem,
  NavItemContainer,
} from "./Navigation.css";
import NavToggle from "../NavToggle";
import Button from "../Button";
import { useState } from "react";
import useInput from "../../hooks/useInput";
import { BiLogOut, BiUserCircle } from "react-icons/bi";
import Router from 'next/router'
import Input from '../Input'
import { useDispatch, useSelector } from "react-redux";
import { ExploreRequest } from '../../reducers/explore';
import { User_Logout } from '../../reducers/user'

// import cn from "classnames";

const Navigation = () => {
  //임사상태
  const dispatch = useDispatch();
  const { IsLogin, user_info } = useSelector(state => state.user);
  const [nowItem, setNowItem] = useState(null);
  const [search, setSearch] = useState()
  const { filter } = useSelector(state => state.filter);
  const { skip } = useSelector(state => state.explore)
  const test = useSelector(state => state.user);
  const handleSearch = (e) => {
    const temp = e.target.value;
    setSearch(temp)
    // dispatch(RelatedSearch(temp))
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...filter,
      search,
    }
    dispatch(ExploreRequest(data));
  }

  const logOut = () => {
    dispatch(User_Logout())
  }

  return (
    <NavigationWrap>
      <NavigationContainer>
        <Logo>
          <Link href="/">
            <a><img src="/logo.png" alt="" /></a>
          </Link>
        </Logo>
        <NavItemContainer>

//           <form onSubmit={(e) => handleSubmit(e)}>
//             <input type="text" onChange={(e) => handleSearch(e)} />
//           </form>


          <NavItem
            onClick={() => setNowItem(1)}
            isClicked={nowItem == 1 ? true : false}
          >
            <Link href="/">
              <a>탐색하기</a>
            </Link>
          </NavItem>
          <NavItem
            onClick={() => setNowItem(2)}
            isClicked={nowItem == 2 ? true : false}
          >
            <Link href="/mint">
              <a>발행하기</a>
            </Link>
          </NavItem>
          <NavItem
            onClick={() => setNowItem(3)}
            isClicked={nowItem == 3 ? true : false}
          >
            <Link href="/swap">
              <a>토큰 교환</a>
            </Link>
          </NavItem>
          {user_info.nickname !== undefined ? (
            <>
              <NavItem>
                <Link href='/user/profile'><a><i><BiUserCircle size={32} /></i></a></Link>
              </NavItem>
              <Button value="로그아웃" color="blue" func={() => { logOut() }} size="small" />
            </>
          ) : (
            <Button value="로그인" color="blue" url='/user/login' size="small" />
          )}
        </NavItemContainer>
        <NavToggle />
      </NavigationContainer>
    </NavigationWrap>
  );
};

export default Navigation;
