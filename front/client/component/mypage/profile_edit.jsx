import Button from "../Button"
import CameraAlt from "@mui/icons-material/CameraAlt";
import {Circle} from "../Join/Join.css"
import { ProfileStyled,StyleTd,Contain } from "./Profile.css";
import useInput from '../../hooks/useInput.jsx';
import { useState } from "react";
import Input from "../Input"


const Profile_edit = () => {
    const[Check_id,setCheck_id] = useState(true)
    const[Check_email,setCheck_email] = useState(true)

    const Nickname = useInput('')
    const Email = useInput('')

    const Check_Name = e => {
        let {value} = Nickname;
        if(value == ''){
            console.log(value);
            setCheck_id(false);
        } else {
            console.log(value);
            setCheck_id(true);
        }
    }

    const Check_Mail = e =>{
        let{value} = Email;
        if(value == ''){
            console.log(value);
            setCheck_email(false);
        } else {
            console.log(value);
            setCheck_email(true);
        }
    }

    return (
        <>

        <ProfileStyled>
        <div>
        <h1>프로필 편집</h1>
        <Circle><CameraAlt/></Circle>
        <StyleTd/>
        <Contain>
        <label htmlFor="nickname">닉네임</label>
        <td>* 5~20자의 한글, 영문 대소문자, 숫자, 특수기호(_),(-),(.)만 사용 가능합니다.</td>
        <Input {...Nickname} msg={"닉네임을 입력해주세요."} type="text" id="nickname" placeholder="닉네임을 입력해주세요" />

        </Contain>
        <Contain>
        <label htmlFor="email_address">이메일 주소</label>&nbsp;
        <Input {...Email} msg={"이메일을 입력해주세요."}type="text" id="email_address" placeholder="이메일을 입력해주세요" />
    
        </Contain>
            <div className="btn">
                <Button value='변경사항 저장' url='/user/Profile_edit' color="sky" size='small' />
                <Button value='취소' url='/user/Profile' ml={20} size='small' />
            </div>
        </div>
        </ProfileStyled>
        </>
    );
}

export default Profile_edit;