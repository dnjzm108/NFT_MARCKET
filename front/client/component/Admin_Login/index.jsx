
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
import {Content,Logo,Copyed,Icon_Close,Container} from './Admin_Login.css'
import {Small_Contain} from '../Join/Join.css'
import { Middle_btn} from '../../component/Btn.jsx';
import { Wrap_vh } from '../Wrap/Popup_Back.jsx';
import CustomInput from "../CustomInput"
import useInput from '../../hooks/useInput';
import Button from '../Button';
import {Admin_Login_REQUEST} from '../../reducers/admin'
import { useDispatch } from 'react-redux'

const Admin_Login = () => {

    const dispatch = useDispatch();
    const admin_id = useInput()
    const admin_pw = useInput()

    const login = () =>{
        let info = {
            id : admin_id.value,
            pw : admin_pw.value
        }

        dispatch(Admin_Login_REQUEST(info))
    }

    return (
        <>
            <Wrap_vh>
            <Link href='/'>
                    <a>
                        <Logo>
                            <img src="/logo.png" alt="" /></Logo>
                    </a>
                </Link>
                <Container>
                    <Icon_Close>
                        <Link href="/">
                            <CloseIcon color="disabled" sx={{ fontSize: 55 }} />
                        </Link>
                    </Icon_Close>
                    <Content>
                        <h1>관리자 로그인</h1>
                        
                        <Small_Contain>
                            <label htmlFor="id">아이디</label>
                            <CustomInput {...admin_id} type="text" id="id" />
                            </Small_Contain>
                            <Small_Contain>
                                <label htmlFor="password">비밀번호</label>
                            <CustomInput {...admin_pw} type="password" id="password"/>
                            </Small_Contain>

                            <Button func={login} color="sky" value="로그인" />
                    
                    </Content>

                </Container>
                <Copyed>Copyright © 2021 GroundX.All rights reserved.</Copyed>


            </Wrap_vh>

        </>
    )
}

export default Admin_Login

