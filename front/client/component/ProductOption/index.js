import { Options,OptionCheck } from "./product_option.css"
import Button from "../Button";
import Selectbox from "../../component/SelectBox";
import useChangeValue from "../../hook/useChangeValue";
import AucOption from "./AucOption";
import useInput from "../../hook/useInput";
import {useSelector} from 'react-redux'
import { useState,useEffect } from "react";
import axios from "axios"

const ProductOption = 
({isNow,isClick,setIsClick,optionColor,optionSize,optionEtc,setOptionColor,setOptionSize,setOptionEtc})=>{
    const list1 =["Men","Women","All"]
    
    const list2 = ["Top","Bottom","Shoes","Accessory"]
    const category2 = useChangeValue(list2)
    const {isLoading,maincate} = useSelector(state=>state.mint)
    const category1 = useChangeValue(maincate)
    const [colors,setColors]=useState([])
    const [colorInput,setColorInput] = useState("")
    const [option,setOption]=useState([])
    const [optionInput,setOptionInput] = useState("")
    const [size,setSize]=useState([])
    const [sizeInput,setSizeInput] = useState("")
    const [check1,setCheck1] = useState(false)
    const [check2,setCheck2] = useState(false)
    const [qty,setQty] = useState([]);
    const [price,setPrice] = useState([]);

    
    

    const optionCheck =()=>{
        setCheck1(false)
        const colorArr = colorInput.split(',').filter(v=>v!='');
        setColors(colorArr)
        const sizeArr = sizeInput.split(',').filter(v=>v!='');
        setSize(sizeArr)
        if(optionInput!='' && optionInput.split('').includes(',')){
            const optionArr = optionInput.split(',').filter(v=>v!='');
            if(optionArr.length>1){
                let tmp = [...optionArr]
                setOption(tmp)
            }
        }
        setCheck1(true); 
    }

    // 이중 for문
    // i 0 1
    // j 0 1 2
    // return 00 01 02 10 11 12

    const handleOption =()=>{
        item = {
            color:null,
            size:null,
            option:null,
            qty:null,
            price: null
        }
        const optionSet=[];
        if(option.length==0){
            colors.forEach(c=>{
                size.forEach(s=>{
                });
            })
        }
        
    }

    const handleQty = (e,x)=>{
        let tmpQ = [...qty];
        tmpQ[x] = e.target.value;
        setQty(tmpQ);
    }

    const renderOptions = () => {
        if(option.length==0){
            const slength = size.length;
            return colors.map((c, i) => {
                return (
                    <ul key={i} className="option_ul">
                    {size.map((s, j) => {
                        return (
                            <li key={j} className="option_li">
                                <h1>{`${c},${s}`} </h1>
                                <p>수량 입력: <input onChange={(e)=>handleQty(e,i*slength+j)}/></p>
                                <p>가격 입력: <input onChange={(e)=>handlePrice(e,i*slength+j)}/></p>
                            </li>
                            )
                        }
                        )}
                </ul>
            )
        })
    }else{
        return colors.map(c=>{
            return size.map(s=>{
                return option.map(o=>{
                    return(
                        <li key={c+s+o} className="option_li">
                            <h1>{`${c},${s},${o}`}</h1>
                            <p>수량 입력: <input /></p>
                            <p>가격 입력: <input /></p>
                        </li>
                    )
                })
            })
        
        })
    }
    }



    return(
        <>
        <Options>
            {isNow ? 
            <>
            <h1>상세옵션을 선택해주세요</h1>
            <div className="select_category"><h3>대분류</h3><h3>중분류</h3></div>
                        <div className="select_box">
            {/* const categoryBox = () => {
            return category.map((v, i) => {
            return <SelectBtnBox list={v.list} title={v.name} key={v.name + i} onClick={handleCategory} now={result.category} />
            })
            } */}
            <Selectbox {...category1}/>
            <Selectbox {...category2}/>

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
                (   <>
                    {renderOptions()}
                    <Button value="옵션 입력 완료" func={handleOption}/>
                    </>
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



// export const getServerSideProps = wrapper.getServerSideProps( (Store)=> async (req,res)=> {
//     // 첫번쨰는 dispatch 써서 API 요청을 보냅니다. 그리고 상태를 변경시킵니다.
//     // Store.dispatch(GET_POST())
//     console.log("text")
//     const result = await axios.get('http://localhost:4000/nft/maincate')
//     // console.log(result.data);
//     const list1 = result.data;
//     // console.log(result.data)
//     let lists = list1.map((v)=>{
//         return v.value
//     })
//     setMaincate(lists)
//     Store.dispatch(END)
//     await Store.sagaTask.toPromise()
// })


export default ProductOption;