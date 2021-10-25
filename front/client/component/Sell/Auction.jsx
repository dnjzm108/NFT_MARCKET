const Auction = () =>{
    return(
        <>  
        <div className="auction">
            <h3>경매가로</h3>
            <h2>판매할 가격을 입력하세요</h2>
            <input type="text" />원
            <div className="release_btn">
                <button className="cancel">취소</button>
                <button className="go">NFT 발행하기</button>
            </div>
        </div>
        <div>
            경매 기간을 선택해주세요
        </div>
        </>
    )
}

export default Auction