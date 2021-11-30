import { Options, OptionCheck } from "./product_option.css"
import Button from "../Button";
import AucOption from "./AucOption";
import { useSelector } from 'react-redux'
import { useState, useEffect } from "react";
import OptionBox from '../OptionBox/OptionBox'
import { useDispatch } from "react-redux"
import useInput from "../../hook/useInput";
import { Product_options_REQUEST } from '../../reducers/mint'




const ProductOption =
    ({ isNow, isClick,
        colors, setColors, colorInput, setColorInput,
        size, setSize, sizeInput, setSizeInput,
        qty, setQty, price, setPrice,
        bigcate, setBigcate, middlecate, setMiddlecate,
        seasons, season, setSeason, optionEntered,setOptionEntered }) => {

        
        const { category } = useSelector(state => state.mint)



        // 컬러, 사이즈 모두 입력 됐는지 확인
        const optionCheck = () => {
            const colorArr = colorInput.split(',').filter(v => v != '');
            const sizeArr = sizeInput.split(',').filter(v => v != '');
            if (colorInput !== "" && sizeInput !== "") {
                setColors(colorArr)
                setSize(sizeArr)
                setOptionEntered(true);
            } else {
                alert("상품 옵션을 입력해주세요")
            }
        }

        const handleQty = (e, x) => {
            const quantity = e.target.value
            let newQty = [...qty];
            newQty[x] = e.target.value;
            setQty(newQty);
        }

        const handlePrice = (e, x) => {
            let newPrice = [...price];
            newPrice[x] = e.target.value;
            setPrice(newPrice);
        }

        const renderOptions = () => {
            const slength = size.length;
            return colors.map((c, i) => {
                return (
                    <ul key={i} className="option_ul">
                        {size.map((s, j) => {
                            return (
                                <li key={j} className="option_li">
                                    <h1>{`${c},${s}`} </h1>
                                    <p>수량 입력: <input onChange={(e) => handleQty(e, i * slength + j)} /></p>
                                    <p>가격 입력: <input onChange={(e) => handlePrice(e, i * slength + j)} /></p>
                                </li>
                            )
                        }
                        )}
                    </ul>
                )
            })
        }

        const handleOption = async () => {
            const priceList = price.indexOf('')
            const qtyList = qty.indexOf('')
            // if(priceList==-1 || qtyList==-1){
            //     alert('수량 또는 가격을 모두 입력해주세요')
            //     // dispatch(Product_options_REQUEST(options))
            // }else{
            //     alert("확인되었습니다")
            // }
        }

        //여기 인자는 bigcate code
        const handleCategory = (code) => {
            // console.log("handle category"+code,bigcate)
            setBigcate(code)
            setMiddlecate(category.filter(v => v.code == code)[0].list[0].code)
        }

        //여기 인자는 middlecate code
        const handleMiddleCategory = (code) => {
            setMiddlecate(code)
        }
        const handleSeason = (code) => {
            setSeason(code)
        }
        //나중에 back에 내가 현재 고른 카테고리 보낼 때 middlecate 만 보내면 됨! 

        return (
            <>
                <Options>
                    {isNow ?
                        <>
                            <h1>상세옵션을 선택해주세요</h1>
                            <div className="select_category"><h3>대분류</h3><h3>중분류</h3></div>
                            <div className="select_contain">
                                <div className="select_box">
                                    <OptionBox list={category} onClick={handleCategory} now={bigcate} />
                                    <OptionBox list={category.filter(v => v.code == bigcate)[0].list} onClick={handleMiddleCategory} now={middlecate} />
                                    <OptionBox list={seasons} onClick={handleSeason} now={season} />
                                </div>
                            </div>
                            <h3> 주의 사항 : 옵션은 " , "를 기준으로 나눠 표기해주세요.
                                <p>예시 ) 색상 : black,white,beige,brown (O)
                                    사이즈 : S / M / L (X)  S,M,L (O)</p>
                            </h3>
                            <h3> 색상 옵션 또는 사이즈 옵션 이외에 기타 옵션을 적으셔도 됩니다.
                                <p>예시 ) 잠옷 세트 / 상의 / 하의를 따로 판매하고싶은 경우 , <br/>
                                
                                </p>
                            </h3>
                            <div className="select_option">
                                <span><p>색상 :</p>
                                    <input type="text"
                                        defaultValue={colors}
                                        onChange={(e) => { setColorInput(e.target.value) }}
                                        placeholder="색상 옵션을 입력하세요 ex) 검정,아이보리,회색"
                                    />
                                </span>
                                <span><p>사이즈 :</p>
                                    <input
                                        type="text"
                                        defaultValue={size}
                                        onChange={(e) => { setSizeInput(e.target.value) }}
                                        placeholder="사이즈 옵션을 입력하세요 ex) free"
                                    />
                                </span>
                            </div>
                        </>
                        :
                        <AucOption
                            renderOptions={renderOptions}
                            season={season}
                            seasons={seasons}
                            handleSeason={handleSeason}
                            colors={colors}
                            setColors={setColors}
                            colorInput={colorInput}
                            setColorInput={setColorInput}
                            size={size}
                            setSize={setSize}
                            sizeInput={sizeInput}
                            setSizeInput={setSizeInput}
                            qty={qty}
                            setQty={setQty}
                            price={price}
                            setPrice={setPrice}
                        />
                    }
                    <div className="option_btn">
                        {isNow ? <Button value="옵션 선택 완료" func={optionCheck} /> : ''}

                    </div>
                </Options>
                <OptionCheck>
                    <div className="op_box">
                        
                        {
                            optionEntered ?
                                (<>
                                    {renderOptions()}
                                </>
                                )
                                : isNow ? <div className="enter_all">옵션선택 완료 버튼을 눌러주세요</div> : ''
                        }
                        {
                            isClick[0] ?
                                <div className="option_btn">
                                    <Button value="수량,가격 입력 완료" func={() => { handleOption(1) }} />
                                </div>
                                : ""
                        }
                    </div>
                </OptionCheck>
            </>
        )
    }

export default ProductOption;