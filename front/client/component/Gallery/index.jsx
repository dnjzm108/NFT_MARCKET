import NFT from "../NFT";
import { StyledGallery } from "./Gallery.css";
import {useSelector} from 'react-redux'
const Gallery = () => {
  const {list} = useSelector((state)=>state.explore);

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