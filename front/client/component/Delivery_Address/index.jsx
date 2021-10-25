import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
import { Icon_Close } from '../Login/Login.css'
import { Small_Contain } from '../Join/Join.css'
import { Middle_btn, Small_btn } from '../Btn';
// import {StyledButton} from './Button/Button.css';
import { Popup_background } from "../Wrap/Popup_Background";
import { Container } from "../form/Container";
import { Middle_Input, Small_Input } from "../input";
import {Table} from './Delivery_Address.css'

export const Delivery_Address_Component = () => {
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
