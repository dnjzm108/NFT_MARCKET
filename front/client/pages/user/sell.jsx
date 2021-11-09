import Navigation from "../../component/Navigation"
import Info from "../../container/Info";
import SideMenu from "../../component/SideMenu";
import NFTList from "../../component/MyNFT/NFTList";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const sell = () => {
  return (
    <>
        <Navigation/> 
        <Info>
            <SideMenu/>
            <NFTList type="sell"/>
        </Info>
        </>
  );
}

export default sell;