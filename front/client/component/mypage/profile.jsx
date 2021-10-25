import { Middle_btn, Small_btn } from "../../component/btn";
import { ProfileStyled, StyleTd } from "./Profile.css";
import CameraAlt from "@mui/icons-material/CameraAlt";
import {Circle} from "../../pages/user/join.css"
import Navigation from "../NavBigation";
import Footter from "../Footter/footter"
import Link from "next/link";


const Profile = () => {
    return (
        <>
        <Navigation/>
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
                    <Middle_btn type="submit">
                        <Link href="/">
                        프로필 편집
                        </Link>
                    </Middle_btn>&nbsp;
                    <span>회원 탈퇴</span>
                </styledBox>
            </div>
        </ProfileStyled>
        </>
    );
}


export default Profile;