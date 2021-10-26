import { Middle_btn, Small_btn } from "../../component/btn";
import { ProfileStyled, StyleTd } from "./Profile.css";
import CameraAlt from "@mui/icons-material/CameraAlt";
import {Circle} from "../Join/Join.css"
import Link from "next/link";
import Button from "../Button"



const Profile = () => {
    return (
        <>
        <ProfileStyled>
            <div>
                <h1>나의 프로필</h1>
                <Circle><CameraAlt/></Circle>
                <styledBox>
                    <StyleTd/>
                    <h3>닉네임</h3>
                    <StyleTd/>
                    <td>네이선드레이크</td>
                    <StyleTd/>
                    <h3>지갑 주소</h3>
                    <StyleTd/>
                    <td>0xbf39ac77b62577d4c8e9c16f278b1c05e87d17e5</td>
                    <StyleTd/>
                    <h3>이메일 주소</h3>
                    <StyleTd/>
                    <td>godtttever@naver.com</td>
                    <StyleTd/>
                    <Button value='프로필 편집' url='/user/Profile_edit'  size='small' />

                   
                </styledBox>
            </div>
        </ProfileStyled>
        </>
    );
}


export default Profile;