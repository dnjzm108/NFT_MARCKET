import Link from "next/link";
import { Popup_background } from "../Wrap/Popup_Background";
import { Container } from "../Form/Container";
import { Icon_Close } from "../Login/Login.css"
import CloseIcon from '@mui/icons-material/Close';
<<<<<<< HEAD:front/client/component/Invoice.jsx
import styled from 'styled-components'
import { Big_Input, Middle_Input } from "./input2";
import { Middle_btn, Big_btn } from "./btn"
=======
import {Info_Container,Input_Invoice} from './Invoice.css'
import { Big_Input, Middle_Input } from "../input";
import { Middle_btn, Big_btn } from "../btn"
>>>>>>> 2c7a5859ef9df7a9a0889a11f57fca1081d5cb55:front/client/component/Invoice/index.jsx

export const Invoice = () => {
    return (
        <>
            <Popup_background>
                <Container>
                    <Icon_Close>
                        <Link href="/">
                            <CloseIcon color="disabled" sx={{ fontSize: 55 }} />
                        </Link>
                    </Icon_Close>

                    <Info_Container>
                        <h1>상품 정보</h1>
                        <div>
                            <div>img</div>
                            <div>
                                <h2>상품명</h2>
                                <h2>정보</h2>
                            </div>
                        </div>

                    </Info_Container>

                    <Input_Invoice>
                        <h2>송장 번호</h2>
                        <Big_Input></Big_Input>
                        <Big_btn>송장 입력</Big_btn>
                    </Input_Invoice>


                </Container>
            </Popup_background>
        </>
    )
}

