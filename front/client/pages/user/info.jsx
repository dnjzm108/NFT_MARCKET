import Profile from "../../component/Profile";
import MyInfo from "../../component/MyInfo";
import Navigation from "../../component/Navigation";
import { useState } from "react";
import Info from "../../container/Info";
import SideMenu from "../../component/SideMenu";
import { useRouter } from "next/router";
import { useEffect } from "react";
import NFTList from "../../component/MyNFT/NFTList";
import FavoriteList from "../../component/MyNFT/FavoriteList";



const InfoPage = () => {
    const {type} = useRouter().query;
    
    useEffect(()=>{
    },[type])

    return (
        <>
        <Navigation/> 
        <Info>
            <SideMenu/>
            {type==='profile'&& <MyInfo/>}
            {type==='buy'&& <NFTList type={type}/>}
            {type==='auction'&& <NFTList type={type}/>}
            {type=='sell'&& <NFTList type={type}/>}
            {type=='favorite'&& <FavoriteList/>}
        </Info>
        </>
    );
}

export default InfoPage;
