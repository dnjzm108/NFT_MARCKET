import { Options,OptionCheck } from "./product_option.css"
import Button from "../Button";
import Selectbox from "../../component/SelectBox";
import useChangeValue from "../../hook/useChangeValue";
import AucOption from "./AucOption";
import useInput from "../../hook/useInput";
import { useState } from "react";

const ProductOption = 
({isNow,isClick,setIsClick,optionColor,optionSize,optionEtc,setOptionColor,setOptionSize,setOptionEtc})=>{
    const list1 =["Men","Women","All"]
    const category1 = useChangeValue(list1)
    const list2 = ["Top","Bottom","Shoes","Accessory"]
    const category2 = useChangeValue(list2)
    const list3=["Outer","Inner","Shirts"]
    const category3 = useChangeValue(list3)
    const [colors,setColors]=useState([])
    const [colorInput,setColorInput] = useState("")
    const [option,setOption]=useState([])
    const [optionInput,setOptionInput] = useState("")
    const [size,setSize]=useState([])
    const [sizeInput,setSizeInput] = useState("")
    const [check1,setCheck1] = useState(false)
    const [check2,setCheck2] = useState(false)

    const optionCheck =()=>{
        console.log('xxxx')
        setCheck1(false)
        const colorArr = colorInput.split(',').filter(v=>v!='');
        setColors(colorArr)
        const sizeArr = sizeInput.split(',').filter(v=>v!='');
        setSize(sizeArr)
        console.log(optionInput.split(''))
        console.log(optionInput.split('').includes(','))
        if(optionInput!='' && optionInput.split('').includes(',')){
            const optionArr = optionInput.split(',').filter(v=>v!='');
            console.log(optionArr)
            if(optionArr.length>1){
                setOption([...optionArr])
            }
        }
        console.log(optionInput)
        console.log(option)
        setCheck1(true); 
    }

    // 이중 for문
    // i 0 1
    // j 0 1 2
    // return 00 01 02 10 11 12

    const handleOption =(x)=>{
        let isClicked = [...isClick];
        isClicked[x] = !isClicked[x]
        setIsClick(isClicked)
        return ;
    }




    return(
        <>
        <Options>
            {isNow ? 
            <>
            <h1>상세옵션을 선택해주세요</h1>
            <div className="select_category"><h3>대분류</h3><h3>중분류</h3><h3>소분류</h3></div>
                        <div className="select_box">
            {/* const categoryBox = () => {
            return category.map((v, i) => {
            return <SelectBtnBox list={v.list} title={v.name} key={v.name + i} onClick={handleCategory} now={result.category} />
            })
            } */}
            <Selectbox {...category1}/>
            <Selectbox {...category2}/>
            <Selectbox {...category3}/>
            </div>
                <h3> 주의 사항 : 옵션은 " , "를 기준으로 나눠 표기해주세요
                    <p>예시 ) 색상 : black,white,beige,brown (O)
                        사이즈 : S / M / L (X)  S,M,L (O)  옵션1 : 기모O,기모X (O)</p>
                </h3>
                <div className="select_option">
                    <span><p>색상 :</p>
                    <input type="text" 
                    defaultValue={optionColor}
                    onChange={(e)=>{setColorInput(e.target.value)}}
                    placeholder="색상 옵션을 입력하세요 ex) 검정,아이보리,회색"
                    />
                    </span>
                    <span><p>사이즈 :</p>
                    <input 
                    type="text"
                    defaultValue={optionSize}
                    onChange={(e)=>{setSizeInput(e.target.value)}}
                    placeholder="사이즈 옵션을 입력하세요 ex) free"
                    />
                    </span>
                    <span><p>기타 옵션 :</p>
                    <input 
                    type="text"
                    defaultValue={optionEtc}
                    onChange={(e)=>{setOptionInput(e.target.value)}}
                    placeholder="기타 옵션을 입력하세요 ex) 추가 없음, 길이 추가"
                    />
                    </span>
                </div>
            </>
                :
            <AucOption/>
            }
            <div className="option_btn">
            <Button value="옵션 선택 완료" func={optionCheck}/>
            </div>
        </Options>
        <OptionCheck>
            <div className="op_box">
            {
                check1 ?
                <div className="enter_all">
                    <p>수량 일괄 입력:<input /></p>
                    <p>가격 일괄 입력:<input /></p>
                </div>
                : ""
            }
            {
                check1 ? 
                (
                colors.map((c, k) => {
                    return (
                        <ul key={k} className="option_ul">
                            {size.map((s, i) => {
                                if(option.length==0){
                                    return (
                                        <li key={i} className="option_li">
                                    <h1>{`${c},${s}`}</h1>
                                    <p>수량 입력: <input/></p>
                                    <p>가격 입력: <input/></p>
                                        </li>
                                    )
                                }else{
                                    option.map((o,j)=>{
                                        return (
                                            <li key={j} className="option_li">
                                                <h1>{`${c},${s},${o}`}</h1>
                                                <p>수량 입력: <input/></p>
                                                <p>가격 입력: <input/></p>
                                            </li>
                                        )
                                    })
                                }
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