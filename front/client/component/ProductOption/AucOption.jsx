import { Options, OptionCheck } from "./product_option.css"
import OptionBox from '../OptionBox/OptionBox'
import { useState } from "react"
import {useSelector} from 'react-redux'


const AucOption = ({renderOptions})=>{
    const {category} = useSelector(state=>state.mint)
    const [bigcate,setBigcate]=useState(category[0].code)
    const [middlecate,setMiddlecate]=useState(category[0].list[0].code)

    const handleCategory=(code)=>{
        setBigcate(code)
        setMiddlecate(category.filter(v=>v.code==code)[0].list[0].code)
    }

    const handleMiddleCategory=(code)=>{
        setMiddlecate(code)
    }

    return(
        <>
            <Options>
                <h1>상세옵션을 선택해주세요</h1>
                <div className="select_category"><h3>대분류</h3><h3>중분류</h3></div>
                <div className="select_contain">
                    <div className="select_box">
                        <OptionBox list={category} onClick={handleCategory} now={bigcate} />
                        <OptionBox list={category.filter(v => v.code == bigcate)[0].list} onClick={handleMiddleCategory} now={middlecate} />
                    </div>
                </div>
                <div className="select_option">
                    <span><p>색상 :</p><input type="text" /></span>
                    <span><p>사이즈 :</p><input /></span>
                </div>
            </Options>
        </>
    )
}

export default AucOption;