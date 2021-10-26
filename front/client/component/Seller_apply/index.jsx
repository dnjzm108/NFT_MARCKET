import { Popup_background } from "../Wrap/Popup_Background";
import { Container } from "../Form/Container";
import { Icon_Close } from "../Login/Login.css";
import CloseIcon from '@mui/icons-material/Close';
import { Underline, Table, Btn_Box } from './seller_apply.css'
import Link from "next/link";
import Input from "../input";
import Button from '../Button';

const Seller_Apply = () => {

    return (
        <>
            <Popup_background>
                <Container>
                    <Icon_Close>
                        <Link href="/">
                            <CloseIcon color="disabled" sx={{ fontSize: 55 }} />
                        </Link>
                    </Icon_Close>

                    <div>
                        <h1>신청자 정보</h1>
                        <Underline />
                        <Table>
                            <tr>
                                <td>신청자</td>
                                <td>|</td>
                                <td>정성진</td>
                            </tr>
                            <tr>
                                <td>이메일</td>
                                <td>|</td>
                                <td>jin@naver.com</td>
                            </tr>
                            <tr>
                                <td>지갑주소</td>
                                <td>|</td>
                                <td>0x129423601f8023409f</td>
                            </tr>

                        </Table>
                    </div>
                    <from>
                        <h1>사업자 등록 번호</h1>
                        <Underline />
                        <Input />
                        <Btn_Box>
                            <Button value="신청하기" />
                        </Btn_Box>

                    </from>
                </Container>

            </Popup_background>
        </>
    )
}

export default Seller_Apply