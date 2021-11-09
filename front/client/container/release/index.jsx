import { StyledRelease } from "./Release.css";
import FileInformation from '../../component/FileInformation/index'
import AgreeInfo from '../../component/AgreeInfo/index'
import Sell from '../../component/Sell/index'
import NewRelease from '../../component/NewRelease/index'
import Thumbnail from '../../component/Thumbnail/index'
import Navigation from "../../component/Navigation/index";
import Footter from '../../component/Footter'
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
    const [agree,setAgree] = useState([false,false])

    const handleAgree =(num)=> {
        let newAgree = [...agree]; 
        newAgree[num] = !newAgree[num]
        console.log(newAgree);
        setAgree(newAgree);
    }


    const fileSelected = event => {
        if (event.target.files.length > 10) {
            alert('최대 선택할 수 있는 파일 개수는 10개입니다.')

        } else {
            const newImages = [];
            for (let i = 0; i < event.target.files.length; i++) {
                newImages.push(event.target.files[i])
            }
            setImages(newImages)
        }
    }

    const handleSubmit = async ()=> {
  
        const formData = new FormData();
        for(let i = 0; i<images.length; i++){
          formData.append("image",images[i])
        }
        formData.append("description", description.value)
        formData.append("title",title.value)
        dispatch(Mint_REQUEST(formData))
    }

    if(isLoading){
        return <span>로딩중</span>
    }
    return (
        <>
            <Navigation />
            <StyledRelease>
                {/* 새로운 */}
                <div className="flex_contain">
                    <div>
                        <NewRelease />
                        <FileInformation
                            title={title.value}
                            setTitle={title.onChange}
                            description={description.value}
                            setDescription={description.onChange}
                            handleImg={fileSelected}
                        />
                    </div>
                    <Thumbnail />
                </div>
                {/* <Sell/> */}
                <AgreeInfo 
                    handleAgree={handleAgree}
                    handleSubmit={handleSubmit}
                />
            </StyledRelease>
            {/* <Footter/> */}
        </>
    )
}

export default Release