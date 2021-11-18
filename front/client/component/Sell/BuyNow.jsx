import CustomInput from "../CustomInput/index"
import useInput from "../../hook/useInput";

const BuyNow = () => {
    const price = useInput();
    return (
        <>
            <h3>하위 항목을 작성해주세요</h3>
        </>
    )
}

export default BuyNow