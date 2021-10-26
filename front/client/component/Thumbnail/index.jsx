import { StyledThumbnail } from './Thumbnail.css'
import NTF from '../NFT/index'
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";


const Thumbnail = ()=>{
    return(
        <StyledThumbnail>
            <div className="thumbnail">
                <h3>대표 사진을 선택해주세요</h3>
                <div className="flex_contain">
                    <FiChevronLeft size="30"/>
                    <NTF />
                    <FiChevronRight size="30"/>
                </div>
            </div>
            <div>
                *****
            </div>
        </StyledThumbnail>
    )
}

export default Thumbnail