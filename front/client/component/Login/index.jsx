
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
import {Content,Logo,Copyed,Icon_Close} from './Login.css.jsx'
import { Wrap } from '../../component/Wrap/Popup_back.jsx';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {UserLogin_REQUEST} from '../../reducers/user'

const Login = () => {
const dispatch =useDispatch();
useEffect(()=>{
    dispatch(UserLogin_REQUEST())
},[])

const kaikasLogin = async () => {
    await window.klaytn.enable()
    const klaytnAddress = window.klaytn.selectedAddress
    
    dispatch(UserLogin_REQUEST(klaytnAddress)
    )



  }

  const onClick = () => {
    if(!window.klaytn) {
      return
    }

    kaikasLogin()

  }


    return (
        <>  
            <Wrap>
                <Logo><img src="/logo.png" alt="" /></Logo>
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
                        <button onClick={onClick}> Kaikas로 로그인 </button>
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

