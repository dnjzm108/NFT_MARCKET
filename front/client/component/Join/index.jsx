
import Link from 'next/link'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Logo, Circle, Copyed, Small_Contain, Check_Content, Line, Btn_Box } from './Join.css.jsx'
import { Wrap } from '../../component/Wrap/Popup_back.jsx';
import useInput from '../../hooks/useInput.jsx';
import { useEffect, useState } from 'react';
import Input from '../Input'
import Button from '../Button';
import { useSelector,useDispatch } from 'react-redux';
import { UserJoin_REQUEST } from '../../reducers/user.js';
import Router from "next/router"
import axios from 'axios'
import { url } from '../../saga/url.js';



const Join = (data) => {

    const [check,setCheck] = useState('')
    const [checkBox1,setCheckBox1] = useState(false)
    const [checkBox2,setCheckBox2] = useState(false)
    const [checkBox3,setCheckBox3] = useState(false)
    const dispatch = useDispatch()
    // const state_data = useSelector(state => state.user)

    const nickname = useInput('');
    const email = useInput('');
    const handleSumit = () => {
        const wallet = window.klaytn.selectedAddress
        const userinfo = {
            "nickname": nickname.value,
            "email": email.value,
            "wallet": wallet,
            "picture": '1'
        }
        console.log(userinfo);

        dispatch(UserJoin_REQUEST(userinfo))
        Router.push('/')
    }

const checking = async() =>{
    console.log(email);
    let name = {
        name :nickname.value
    }
    if(nickname.value !== ''){
        let result = await axios.post(`${url}/user/name_check`,name)
        console.log(result);
        if(result){
            setCheck(result.data)
        }else{
            setCheck(result.data)
        }
    }else{
        setCheck('')
    }
    
}

const hadleCheck1 = () =>{
    setCheckBox1(!checkBox1)
}
const hadleCheck2 = () =>{
    setCheckBox2(!checkBox2)
}
const hadleCheck3 = () =>{
    setCheckBox3(!checkBox3)
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

                    <h1>회원가입</h1>
                    <Circle> <CameraAltIcon /> </Circle>

                    <Small_Contain>
                        <label htmlFor="nickname">닉네임</label>
                        <td>* 5~20자의 한글, 영문 대소문자, 숫자, 특수기호(_),(-),(.)만 사용 가능합니다.</td>
                        <Input {...nickname} func={checking} msg="닉네임을 입력해 주세요" type="text" id="nickname" placeholder="닉네임을 입력해주세요" />
                    </Small_Contain>
                        {check !== '' ?  check ==true ?<span style={{color:'blue'}}>사용할수있는 닉네임 입니다.</span>: <span style={{color:"red"}}>사용할수없는 닉네임 입니다.</span> : ''}
                    <Small_Contain>
                        <label htmlFor="email_address">이메일 주소</label>
                        <Input {...email} msg="이메일을 입력해 주세요" id="email_address" placeholder="이메일을 입력해주세요" />


                    </Small_Contain>
                    <Check_Content>
                        <input type="checkbox" id="age" onChange={hadleCheck1}/> &nbsp;
                        <label htmlFor="age">만 19세 이상입니다.</label>
                    </Check_Content>
                    <Check_Content>
                        <input type="checkbox" id="law" onChange={hadleCheck2}/> &nbsp;
                        <label htmlFor="law">(필수) <Link href='/'><a>서비스 이용약관</a></Link>에 동의합니다.</label>
                    </Check_Content>
                    <Check_Content>
                        <input type="checkbox" id="agrry" onChange={hadleCheck3}/> &nbsp;
                        <label htmlFor="agrry">(필수) <Link href='/'><a>개인정보 수집 및 이용</a></Link>에 동의합니다.</label>
                    </Check_Content>
                    <Line />
                    <Btn_Box>
                        <Button value="취소" url="/" />
                        {checkBox1 && checkBox2 && checkBox3 && check && email.value !== '' ? <Button value="회원가입" color="sky" func={handleSumit} /> : ''}
                  
                    </Btn_Box>
                    &nbsp;


                </div>
                <Copyed>Copyright © 2021 GroundX.All rights reserved.</Copyed>


            </Wrap>

        </>
    )
}

export default Join

