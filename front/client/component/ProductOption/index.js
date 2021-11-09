import { Options,OptionCheck } from "./product_option.css"
import Button from "../Button";
import Selectbox from "../../component/SelectBox";
import useChangeValue from "../../hook/useChangeValue";
import AucOption from "./AucOption";
import useInput from "../../hook/useInput";

const ProductOption = ({isNow,isClick,setIsClick})=>{
    const list1 =["Men","Women","All"]
    const category1 = useChangeValue(list1)
    const list2 = ["Top","Bottom","Shoes","Accessory"]
    const category2 = useChangeValue(list2)
    const list3=["Outer","Inner","Shirts"]
    const category3 = useChangeValue(list3)
    
    let color;
    let size;
    let colors =useInput();
    let sizes= useInput();

    const optionCheck =()=>{
        color = "black,red,brown,ivory";
        colors = color.split(',') //return list
        size = "xs,s,m,l,xl"
        sizes = size.split(',')
    }

    // 이중 for문
    // i 0 1
    // j 0 1 2
    // return 00 01 02 10 11 12

    const handleOption =(e)=>{
        e.preventDefault
        let isClicked = [...isClick];
        isClicked[e] = !isClicked[e]
        setIsClick(isClicked)
        // if(){

        // }

        return(
            alert("확인되었습니다")
        )
    }

    return(
        <>
        <Options>
            {isNow ? 
            <>
            <h1>상세옵션을 선택해주세요</h1>
            <div className="select_category"><h3>대분류</h3><h3>중분류</h3><h3>소분류</h3></div>
            <div className="select_box">
            <Selectbox {...category1}/>
            <Selectbox {...category2}/>
            <Selectbox {...category3}/>
            </div>
                <h3> 주의 사항 : 옵션은 " , "를 기준으로 나눠 표기해주세요
                    <p>예시 ) 색상 : black,white,beige,brown (O)
                        사이즈 : S / M / L (X)  S,M,L (O)  옵션1 : 기모O,기모X (O) 사이즈: 프리 (O)</p>
                </h3>
                <div className="select_option">
                    <span><p>색상 :</p><input type="text" /></span>
                    <span><p>사이즈 :</p><input type="text"/></span>
                    <span><p>옵션1 :</p><input type="text"/></span>
                </div>
            </>
                :
            <AucOption/>
            }
            <div className="option_btn">
            <Button value="옵션 선택 완료" func={()=>{handleOption(0)}}/>
            </div>
        </Options>
        <OptionCheck>
            <div className="op_box">
            {
                isClick[0] ?
                <div className="enter_all">
                    <p>수량 일괄 입력:<input /></p>
                    <p>가격 일괄 입력:<input /></p>
                </div>
                : ""
            }
            {
                isClick[0] ?
                (optionCheck(),
                colors.map((v, k) => {
                    return (
                        <ul key={k} className="option_ul">{sizes.map((v, i) => {
                            return (
                                <li key={i} className="option_li">
                                    <h1>{`${colors[k]},${sizes[i]}`}</h1>
                                    <p>수량 입력: <input/></p>
                                    <p>가격 입력: <input/></p>
                                </li>
                            )
                        }
                        )}
                        </ul>
                    )
                })
                )
                : <div className="enter_all">옵션선택 완료 버튼을 눌러주세요</div>
            }
            {
                isClick[0] ? 
                <div className="option_btn">
                <Button value="수량,가격 입력 완료" func={() => { handleOption(1) }} />
                </div>
                :""
            }
            </div>
        </OptionCheck>
        </>
    )
}


export default ProductOption;