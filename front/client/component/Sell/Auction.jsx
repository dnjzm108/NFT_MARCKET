import Selectbox from "../SelectBox/index"
import useChangeValue from "../../hook/useChangeValue"
import { useEffect } from "react"
import useInput from "../../hook/useInput"
import CustomInput from "../Input/index"

const Auction = () =>{
    const termList = ["1일","7일","30일","3개월"]
    const termCategory = useChangeValue(termList)
    const price = useInput();


    return(
        <>
        <div className="auction">
            <h3>경매가로</h3>
            <h2>판매할 가격을 입력하세요</h2>
            <div className="auction_input">
                <CustomInput
                    {...price}
                    placeholder='경매가'
                    width="400px"
                    msg="가격을 입력해주세요"
                    type="number"
                />
                <p>원</p>
            </div>
        </div>
        <div className="select_terms">
            <p>경매 기간을 선택해주세요</p>
            <Selectbox {...termCategory} />
        </div>
        <div className="extension_box">
            <input type="checkbox" name="extension" />
            <p>새로운 입찰 발생시 경매 시간 5분 연장</p>
        </div>
        </>
    )
}

export default Auction