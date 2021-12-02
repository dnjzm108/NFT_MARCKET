import Button from "../Button"
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Circle } from "../Join/Join.css"
import { ProfileStyled, StyleTd, Contain } from "./Profile.css";
import { useState } from "react";
import CustomInput from "../CustomInput"
import axios from "axios";
import { UserUpdate_REQUEST } from "../../reducers/user";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";
import useInput from '../../hooks/useInput.jsx';


const Profile_edit = () => {
    const dispatch = useDispatch()
    const [imgUrl, setimgUrl] = useState();
    const user = useSelector(state => state.user)
    const {nickname,auth,email,picture} = user.user_info
    const [images, setImages] = useState();

    const email_change = useInput()

    const handleSumit = () => {
        if(email_change.value == undefined && images == undefined){
            alert('변경하실 이메일 또는 사진을 첨부해주세요')
        }else{
        
            const formData = new FormData();
            formData.append("nickname", nickname)
            formData.append("auth", auth)

            if(email_change.value == undefined){
                formData.append("email", email)
            }else{
                formData.append("email", email_change.value)
            }
            if(images == undefined){
                formData.append("picture", picture)
            }else{
                formData.append("image", images)
            }
            dispatch(UserUpdate_REQUEST(formData))
            Router.push('/user/profile')
        }
    }

    const handleImg = async (e) => {
        const img = event.target.files[0];
        if(img !== undefined){
            setImages(img)
            const imageUrl = URL.createObjectURL(img)
            // console.log(imageUrl);
            setimgUrl(imageUrl)
            // console.log(imgUrl);
        }
    }


    return (
        <>
            <ProfileStyled>
                <div>
                    <h1>프로필 편집</h1>
                    <StyleTd />
                    <Circle>
                    {images !== undefined ?
                            <label htmlFor="profile">
                                  <img src={imgUrl}/>
                            </label>
                            :
                            <label htmlFor="profile" >
                                <CameraAltIcon />
                            </label>}

                        <input
                            accept='image/*'
                            type="file"
                            className="file_select_input"
                            multiple
                            onChange={handleImg}
                            id="profile"
                            style={{ display: "none" }}
                        />
                    </Circle>
                    <StyleTd />

                    <Contain>
                        <label htmlFor="email_address">이메일 주소</label>&nbsp;
                        <CustomInput {...email_change} msg={"이메일을 입력해주세요."} type="text" id="email_address" placeholder="이메일을 입력해주세요" length="28" />

                    </Contain>
                    <div className="btn_edit">
                        <Button value='변경사항 저장' func={handleSumit} color="sky" size='small' />
                        <Button value='취소' url='/user/profile' ml={20} size='small' />
                    </div>
                </div>
            </ProfileStyled>
        </>
    );
}

export default Profile_edit;