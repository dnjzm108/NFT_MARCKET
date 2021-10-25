import Link from "next/link";
import { Popup_background } from "./wrap/popup_background";
import { Container } from "./form/Container";
import { Icon_Close } from "../pages/user/login.css"
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components'
import { Big_Input, Middle_Input } from "./input";
import { Middle_btn, Big_btn } from "./btn"

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

                    <Info_container>
                        <h1>상품 정보</h1>
                        <div>
                            <div>img</div>
                            <div>
                                <h2>상품명</h2>
                                <h2>정보</h2>
                            </div>
                        </div>

                    </Info_container>

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

const Info_container = styled.div`
&{
    text-align:cneter;
    width: 100%;
    border: 1px solid #000000;

}
& >div{
    width: 100%;
    padding: 20px;
    border: 1px solid #000000;
}
& > div > div:nth-child(1){
    display: inline-block;
    width: 80px;
    height: 80px;
    float: left;
    border: 1px solid #000000;
}
& >div >div:nth-child(2){
    display: inline-block;
    width: 70%;
    height: 100px;
    border: 1px solid #000000;
}
`

const Input_Invoice = styled.div`
&{
    width:100%;
    border: 1px solid #000000;
}
`