import Button from '../Button/index'


const BuyNow = () => {
    const releaseClick = ()=>{
        alert("발행 성공")
        return;
    }
    return (
        <div className="buynow">
            <h3>즉시 구매가로</h3>
            <h2>판매할 가격을 입력하세요</h2>
            <input type="text" />원
            <div className="release_btn">
                <button className="cancel">취소</button>
                <button className="go">NFT 발행하기</button>
                {/* <Button value="취소" color="white" className="cancel" mb={100}/>
                <Button value="NFT 발행하기" color="blue" className="go" mb={100}/> */}
                
            </div>
        </div>
    )
}

export default BuyNow