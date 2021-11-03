import { StyledSwap } from "./swap.css";
import { BiDownArrowAlt } from "react-icons/bi";
import Navigation from "../Navigation";
import useChangeValue from "../../hook/useChangeValue"
import { useEffect } from "react"



const SwapToken = () => {

    
   

    return (
        <>
        <Navigation/>
        <StyledSwap>
        <div>
            Perro Swap
        </div>
        <div className="Wbox">
            <div className="From">
                <img className="klay_icon" src="/klay.png" alt="" />
              <p className="klaytn">Klaytn</p>
            <input type="number" onkeyup="" min="1" className="klay" placeholder="0.0"/>
            </div>
            <BiDownArrowAlt className="icon"/>
            <div className="To">
                <img className="Perr_icon" src="/쉽독.jpg" alt="" />
                <p className="perro">Perro</p>
            <input type="number" min="1" className="perr" placeholder="0.0"/>
            </div>
            <div className="swap_btn" onClick={()=>confirm("정말 토큰을 구매하시겠습니까?")}>Click</div>
        </div>
        <div className="rate">1 KLAY = 1300 PERR</div>
        </StyledSwap>
        </>
    );
}

export default SwapToken;