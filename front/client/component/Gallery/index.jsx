import NFT from "../NFT";
import { StyledGallery } from "./Gallery.css";
import {useSelector,useDispatch} from 'react-redux'
import {UpdateLike} from "../../reducers/explore"
import Router from "next/router";

const Gallery = () => {
  const dispatch = useDispatch()
  const {list} = useSelector((state)=>state.explore);
  const {user_info,IsLogin} = useSelector(state=>state.user)
  
  const handleClick = (event,product_no,isLike) => {
    if (
      event.target.className == "like_btn" ||
      event.target.parentNode.className == "like_btn" ||
      event.target.parentNode.parentNode.className == "like_btn"
    ) {
        const nickname = user_info.nickname;
        if(nickname==null || nickname==undefined)return;
        const data = {
          product_no,
          nickname,
          isLike,
          auth:user_info.auth
        }
        dispatch(UpdateLike(data))
    } else {
      Router.push(`/nft/${product_no}`)
    }
  };


  const renderNFTItem = ()=>{
    if(list.length==0){
      return (
        <div>조건을 만족하는 검색 결과가 없습니다.</div>
      )
    }

    return list.map((v,i)=>{
      return <NFT 
        key={v.product_no}
        type={v.type}
        product_no={v.product_no}
        name={v.name}
        price={v.price}
        creater = {v.creater}
        likes = {v.likes}
        img = {v.img}
        isLike = {v.isLike}
        handleClick={handleClick}
      />
    })
  }

  return (
    <StyledGallery>
      {renderNFTItem()}
    </StyledGallery>
  );
};

export default Gallery;