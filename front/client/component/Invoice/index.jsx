import Link from "next/link";
import { Popup_background } from "../Wrap/Popup_Background";
import { Container } from "../Form/Container";
import { Icon_Close } from "../Login/Login.css"
import CloseIcon from '@mui/icons-material/Close';
<<<<<<< HEAD
import {Info_Container,Input_Invoice} from './Invoice.css'
import { Big_Input, Middle_Input } from "../input";
import { Middle_btn, Big_btn } from "../btn"
=======
import {Info_Container,Input_Invoice,Table} from './Invoice.css'
 import Input from "../input";
import Button from '../Button';
>>>>>>> ffbb04157976f49f68763062219cfac787120375

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
                            <div>
                                <img src="/logo.png" alt="" />
                                </div>
                            <Table>
                                <tr>
                                    <td>상품명</td>
                                    <td>|</td>
                                    <td>람보르기니</td>
                                </tr>
                                <tr>
                                    <td>주문자</td>
                                    <td>|</td>
                                    <td>정성진</td>
                                </tr>
                                <tr>
                                    <td>주문번호</td>
                                    <td>|</td>
                                    <td>A18478014</td>
                                </tr>
                                
                            </Table>
                        </div>

                    </Info_Container>

                    <Input_Invoice>
                        <h2>송장 번호</h2>
                        <Input width="80%"></Input>

                        <Button value="송장 입력" url="/" />
                    </Input_Invoice>


                </Container>
            </Popup_background>
        </>
    )
}

