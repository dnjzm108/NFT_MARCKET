import { StyledSell } from './sell.css'
import { useState } from 'react'
import BuyNow from './BuyNow'
import Auction from './Auction'

const Sell = ()=>{
    const Selling = ["즉시 구매","경매"]
    const [now , setNow] = useState(true)
    
    const handleClick = e => {
        setNow(false)
    }

    return(
        <StyledSell>
            <div className="sell_section">
            {Selling}
            </div>
        </StyledSell>
    )
}

export default Sell