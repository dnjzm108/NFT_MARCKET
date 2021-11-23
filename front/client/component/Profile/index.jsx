import { ProfileStyled, StyleTd } from "./Profile.css";
import { Circle } from "../Join/Join.css"
import Link from "next/link";
import Button from "../Button"
import { CopyToClipboard } from "react-copy-to-clipboard";
import { VscSmiley, VscCheck, VscWarning } from "react-icons/vsc";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Seller_apply from '../Seller_apply'
import { useEffect } from "react";
import Router from "next/router"



const Profile = () => {
    const dispatch = useDispatch()
    // const user = useSelector((state:persistReducer)=> state.user)
    const [apply, setApply] = useState(false)
    const user = useSelector(state => state.user)
    const { status, picture, nickname, wallet, email } = user.user_info
    const {IsLogin} = user

    const renderAuth = () => {
        switch (status) {
            case 0:
                return <h5><VscWarning />판매자 인증 필요</h5>
            case 1:
                return <h5><VscCheck />인증 반려</h5>
            case 2:
                return <h5>인증 대기중...</h5>
            case 3:
                return <h5><VscCheck />인증 완료👍</h5>
        }
    }
    useEffect(() => {
        if (!IsLogin) {
            console.log('dddddd');
            Router.push('/user/login')
        }
    },[IsLogin])
    
    const handlepopup = () => {
        setApply(!apply)
    }

    return (
        <>
            <ProfileStyled>
                <div>
                    <h1>나의 프로필</h1>
                    <img src={picture} alt="" />
                    <StyleTd />
                    <div className="seller_title">
                        <h2>{nickname} </h2>
                        {renderAuth()}
                    </div>
                    <StyleTd />
                    <h4>지갑 주소</h4>
                    <StyleTd />
                    <div className="URL" onClick={() => alert('주소가 복사되었습니다.')}>{wallet}</div>
                    <StyleTd />
                    <h4>이메일 주소</h4>
                    <StyleTd />
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
                    <h4>{email}</h4>
                    <StyleTd />
                    <div className="btn">
                        {status < 2 && <Button value='판매자 등록신청' func={handlepopup} color="sky" size='small' />}
                        <Button value='프로필 수정' url='/user/edit' ml={80} color="" size='small' />
                        {apply ? <Seller_apply close={handlepopup} /> : ''}
                    </div>
                </div>
            </ProfileStyled>
        </>
    );
}


export default Profile;