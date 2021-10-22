import styled from "styled-components"
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
import {Icon_Close} from '../pages/user/login.css'
import {Small_Contain} from '../pages/user/join.css'
import { Middle_btn,Small_btn} from './btn.jsx';


export const Delivery_address = () => {

    return (
        <>
            <Container>

            <Icon_Close>
                        <Link href="/">
                            <CloseIcon color="disabled" sx={{ fontSize: 55 }} />
                        </Link>
                    </Icon_Close>
                    <h1>배송 받을 주소</h1>
                    <form action="">
                    <Middle_Input>
                        <label htmlFor="zip_code">우편번호</label>
                    <input type="text" id="zip_code"/> 
                    {/* <Middle_btn>우편번호 조회</Middle_btn> */}
                    </Middle_Input>
                    <Small_Contain>
                        <label htmlFor="address">주소</label>
                    <input type="text" id="address" />
                    {/* <label htmlFor="detail_address">상세주소</label> */}
                    <input type="text" id="detail_address" />
                    </Small_Contain>
                   <Middle_btn type="submit">배송주문</Middle_btn>

                    </form>
                    
            </Container>
        </>
    )
}



const Container = styled.div`
&{
    width: 720px;
    padding: 120px;
    box-sizing:border-box;
    background-color: #fff;
    box-shadow: 0 4px 8px rgb(0 0 0 / 8%);
    border-radius: 16px;
    position: absolute;
    margin: 5vh auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align:center;
}
`

const Middle_Input = styled.div`
& {
    margin: 40px auto 0;
    height: 100px;
}
& > label{
    font-weight: 700;
    font-size: 20px;
    color: #2d3741;
    display: block;
    float: left;
    /* margin: 0 0 20px 0; */
}

& > input{
    display: inline-block;
    width: 300px;
    /* height: calc(1.75em + 1.25rem + 2px); */
    padding: .625rem .75rem;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.75;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
}
`