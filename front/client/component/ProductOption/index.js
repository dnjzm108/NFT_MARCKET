import { Options,OptionCheck } from "./product_detail.css"
import Button from "../Button";
import Selectbox from "../../component/SelectBox";
import useChangeValue from "../../hook/useChangeValue";
import AucOption from "./AucOption";

const ProductOption = ({isNow})=>{
    const list =["1","2","3"]
    const category = useChangeValue(list)

    const handleAlert = ()=>{
        return(
            alert("확인되었습니다")
        )
    }

    const optionCheck =()=>{

    }

    return(
        <>
        <Options>
            {isNow ? 
            <>
            <h1>상세옵션을 선택해주세요</h1>
            <h3>카테고리</h3>
            <div className="select_box">
            <Selectbox {...category}/>
            </div>
                <h3> 주의 사항 : 각각의 속성은 " , "를 기준으로 나눠 표기해주세요
                    <p>예시 ) 색상 : black,white,beige,brown (O)
                        사이즈 : S / M / L (X) , S,M,L (O)</p>
                </h3>
                <div className="select_option">
                    <span><p>색상 :</p><input type="text" /></span>
                    <span><p>사이즈 :</p><input /></span>
                    <span><p>옵션1 :</p><input /></span>
                    <span><p>옵션2 :</p><input /></span>
                </div>
            </>
                :
            <AucOption/>
            }
            
            <Button value="옵션 선택 완료" func={handleAlert}/>
        </Options>
        <OptionCheck>
                <ul>
                    <li> <p>수량 입력: </p><input/></li>
                    <li> <p>가격 입력: </p><input/></li>
                </ul>
        </OptionCheck>
        </>
    )
}

export default ProductOption;