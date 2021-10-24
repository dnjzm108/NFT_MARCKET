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
import { BiUserCircle } from "react-icons/bi";

const Navigation = () => {
  //임사상태
  const [isLogin, setIsLogin] = useState(false);
  const [nowItem, setNowItem] = useState(null);

  return (
    <NavigationWrap>
      <NavigationContainer>
        <Logo>
          <Link href="/">
            <a>NFT</a>
          </Link>
        </Logo>
        <NavItemContainer>
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
            <Link href="/">
              <a>발행하기</a>
            </Link>
          </NavItem>
          {isLogin ? (
            <i>
              <BiUserCircle size={32} onClick={()=>setIsLogin(false)}/>
            </i>
          ) : (
            <Button value="로그인" color="blue" func={()=>setIsLogin(true)} size="small" />
          )}
        </NavItemContainer>
        <NavToggle />
      </NavigationContainer>
    </NavigationWrap>
  );
};

export default Navigation;
