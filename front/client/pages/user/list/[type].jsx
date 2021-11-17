import Navigation from "../../../component/Navigation";
import Info from "../../../container/Info";
import SideMenu from "../../../component/SideMenu";
import NFTList from "../../../component/MyNFT/NFTList";

import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'
import { Pageblock } from "../../../component/Pageblock";
import { statusList,sortList } from "../../../component/MyNFT/NFTList/list";
import { ListUpdateRequest } from "../../../reducers/mylist";


const list = () => {
  const dispatch = useDispatch();
  const {user_info} = useSelector(state => state.user)
  const router = useRouter()
  const {type} = router.query;
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    if(type!=undefined && loading){
      const data ={
        nickname:user_info.nickname,
        page:1,
        rows:10,
        status:'all',
        sort:'new',
        type:type
      }
      dispatch(ListUpdateRequest(data))
    }
  },[type])


  if(type==undefined){
    return <span>로딩중</span>
  }
  return (
    <>
    <Navigation/> 
    <Info>
        <SideMenu/>
        <div>
        <NFTList/>
        <Pageblock/>
        </div>
    </Info>
    </>
  );
}


export default list;