import { StyledRelease } from "./Release.css";
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


const Release = () => {
    const {isLoading} = useSelector(state=>state.mint)
    const dispatch = useDispatch()
    const title = useInput();
    const description = useInput();
    const [images, setImages] = useState();
    const [agree,setAgree]=useState([false,false]);
    const [isNow,setIsNow] = useState(true);


    // 즉시구매를 선택한 경우
    const handleNow = () => {
        setIsNow(true);
        
    }

    // 경매를 선택한 경우
    const handleAuc = () => {
        setIsNow(false);
        // console.log(isNow)
    }
    
    const fileSelected = event => {
        let {files} = event.target
        if (files.length > 10) {
            alert('최대 선택할 수 있는 파일 개수는 10개입니다.')
        } else {
            const newImages = [];
            for (let i = 0; i < files.length; i++) {
                newImages.push(files[i])
            }
            setImages(newImages)
        }
    }

    const handleData = async ()=> {
            const formData = new FormData();
            for (let i = 0; i < images.length; i++) {
                formData.append("image", images[i])
            }
            formData.append("description", description.value)
            formData.append("title", title.value)
            dispatch(Mint_REQUEST(formData))
    }

    const handleAgree = (num)=>{
        let newAgree = [...agree];
        newAgree[num] = !newAgree[num]
        setAgree(newAgree);
    }

    const handleSubmit =()=>{
        if(agree[0]===false ||agree[1]===false){
            alert("개인정보제공 및 유의사항 확인에 동의해주세요")
            return ;
        }
        if(title.value==null || description.value==null || images==null ){ 
            alert("이미지, 텍스트를 모두 입력해주세요.")
            return;
        }
        alert("상품등록이 완료되었습니다.")
        handleData();
    }
    

    if(isLoading){
        return <span>로딩중</span>
    }

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
                    />
                        <FileInformation
                            title={title.value}
                            setTitle={title.onChange}
                            description={description.value}
                            setDescription={description.onChange}
                            handleImg={fileSelected}
                        />
                    </div>
                    {/* <Thumbnail /> */}
                </div>
                <ProductOption isNow={isNow}/>
                
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