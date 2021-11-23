import { Popup_background } from "../Wrap/Popup_Background";
import { Container } from "../Form/Container";
import { Icon_Close } from "../Login/Login.css";
import CloseIcon from '@mui/icons-material/Close';
import { Underline, Table, Btn_Box } from './seller_apply.css'
import { useSelector, useDispatch } from 'react-redux'
import Link from "next/link";
import CustomInput from "../CustomInput";
import Button from '../Button';
import useInput from "../../hooks/useInput";
import { Seller_Apply_Request } from "../../reducers/user"

const Seller_Apply = (props) => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.user)
    const { nickname, auth } = data.user_info
    const info = data.user_info

    const sell_number = useInput()

    const handleapply = () => {
        if (sell_number.value == undefined) {
            alert('사업자 번호를 입력해 주세요')
        } else {
            let info = {
                nickname,
                auth,
                seller_no: sell_number.value,

            }
            dispatch(Seller_Apply_Request(info))
            props.close()
        }

    }

    return (
        <>
            <Popup_background>
                <Container>
                    <Icon_Close onClick={props.close}>
                        <CloseIcon color="disabled" sx={{ fontSize: 55 }} />
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
                        <CustomInput {...sell_number} />
                        <Btn_Box>
                            <Button value="신청하기" func={handleapply} />
                        </Btn_Box>

                    </from>
                </Container>

            </Popup_background>
        </>
    )
}

export default Seller_Apply