import CustomInput from "../Input/index"
import useInput from "../../hook/useInput";

const BuyNow = () => {
    const price = useInput();
    return (
        <>
            <div className="buynow">
                <h3>즉시 구매가로</h3>
                <h2>판매할 가격을 입력하세요</h2>
                {/* <input type="text" />원 */}
                <div className="buynow_input">
                    <CustomInput
                        {...price}
                        placeholder='즉시 구매가'
                        width="400px"
                        msg="가격을 입력해주세요"
                        />
                    <p>원</p>
                </div>
            </div>
        </>
    )
}

export default BuyNow