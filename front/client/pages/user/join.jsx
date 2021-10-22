
import Link from 'next/link'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Middle_btn, Small_btn } from '../../component/btn.jsx';
import { Logo,Circle,Copyed,Joinwrap ,Small_Contain,Check_Content,Line} from './join.css.jsx'
import { Wrap } from '../../component/wrap/popup_back.jsx';

const Join = () => {
    return (
        <>
            <Joinwrap>
                <Logo>로고 들어갈 자리</Logo>

                <form action="">
                    <h1>회원가입</h1>
                    <Circle> <CameraAltIcon /> </Circle>

                    <Small_Contain>
                        <label htmlFor="nickname">닉네임</label> 
                        <td>* 5~20자의 한글, 영문 대소문자, 숫자, 특수기호(_),(-),(.)만 사용 가능합니다.</td>
                        <input type="text" id="nickname" placeholder="닉네임을 입력해주세요" />
                    </Small_Contain>
                    <Small_Contain>
                        <label htmlFor="wallet_address">지갑주소</label>
                        <input type="text" id="wallet_address" placeholder="ex) 0x65abe502ea9bcec46ed174543df1537f5378eaaa" />
                    </Small_Contain>
                    <Small_Contain>
                        <label htmlFor="email_address">이메일 주소</label>
                        <input type="text" id="email_address" placeholder="이메일을 입력해주세요" />
                    </Small_Contain>
                    <Check_Content>
                        <input type="checkbox" id="age" /> &nbsp;
                        <label htmlFor="age">만 19세 이상입니다.</label>
                    </Check_Content>
                    <Check_Content>
                        <input type="checkbox" id="law" /> &nbsp;
                        <label htmlFor="law">(필수) <Link href='/'><a>서비스 이용약관</a></Link>에 동의합니다.</label>
                    </Check_Content>
                    <Check_Content>
                        <input type="checkbox" id="agrry" /> &nbsp;
                        <label htmlFor="agrry">(필수) <Link href='/'><a>개인정보 수집 및 이용</a></Link>에 동의합니다.</label>
                    </Check_Content>
                    <Line/>

                    <Small_btn>
                    <Link href="/">
                    <a>취소</a>
                    </Link>
                    </Small_btn> &nbsp;
                    <Middle_btn type ="submit"> 회원가입</Middle_btn>

                </form>

                <Copyed>Copyright © 2021 GroundX.All rights reserved.</Copyed>


            </Joinwrap>

        </>
    )
}

export default Join

