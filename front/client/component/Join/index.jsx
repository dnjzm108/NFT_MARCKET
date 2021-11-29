
import Link from 'next/link'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Logo, Circle, Copyed, Small_Contain, Check_Content, Line, Btn_Box, Container } from './Join.css.jsx'
import { Wrap } from '../../component/Wrap/Popup_Back.jsx';
import useInput from '../../hooks/useInput.jsx';
import { useEffect, useState } from 'react';
import CustomInput from '../CustomInput'
import Button from '../Button';
import { useSelector, useDispatch } from 'react-redux';
import { UserJoin_REQUEST } from '../../reducers/user.js';
import Router from "next/router"
import { Name_Check } from '../../reducers/product'



const Join = (data) => {
    const [checkBox1, setCheckBox1] = useState(false)
    const [checkBox2, setCheckBox2] = useState(false)
    const [checkBox3, setCheckBox3] = useState(false)
    const [images, setImages] = useState();
    const [imgUrl, setimgUrl] = useState();
    const dispatch = useDispatch()
    const state_data = useSelector(state => state.product)
    const { name_check } = state_data

    const nickname = useInput('');
    const email = useInput('');
    const handleSumit = () => {
        if (window.klaytn.selectedAddress == undefined) {
            alert("새로고침 후 진행해 주세요")
        } else {
            const wallet = window.klaytn.selectedAddress
            const formData = new FormData();
            formData.append("image", images)
            formData.append("nickname", nickname.value)
            formData.append("email", email.value)
            formData.append("wallet", wallet)


            dispatch(UserJoin_REQUEST(formData))
            Router.push('/')
        }
    }

    const checking = async (e) => {
        let name = {
            name: e
        }
        dispatch(Name_Check(name))
    }
    const hadleCheck1 = () => {
        setCheckBox1(!checkBox1)
    }
    const hadleCheck2 = () => {
        setCheckBox2(!checkBox2)
    }
    const hadleCheck3 = () => {
        setCheckBox3(!checkBox3)
    }
    const handleImg = async (event) => {
        const img = event.target.files[0];
        if(img !== undefined){
            setImages(img)
            const imageUrl = URL.createObjectURL(img)
            console.log(imageUrl);
            setimgUrl(imageUrl)
            console.log(imgUrl);
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
                <Container>

                    <h1>회원가입</h1>
                    <Circle>
                        {images !== undefined ?
                            <label htmlFor="profile">
                                  <img src={imgUrl}/>
                            </label>
                            :
                            <label htmlFor="profile" >
                                <CameraAltIcon />
                            </label>}

                        <input
                            accept='image/*'
                            type="file"
                            className="file_select_input"
                            onChange={handleImg}
                            id="profile"
                            style={{ display: "none" }}
                        />
                    </Circle>

                    <Small_Contain>
                        <label htmlFor="nickname" >닉네임</label>
                        <span>* 5~20자의 한글, 영문 대소문자, 숫자, 특수기호(_),(-),(.)만 사용 가능합니다.</span>
                        <CustomInput {...nickname} length="20" func={checking} msg="닉네임을 입력해 주세요" type="text" id="nickname" placeholder="닉네임을 입력해주세요" />
                    </Small_Contain>
                    {name_check !== '' ? name_check == true ? <span style={{ color: 'blue' }}>사용할수있는 닉네임 입니다.</span> : <span style={{ color: "red" }}>사용할수없는 닉네임 입니다.</span> : ''}
                    <Small_Contain>
                        <label htmlFor="email_address">이메일 주소</label>
                        <CustomInput {...email} length="30" msg="이메일을 입력해 주세요" id="email_address" placeholder="이메일을 입력해주세요" />


                    </Small_Contain>
                    <Check_Content>
                        <input type="checkbox" id="age" onChange={hadleCheck1} /> &nbsp;
                        <label htmlFor="age">만 19세 이상입니다.</label>
                    </Check_Content>
                    <Check_Content>
                        <input type="checkbox" id="law" onChange={hadleCheck2} /> &nbsp;
                        <label htmlFor="law">(필수) <a>서비스 이용약관</a>에 동의합니다.</label>
                    </Check_Content>
                    <Check_Content>
                        <input type="checkbox" id="agrry" onChange={hadleCheck3} /> &nbsp;
                        <label htmlFor="agrry">(필수) <a>개인정보 수집 및 이용</a>에 동의합니다.</label>
                    </Check_Content>
                    <Line />
                    <Btn_Box>
                        <Button value="취소" url="/" />
                        {checkBox1 && checkBox2 && checkBox3 && name_check && email.value !== '' ? <Button value="회원가입" color="sky" func={handleSumit} /> : ''}

                    </Btn_Box>
                    &nbsp;


                </Container>
                <Copyed>Copyright © 2021 GroundX.All rights reserved.</Copyed>


            </Wrap>

        </>
    )
}

export default Join

