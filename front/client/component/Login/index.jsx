
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
import { Content, Logo, Copyed, Icon_Close } from './Login.css.jsx'
import { Wrap } from '../Wrap/Popup_Back.jsx';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { UserLogin_REQUEST, User_Join_Check } from '../../reducers/user'
import Router from "next/router"
import { User_Logout } from '../../reducers/user';
import { useState } from 'react';


const Login = () => {
    const dispatch = useDispatch();
    const state_data =  useSelector(state => state.user)
    const { IsLogin, loadding ,user_info } = state_data
    const [login,setLoigin] = useState(false)


    const kaikasLogin = async () => {
        let version = await window.klaytn.networkVersion;

        if (version == 1001) {
            const wallet = await window.klaytn.enable()
            const user_info = {
                "wallet": wallet[0]
            }
            if (wallet !== undefined) {
                await dispatch(UserLogin_REQUEST(user_info))
                setLoigin(true)
            }
        } else {
            alert("테스트넷으로 로그인 해주십시오")
        }
    }
    useEffect(()=>{
            if(login == true && loadding ==false && user_info.nickname == null){
                Router.push('/user/join')
            }else if(login == true && loadding ==false && user_info.nickname !== null){
                Router.push('/')
            }
    },[loadding])

    const onClick = () => {
        if (!window.klaytn) {
            alert('kaikaf를 다운 받아주세요')
        } else {
            kaikasLogin()
        }
    }


    return (
        <>
            <Wrap>
                <Link href='/'>
                    <a>
                        <Logo>
                            <img src="/logo.png" alt="" /></Logo>
                    </a>
                </Link>
                <div>
                    <Icon_Close>
                        <Link href="/">
                            <CloseIcon color="disabled" sx={{ fontSize: 55 }} />
                        </Link>
                    </Icon_Close>
                    <Content>
                        <h1>로그인</h1>
                        <span>지갑을 이용하여 KrafterSpace에 로그인 합니다.</span>
                        <span>아래 지갑중 사용할 지갑을 선택해 주세요.</span>
                        <button onClick={onClick}>  Kaikas로 로그인 <img src="/klay.png" /></button>
                        <span>사용 중인 지갑이 없으신가요?
                            <Link href="https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi">
                                <a>Kaikas 다운로드</a>
                            </Link>
                        </span>
                    </Content>
                </div>
                <Copyed>Copyright © 2021 GroundX.All rights reserved.</Copyed>


            </Wrap>


        </>
    )
}

export default Login

