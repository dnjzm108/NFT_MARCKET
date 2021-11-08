import { ProfileStyled, StyleTd } from "./Profile.css";
import {Circle} from "../Join/Join.css"
import Link from "next/link";
import Button from "../Button"
import { CopyToClipboard } from "react-copy-to-clipboard";
import { VscSmiley, VscCheck, VscWarning } from "react-icons/vsc";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {persistReducer} from "redux-persist/es/persistReducer";




const Profile = () => {
    const dispatch = useDispatch()
    // const user = useSelector((state:persistReducer)=> state.user)

    const [Verifiy,setVerifiy] = useState(false);
    const [Nick,setNick] = useState("");
    const [Wallet,setWallet] = useState("");
    const [Email,setEmail] = useState("");
    const [Photo,setPhoto] = useState();

    const handlePhoto = (e) =>{
        setPhoto(e.target.files[0])
    }


    const WalletUrl = "0xbf39ac77b62577d4c8e9c16f278b1c05e87d17e5"

    return (
        <>
        <ProfileStyled>
            <div>
                <h1>나의 프로필</h1>
                    <img src="/윤석열.png" alt="" />
                    <StyleTd/>
                    <div className="seller_title">
                    <h2>네이선드레이크</h2>
                    <h5 className="verified"><VscCheck/>인증 완료👍</h5>
                    <h5 className="need_verified"><VscWarning/>판매자 인증 필요</h5>
                    </div>
                    <StyleTd/>
                    <h4>지갑 주소</h4>
                    <StyleTd/>
                    <CopyToClipboard text={WalletUrl}>
                    <td className="URL"onClick={() => alert('주소가 복사되었습니다.')}>0xbf39ac77b62577d4c8e9c16f278b1c05e87d17e5</td>
                    </CopyToClipboard>
                    <StyleTd/>
                    <h4>이메일 주소</h4>
                    <StyleTd/>
                    {/* {
                                    user.verify == 0
                                    ?   <span><VerifiedUserIcon/>인증완료</span>
                                    :   ( user.verify == 1
                                            ? <span>대기중</span>
                                            : (
                                                user.verify == 2
                                                ? <span>반려됨</span>
                                                : <span></span>
                                            )
                                        )
                                } */}
                    <h4>godtttever@naver.com</h4>
                    <StyleTd/>
                    <div className="btn">
                    <Button value='판매자 등록신청' url='/' color="sky" size='small' />
                    <Button value='프로필 수정' url='/user/edit' ml={10} color="" size='small' />
                    </div>
            </div>
        </ProfileStyled>
        </>
    );
}


export default Profile;