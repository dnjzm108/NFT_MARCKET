import styled from "styled-components"
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
import { Icon_Close } from '../pages/user/login.css'
import { Small_Contain } from '../pages/user/join.css'
import { Middle_btn, Small_btn } from './btn.jsx';
// import {StyledButton} from './Button/Button.css';
import { Popup_background } from "./wrap/popup_background";
import { Container } from "./form/Container";
import { Middle_Input, Small_Input } from "./input";

export const Delivery_address = () => {

    return (
        <>
            <Popup_background>
                <Container>
                    <Icon_Close>
                        <Link href="/">
                            <CloseIcon color="disabled" sx={{ fontSize: 55 }} />
                        </Link>
                    </Icon_Close>
                    <h1>배송 주문</h1>

                    <form action="">
                        <Table>
                            <tr>
                                <td>상품명</td>
                                <td>람보르기니</td>
                            </tr>
                            <tr>
                                <td>주문자</td>
                                <td>정성진</td>
                            </tr>
                            <tr>
                                <td>수령인</td>
                                <td>
                                    <Small_Input />
                                </td>
                            </tr>
                            <tr>
                                <td>요청 사항</td>
                                <td>
                                    <Small_Input />
                                </td>
                            </tr>
                            <tr>
                                <td>수령 방법</td>
                                <td>
                                    <input type="radio" name="receive" /> 문앞
                                    <input type="radio" name="receive" /> 경비실
                                    <input type="radio" name="receive" /> 택배함
                                    <input type="radio" name="receive" /> 기타 <input type="text" />
                                </td>
                            </tr>
                            <tr>
                                <td>주소</td>
                                <td>
                                    <input type="text" name="" id="" />
                                    <button>주소 검색</button>
                                    <input type="text" name="" id="" />
                                    <input type="text" name="" id="" />
                                </td>
                            </tr>
                        </Table>

                        <Middle_btn type="submit">배송주문</Middle_btn>

                    </form>

                </Container>
            </Popup_background>
        </>
    )
}


const Table = styled.table`
&{
    width: 100%;
    border: 1px solid #000000;
    box-sizing: border-box;
}

& > tr{
    width: 300px;
    height: 100%;
    border: 1px solid black;
    /* box-sizing: border-box; */
}
& > tr > td:nth-child(1){
    width: 30%;
    height: 50px;
    /* border-right: 2px solid blue;
    border-bottom: 2px solid blue; */
    box-sizing: border-box;
}
& > tr > td:nth-child(2){
   text-align:center;
}
& > tr:nth-child(6) > td:nth-child(2) > input:nth-child(1){
    display: inline-block;
    width: 145px;
    height: 20px;
    margin: 0 auto;
}
& > tr:nth-child(6) > td:nth-child(2) > input:nth-child(4){
    display: block;
    width: 200px;
    height: 20px;
    margin: 0 auto;
}
& > tr:nth-child(6) > td:nth-child(2) > input:nth-child(3){
    display: block;
    width: 200px;
    height: 20px;
    margin: 0 auto;
}
`

// const Middle_Input = styled.div`
// & {
//     margin: 40px auto 0;
//     height: 100px;
// }
// & > label{
//     font-weight: 700;
//     font-size: 20px;
//     color: #2d3741;
//     display: block;
//     float: left;
//     /* margin: 0 0 20px 0; */
// }

// & > input{
//     display: inline-block;
//     width: 300px;
//     /* height: calc(1.75em + 1.25rem + 2px); */
//     padding: .625rem .75rem;
//     box-sizing: border-box;
//     font-size: 1rem;
//     font-weight: 400;
//     line-height: 1.75;
//     color: #495057;
//     background-color: #fff;
//     background-clip: padding-box;
//     border: 1px solid #ced4da;
//     border-radius: .25rem;
// }
//`