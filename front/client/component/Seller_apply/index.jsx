import { Popup_background } from "../Wrap/Popup_Background";
import { Container } from "../Form/Container";
import { Icon_Close } from "../Login/Login.css";
import CloseIcon from '@mui/icons-material/Close';
import { Underline, Table, Btn_Box } from './seller_apply.css'
import { useSelector } from 'react-redux'
import Link from "next/link";
import Input from "../input";
import Button from '../Button';
import useInput from "../../hooks/useInput";

const Seller_Apply = () => {
    const data = useSelector(state => state.user)
    const info = data.user_info

    const sell_number = useInput()
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
                                <td>{info.nickname}</td>
                            </tr>
                            <tr>
                                <td>이메일</td>
                                <td>|</td>
                                <td>{info.email}</td>
                            </tr>
                            <tr>
                                <td>지갑주소</td>
                                <td>|</td>
                                <td>{info.wallet}</td>
                            </tr>

                        </Table>
                    </div>
                    <from>
                        <h1>사업자 등록 번호</h1>
                        <Underline />
                        <Input {...sell_number} />
                        <Btn_Box>
                            <Button value="신청하기" url="/" />
                        </Btn_Box>

                    </from>
                </Container>

            </Popup_background>
        </>
    )
}

export default Seller_Apply