
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
import {Content,Logo,Copyed,Icon_Close} from './Admin_Login.css'
import {Small_Contain} from '../Join/Join.css'
import { Middle_btn} from '../../component/Btn.jsx';
import { Wrap } from "../Wrap/Popup_back"

const Admin_Login = () => {
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
                        <h1>관리자 로그인</h1>
                        <form action="">
                        <Small_Contain>
                            <label htmlFor="id">아이디</label>
                            <input type="text" id="id" />
                            </Small_Contain>
                            <Small_Contain>
                                <label htmlFor="password">비밀번호</label>
                            <input type="password" id="password"/>
                            </Small_Contain>
                            <Middle_btn type="submit">로그인</Middle_btn>
                        </form>
                    </Content>

                </div>
                <Copyed>Copyright © 2021 GroundX.All rights reserved.</Copyed>


            </Wrap>

        </>
    )
}

export default Admin_Login
