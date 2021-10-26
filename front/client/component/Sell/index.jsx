import { StyledSell } from './sell.css'
import { useState } from 'react'
import BuyNow from './BuyNow'
import Auction from './Auction'
import Button from '../Button/index'


const Sell = ()=>{
    const [isNow,setIsNow] = useState(true);

    const handleNow =()=>{
        setIsNow(true);
    }
    const handleAuc = ()=>{
        setIsNow(false);
    }


    return (
        <StyledSell isNow={isNow} >
            <div className="sell_section">
                <div className="select_sell">
                    <div>
                    <button onClick={()=>handleNow()} className="buynow_btn"> 즉시구매 </button>
                    <button onClick={()=>handleAuc()} className="auction_btn"> 경매 </button>
                    </div>
                {
                    isNow ? <BuyNow/> : <Auction/>
                }
                </div>
            </div>
        </StyledSell>
    )
}

export default Sell