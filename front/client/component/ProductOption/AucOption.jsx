import { Options, OptionCheck } from "./product_detail.css"
import Selectbox from "../../component/SelectBox";
import useChangeValue from "../../hook/useChangeValue";

const AucOption = ()=>{
    const list =["1","2","3"]
    const category = useChangeValue(list)
    return(
        <Options>
            <h1>상세옵션을 입력해주세요</h1>
            <h3>카테고리</h3>
            <div className="select_box">
            <Selectbox {...category}/>
            </div>
            <div className="select_option">
                <span><p>색상 :</p><input type="text"/></span>
                <span><p>사이즈 :</p><input/></span>
                <span><p>옵션1 :</p><input/></span>
                <span><p>옵션2 :</p><input/></span>
            </div>
        </Options>
    )
    
}

export default AucOption;