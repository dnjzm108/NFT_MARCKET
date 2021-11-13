import Profile from "../../component/Profile";
import Navigation from "../../component/Navigation"
import Info from "../../container/Info";
import SideMenu from "../../component/SideMenu";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const profil = () => {
  return (
    <>
        <Navigation/> 
        <Info>
            <SideMenu/>
            <Profile/>
        </Info>
        </>
  );
}

export default profil;