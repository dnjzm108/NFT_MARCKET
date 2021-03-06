import { StyledSell } from './sell.css'
import { useState } from 'react'
import BuyNow from './BuyNow'
import Auction from './Auction'
import Button from '../Button/index'


const Sell = 
({handleNow,handleAuc,isNow,bid,extension,setExtension,startDate,setStartDate,isPossibleDay})=>{
    return (
        <StyledSell isNow={isNow}>
            <div className="sell_section">
                <h3>판매 방식을 선택해주세요</h3>
                <div className="select_btn">
                    <h1 onClick={(e) => handleNow(e)} className="select_buynow"> 일반 판매 </h1>
                    <h1 onClick={(e) => handleAuc(e)} className="select_auc"> 경매 </h1>
                </div>
                <div className="select_sell">
                    {
                        isNow ? <BuyNow /> : <Auction 
                        bid={bid.value} 
                        setBid={bid.onChange}
                        extension={extension}
                        setExtension={setExtension}
                        startDate={startDate}
                        setStartDate={setStartDate}
                        isPossibleDay={isPossibleDay}
                        />
                    }
                </div>
            </div>
        </StyledSell>
    )
}

export default Sell