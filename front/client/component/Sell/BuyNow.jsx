import CustomInput from "../CustomInput/index"
import useInput from "../../hook/useInput";

const BuyNow = () => {
    const price = useInput();
    return (
        <>
            {/* <div className="buynow">
                <h3>일반 판매가로</h3>
                <h2>판매할 가격을 입력하세요</h2>
                <div className="buynow_input">
                    <CustomInput
                        {...price}
                        placeholder='즉시 구매가'
                        width="400px"
                        msg="가격을 입력해주세요"
                        type="number"
                        />
                    <p>원</p>
                </div>
            </div> */}
            <h3>하위 항목을 작성해주세요</h3>
        </>
    )
}

export default BuyNow