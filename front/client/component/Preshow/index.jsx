import { StyledPreshow } from './Preshow.css'
import NTF from '../NFT/index'

const Preshow = ()=>{
    return(
        <StyledPreshow>
            <div className="preshow">
                <h3>미리보기</h3>
                <NTF />
            </div>
        </StyledPreshow>
    )
}

export default Preshow