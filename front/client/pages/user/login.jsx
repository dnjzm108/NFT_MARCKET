
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
import {Content,Logo,Copyed,Icon_Close,LoginWrap} from './login.css.jsx'
import { Wrap } from '../../component/wrap/popup_back.jsx';
import {Delivery_address} from '../../component/delivery_address'

const Login = () => {
    return (
        <>  
            <Wrap>
                <Logo>로고 들어갈 자리</Logo>
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
                        <button> Kaikas로 로그인 </button>
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

