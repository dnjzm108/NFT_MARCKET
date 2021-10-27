import { Middle_btn, Small_btn } from "../../component/btn";
import { ProfileStyled, StyleTd, StyledBox } from "./Profile.css";
import Link from "next/link";
import Button from "../Button"



const Profile = () => {

    return (
        <>
        <ProfileStyled>
            <div>
                <h1>나의 프로필</h1>
                <StyledBox>
                    <StyleTd/>
                    <h3>닉네임</h3>
                    <StyleTd/>
                    <td>네이선드레이크</td>
                    <StyleTd/>
                    <h3>지갑 주소</h3>
                    <StyleTd/>
                    <CopyToClipboard text={WalletUrl}>
                    <td>0xbf39ac77b62577d4c8e9c16f278b1c05e87d17e5</td>
                    </CopyToClipboard>
                    <StyleTd/>
                    <h3>이메일 주소</h3>
                    <StyleTd/>
                    <td>godtttever@naver.com</td>
                    <StyleTd/>
                    <Button value='프로필 편집' url='/user/edit' ml={100} color="sky" size='small' />
                </StyledBox>
            </div>
        </ProfileStyled>
        </>
    );
}


export default Profile;