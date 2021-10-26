import { StyledSell } from './sell.css'
import { useState } from 'react'
import BuyNow from './BuyNow'
import Auction from './Auction'
import Button from '../Button/index'


const Sell = ()=>{
    const [isNow,setIsNow] = useState(true);

    // 즉시구매를 선택한 경우
    const handleNow =()=>{
        setIsNow(true);
    }

    // 경매를 선택한 경우
    const handleAuc = ()=>{
        setIsNow(false);
    }
    


    return (
        <StyledSell isNow={isNow}>
            <div className="sell_section">
                <h3>판매 방식을 선택해주세요</h3>
                <div className="select_btn">
                    <h1 onClick={() => handleNow()} className="select_buynow"> 즉시구매 </h1>
                    <h1 onClick={() => handleAuc()} className="select_auc"> 경매 </h1>
                </div>
                <div className="flex_contain">
                    <div className="select_sell">
                        {
                            isNow ? <BuyNow /> : <Auction />
                        }
                    </div>
                    <div className="release_btn">
                        {/* <button className="cancel">취소</button>
                    <button className="go">NFT 발행하기</button> */}
                        <Button value="취소 하기" color="white" className="cancel" />
                        <Button value="NFT 발행하기" color="blue" className="go" ml="50" />
                    </div>
                </div>
            </div>
        </StyledSell>
    )
}

export default Sell