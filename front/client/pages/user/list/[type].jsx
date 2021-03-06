import Navigation from "../../../component/Navigation";
import Info from "../../../container/Info";
import SideMenu from "../../../component/SideMenu";
import NFTList from "../../../component/myNFT/NFTList";
import FavoriteGallery from "../../../component/FavoriteGallery";
import { useSelector,useDispatch } from "react-redux";
import { useRouter } from 'next/router'
import { Pageblock } from "../../../component/Pageblock";
// import { statusList,sortList } from "../../../component/myNFT/NFTList/list";
import { ListUpdateRequest } from "../../../reducers/mylist";
// import { ExploreRequest } from "../../../reducers/explore";
import {
  // useState,
  useEffect} from 'react'
// import Rowfilter from '../../../component/Rowfilter'

const List = () => {
  const {user_info} = useSelector(state => state.user)
  const {isError,error} = useSelector(state => state.mylist)
  const dispatch = useDispatch()
  const router = useRouter()
  const {type} = router.query;
  useEffect(()=>{
    if(type!=undefined && type!=null){
 
        let data ={
          auth:user_info.auth,
          nickname:user_info.nickname,
          params:{
            nickname:user_info.nickname,
            page:1,
            rows:10,
            status:'all',
            sort:'new',
            type:type,
          }
        }
        dispatch(ListUpdateRequest(data))
    }
  },[type])

  if(isError){
    return(
      <>
        <div> {error.code} |{error.message} </div>
      </>
    )
  }


  switch (type) {
    case undefined:
      return <span>로딩중</span>
    case 'favorite':
      return (
        <>
        <Navigation/> 
        <Info>
            <SideMenu/>
            <div className='contenet_box'>
           
            <FavoriteGallery/>
            </div>
        </Info>
        </>
      )
    default:
      return (
        <>
        <Navigation/> 
        <Info>
            <SideMenu/>
            <div className='contenet_box'>
            <NFTList/>
            <Pageblock/>
            </div>
        </Info>
        </>
      );
  }
}

export default List;
