import Selectbox from "../SelectBox/index"
import useChangeValue from "../../hook/useChangeValue"
import { useEffect } from "react"

const Auction = () =>{
    const termList = ["1일","7일","30일","3개월"]
    const termCategory = useChangeValue(termList)

    useEffect(()=>{
        console.log(termCategory.termList)
    })

    return(
        <>  
        <div className="auction">
            <h3>경매가로</h3>
            <h2>판매할 가격을 입력하세요</h2>
            <input type="text" />원
        </div>
        <div className="select_terms">
            <p>경매 기간을 선택해주세요</p>
            <Selectbox {...termCategory}/>
        </div>
        <div className="extension_box">
            <input type="checkbox" name="extension"/>
            <p>새로운 입찰이 생길시 경매 시간을 5분 연장 할 수 있습니다.<br/> <br/>
            하시겠습니까?</p>
        </div>
        </>
    )
}

export default Auction