import Navigation from "../../../component/Navigation";
import Info from "../../../container/Info";
import SideMenu from "../../../component/SideMenu";
import NFTList from "../../../component/MyNFT/NFTList";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'
import { Pageblock } from "../../../component/Pageblock";




const list = () => {
  const state_data = useSelector(state => state.user)
  const router = useRouter()
  const { type } = router.query

  if(type==undefined){
    return <span>로딩중</span>
  }
  return (
    <>
    <Navigation/> 
    <Info>
        <SideMenu/>
        <div>
        {type=="buy" && <NFTList type={type} />}
        {type=="auction" && <NFTList type={type} />}
        {type=="immysell" && <NFTList type={type} />}
        {type=="auctionsell" && <NFTList type={type} />}
        <Pageblock/>
        </div>
    </Info>
    </>
  );
}

export default list;