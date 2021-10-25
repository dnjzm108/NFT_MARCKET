import { StyledSell } from './sell.css'
import { useState } from 'react'
import BuyNow from './BuyNow'
import Auction from './Auction'
import Button from '../Button/index'

const Sell = ()=>{
    const Selling = ["즉시 구매","경매"]
    const [isNow,setIsNow] = useState(true);
    const [isAuc,setIsAuc] = useState(true);

    const handleNow =()=>{
        setIsNow(true);
        setIsAuc(false);
    }
    const handleAuc = ()=>{
        setIsNow(false);
        setIsAuc(true);
    }

    return (
        <StyledSell>
            <div className="sell_section">
                <div 
                className="select_sell">
                    <button onClick={()=>handleNow()} className="buynow_btn"> 즉시구매 </button>
                    <button onClick={()=>handleAuc()} className="auction_btn"> 경매 </button>
                </div>
                {
                    isNow ? <BuyNow/> : <Auction/>
                }
            </div>
        </StyledSell>
    )
}

export default Sell