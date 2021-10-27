import { ProfileStyled, StyleTd } from "./Profile.css";
import {Circle} from "../Join/Join.css"
import Link from "next/link";
import Button from "../Button"
import { CopyToClipboard } from "react-copy-to-clipboard";
import { VscSmiley, VscCheck, VscWarning } from "react-icons/vsc";



const Profile = () => {

    
    const WalletUrl = "0xbf39ac77b62577d4c8e9c16f278b1c05e87d17e5"

    return (
        <>
        <ProfileStyled>
            <div>
                <h1>나의 프로필</h1>
                <img src="/3.jpg"/>
                    <StyleTd/>
                    <div className="seller_title">
                    <h2>네이선드레이크</h2>
                    <h5 className="verified"><VscCheck/>인증 완료</h5>
                    <h5 className="need_verified"><VscWarning/>인증 필요</h5>
                    </div>
                    <StyleTd/>
                    <h4>지갑 주소</h4>
                    <StyleTd/>
                    <CopyToClipboard text={WalletUrl}>
                    <td className="URL">0xbf39ac77b62577d4c8e9c16f278b1c05e87d17e5</td>
                    </CopyToClipboard>
                    <StyleTd/>
                    <h4>이메일 주소</h4>
                    <StyleTd/>
                    <h4>godtttever@naver.com</h4>
                    <StyleTd/>
                    <Button value='판매자 등록신청' url='/' ml={100} color="sky" size='small' />
            </div>
        </ProfileStyled>
        </>
    );
}


export default Profile;