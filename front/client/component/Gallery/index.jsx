import NFT from "../NFT";
import { StyledGallery } from "./Gallery.css";
import {useSelector} from 'react-redux'
const Gallery = () => {
  const {nft} = useSelector((state)=>state.explore);

  const renderNFTItem = ()=>{
    return nft.map((v,i)=>{
      return <NFT 
        nft_id={v.nft_id}
        title={v.title}
        creater = {v.creater}
        like = {v.like}
        image = {v.nft_image}
      />
    })
  }

  return (
    <StyledGallery>
      {renderNFTItem(nft)}
    </StyledGallery>
  );
};

export default Gallery;
