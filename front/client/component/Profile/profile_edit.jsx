import Button from "../Button"
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {Circle} from "../Join/Join.css"
import { ProfileStyled,StyleTd,Contain } from "./Profile.css";
import { useState } from "react";
import CustomInput from "../CustomInput"
import axios from "axios";
import { UserUpdate_REQUEST } from "../../reducers/user";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";


const Profile_edit = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    // const [check_id, setCheck_id] = useState('')
    const [Email, setEmail] = useState();
    const [images, setimages] = useState();

    const currentemail = user.user_info.email
    // const currentpicture = user.user_info.picture

    const handleSumit = () =>{
        const formData = new FormData();
        formData.append("image",images)

        dispatch(UserUpdate_REQUEST(formData))
        Router.push('/user/profile')

    }
    
    const handleImg = async(e)=>{
        const img = e.target.files[0];
        setimages(img)
    }   

    const handlemail = async()=>{
        const mail = currentemail;
        setEmail(mail)
    }
    // const handleimage = (e) => {
    //     const img = e.target.files[0];
    //     setimages(img)
    // }

    // const handlemail = ()=>{
    //     const mail = currentemail
    //     console.log(mail)
    //     setEmail(mail)
    // }

    // const editPage = () => {
    //     dispatch(UserUpdate_REQUEST(user.user_info))
    //     alert('수정되었습니다!')
    //     Router.push('/user/profile')
    // }
    // const overlap = async ()=>{
    //     const nick = {
    //         nick : nickname.value
    //     }
    //     if(nickname.value !==''){
    //         let result = await axios.post(`${url}/user/name_check`,nick)
    //         if(result){
    //             setCheck_id(result.data)
    //         } else{
    //             setCheck_id(result.data)
    //         }
    //     }else{
    //         setCheck_id('')
    //     }
    // }

    return (
        <>

        <ProfileStyled>
        <div>
        <h1>프로필 편집</h1>
        <StyleTd/>
        <Circle> 
        {images !==undefined? 
        <label htmlFor="profile" style={{background:"green"}} >
                              <CameraAltIcon />
                              </label> : 
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
                            style={{display:"none"}}
                       / >
                           </Circle>
        <StyleTd/>
        /* <Contain>
        {/* <label htmlFor="nickname">닉네임</label>
        <td>* 5~20자의 한글, 영문 대소문자, 숫자, 특수기호(_),(-),(.)만 사용 가능합니다.</td>
        <CustomInput {...Nickname} func={overlap} msg={"닉네임을 입력해주세요."} type="text" id="nickname" placeholder="닉네임을 입력해주세요" /> */}

        </Contain>
        <Contain>
        <label htmlFor="email_address">이메일 주소</label>&nbsp;
        <CustomInput {...Email} msg={"이메일을 입력해주세요."}type="text" id="email_address" placeholder="이메일을 입력해주세요" />
    
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