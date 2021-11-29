import { StyledRelease,Slide_Wrap,Styled_Slide } from "./Release.css";
import FileInformation from '../../component/FileInformation/index'
import AgreeInfo from '../../component/AgreeInfo/index'
import Sell from '../../component/Sell/index'
import Thumbnail from '../../component/Thumbnail/index'
import Navigation from "../../component/Navigation/index";
import Footter from '../../component/Footter'
import ProductOption from "../../component/ProductOption";
import useInput from "../../hooks/useInput";
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Mint_REQUEST } from '../../reducers/mint';
import Router from "next/router";
import Loadding from "../../component/Loadding"
import { useEffect } from "react";

const Release = () => {
    const seasons = [
        { name: '봄', code: 'P' },
        { name: '여름', code: 'V' },
        { name: '가을', code: 'O' },
        { name: '겨울', code: 'I' },
        { name: '기타', code: 'E' },
    ]

    const { isLoading, category } = useSelector(state => state.mint)

    const { user_info } = useSelector(state => state.user)

    const dispatch = useDispatch()
    const name = useInput();
    const symbol = useInput();
    const explain = useInput();
    const bid = useInput();

    const [startDate, setStartDate] = useState(new Date())
    const [extension, setExtension] = useState('0')
    const [images, setImages] = useState([]);
    const [imageBundle, setImageBundle] = useState([]);
    const [agree, setAgree] = useState([false, false]);
    const [isNow, setIsNow] = useState(true);
    const [isClick, setIsClick] = useState([false, false])

    const [colors, setColors] = useState([])
    const [colorInput, setColorInput] = useState("")
    const [size, setSize] = useState([])
    const [sizeInput, setSizeInput] = useState("")
    const [qty, setQty] = useState([]);
    const [price, setPrice] = useState([]);

    const [bigcate, setBigcate] = useState(category[0].code)
    const [middlecate, setMiddlecate] = useState(category[0].list[0].code)
    const [season, setSeason] = useState(seasons[0].code)


    // 즉시구매를 선택한 경우
    const handleNow = () => {
        setIsNow(true);
    }

    // 경매를 선택한 경우
    const handleAuc = () => {
        setIsNow(false);
    }

    const fileSelected = event => {
        // 미리보기 이미지 보이게
        const imageFile = event.target.files; //내가 올린 파일들을 target으로 가져오고
        let arr = [...imageBundle]; 
        let imageUrl = [];
        for (let i = 0; i < imageFile.length; i++) {
            imageUrl = URL.createObjectURL(imageFile[i]); // i번째 이미지를 하나하나 url로 만들어서 변수에 담아줌
            arr.push(imageUrl) // url 하나하나 배열에다가 담아줌
        }
        setImageBundle(arr) // url 배열을 상태로 담음

        // 이미지 추가 탐색기 닫았다 열어도 그대로 추가 되게
        let { files } = event.target
        if (files.length > 10 || images.length + files.length > 10) {// 파일갯수 10개까지
            alert('최대 선택할 수 있는 파일 개수는 10개입니다.')
        } else {
            for (let i = 0; i < files.length; i++) {
                if (files[i]) { // 새로 추가된 파일이 있으면 
                    let newFile = []; // 기존 파일 + 추가된 파일 담을 배열
                    for (let i = 0; i < files.length; i++) {
                        newFile.push(files[i])
                    }
                    setImages(newFile => [...newFile, files[i]])
                    // setImages(newFile)
                }
            }
        }
        
    }
    
    const imageClick = (e) => {
        for (let i = 0; i < imageBundle.length; i++) {
            if (imageBundle[i] == e.target.currentSrc) {
                return changeArrayOrder(imageBundle,i,-i)
                ,changeArrayOrder(images,i,-i)
                ,alert("선택되었습니다")
            }
        }
    }
        
    const changeArrayOrder=(list,targetidx,moveValue)=>{
        const newPosi = targetidx+moveValue;
        const temp = list;
        const target = temp.splice(targetidx,1)[0]
        temp.splice(newPosi,0,target)
        return temp
    }


    // 정보들 formData에 담는 코드
    const handleData = async () => {
        const slength = size.length;
        const options = [];
        const formData = new FormData();
        const deadline = new Date(+startDate + 3240 * 10000).toISOString().replace("T", " ").replace(/\..*/, '');
        const files = [];

        if (isNow==true) {
            colors.forEach((c, i) => {
                size.forEach((s, j) => {
                    let option = {
                        color: c,
                        size: s,
                        qty: qty[i * slength + j],
                        price: price[i * slength + j],
                    }
                    formData.append("options", JSON.stringify(option))
                });
            })
        } else {
            let option = {
                color: colorInput,
                size: sizeInput
            }
            formData.append("options", JSON.stringify(option))
        }

        for (let i = 0; i < images.length; i++) {
            files.push(images[i])
            formData.append("image", images[i])
        }
        formData.append("explain", explain.value)
        formData.append("name", name.value)
        formData.append("symbol", symbol.value)
        formData.append("creater", user_info.nickname)
        formData.append("nickname",user_info.nickname)

        formData.append("type", isNow)
        formData.append("start_price", bid.value)
        formData.append("deadline", deadline)
        formData.append("extension", extension)


        formData.append("category", middlecate)
        formData.append("season", season)
        formData.append("auth",user_info.auth)
        dispatch(Mint_REQUEST(formData))
        Router.push('/')
    }




    // 동의 1,2 모두 했는지 확인
    const handleAgree = (num) => {
        let newAgree = [...agree];
        newAgree[num] = !newAgree[num]
        setAgree(newAgree);
    }


    // 입력정보 모두 받았는지 프론트 체크
    const handleSubmit = () => {
        if (agree[0] === false || agree[1] === false) {
            return alert("개인정보제공 및 유의사항 확인에 동의해주세요")
        } else if (isClick == false) {
            return alert("옵션 선택 완료 버튼을 눌러주세요")
        } else if (imageBundle.length == 0) {
            return alert('이미지를 선택해주세요')
        } else if (explain.value == undefined || explain.value == undefined || symbol.value == undefined) {
            return alert("상품 정보를 입력해주세요")
        } else {
            infoCheck();
        }
    }

    // 글자수 체크
    const infoCheck = () => {
        if (name.value.length > 50) {
            alert('상품 이름 글자수는 최대 50자까지 입니다')
        } else if (symbol.value.length > 10) {
            alert('symbol 글자수는 최대 10자까지 입니다.')
        } else {
            handleData();
        }
    }

    if (isLoading == true) {
        return <Loadding />
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Navigation />
            <StyledRelease>
                <div className="flex_contain">
                    <div>
                        <h2>새로운 상품 등록하기</h2>
                        <Sell
                            handleNow={handleNow}
                            handleAuc={handleAuc}
                            isNow={isNow}
                            bid={bid}
                            extension={extension}
                            setExtension={setExtension}
                            startDate={startDate}
                            setStartDate={setStartDate}
                        />
                        <FileInformation
                            name={name.value}
                            setName={name.onChange}
                            symbol={symbol.value}
                            setSymbol={symbol.onChange}
                            explain={explain.value}
                            setExplain={explain.onChange}
                            handleImg={fileSelected}
                            imageBundle={imageBundle}
                        />
                    </div>
                    <Thumbnail 
                    imageBundle={imageBundle}
                    fileSelected={fileSelected}
                    isNow={isNow}
                    imageClick={imageClick}
                    images={images}
                    />
                </div>
                <ProductOption
                    isNow={isNow}
                    isClick={isClick}

                    colors={colors}
                    setColors={setColors}
                    colorInput={colorInput}
                    setColorInput={setColorInput}

                    size={size}
                    setSize={setSize}
                    sizeInput={sizeInput}
                    setSizeInput={setSizeInput}

                    qty={qty} setQty={setQty}
                    price={price} setPrice={setPrice}

                    bigcate={bigcate}
                    setBigcate={setBigcate}
                    middlecate={middlecate}
                    setMiddlecate={setMiddlecate}
                    seasons={seasons}
                    season={season}
                    setSeason={setSeason}
                />

                <AgreeInfo
                    handleSubmit={handleSubmit}
                    handleAgree={handleAgree}
                />
            </StyledRelease>
            {/* <Footter/> */}
        </>
    )
}

export default Release