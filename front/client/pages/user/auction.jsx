import Info from "../../container/Info";
import Navigation from "../../component/Navigation"
import SideMenu from "../../component/SideMenu";
import NFTList from "../../component/MyNFT/NFTList";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const auction = () => {
  return (
    <>
        <Navigation/> 
        <Info>
            <SideMenu/>
            <NFTList type="auction"/>
        </Info>
        </>
  );
}

export default auction;