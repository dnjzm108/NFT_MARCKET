import { StyledPreshow } from './Preshow.css'
import NTF from '../NFT/index'
import { IconName } from "react-icons/ai";

const Preshow = ()=>{
    return(
        <StyledPreshow>
            <div className="preshow">
                <h3>미리보기</h3>
                AiFillCaretLeft<NTF />
            </div>
        </StyledPreshow>
    )
}

export default Preshow