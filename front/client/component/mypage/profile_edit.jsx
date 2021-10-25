import { useState } from "react";
import { Small_btn, Middle_btn } from "../btn";
import CameraAlt from "@mui/icons-material/CameraAlt";
import {Circle} from "../../pages/user/join.css"
import { ProfileStyled,StyleTd,Contain } from "./Profile.css";
import Navigation from "../NavBigation";
import Link from "next/link";



const Profile_edit = () => {
    return (
        <>
        <Navigation/>
        <ProfileStyled>
        <div>
        <h1>프로필 편집</h1>
        <Circle><CameraAlt/></Circle>
        <StyleTd/>
        <Contain>
        <label htmlFor="nickname">닉네임</label>
        <td className="text-right">* 5~20자의 한글, 영문 대소문자, 숫자, 특수기호(_),(-),(.)만 사용 가능합니다.</td>
        <input type="text" id="nickname" placeholder="닉네임을 입력해주세요" />
        </Contain>
        <Contain>
        <label htmlFor="email_address">이메일 주소</label>&nbsp;
        <input type="text" id="email_address" placeholder="이메일을 입력해주세요" />
        </Contain>
        <Middle_btn type="submit">
                        <Link href="/">
                        변경사항 저장
                        </Link>
                    </Middle_btn>&nbsp;
        <Small_btn type="submit">
                        <Link href="/">
                        취소
                        </Link>
                    </Small_btn>;
        </div>
        </ProfileStyled>
        </>
    );
}

export default Profile_edit;