import Link from "next/link";
import { Popup_background } from "../Wrap/Popup_Background";
import { Container } from "../Form/Container";
import { Icon_Close } from "../Login/Login.css"
import CloseIcon from '@mui/icons-material/Close';
import {Info_Container,Input_Invoice,Table} from './Invoice.css'
 import CustomInput from "../CustomInput";
import Button from '../Button';
import useInput from "../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import {UpdateInvoiceRequest} from '../../reducers/mylist'
const Invoice = (props) => {
    const dispatch=useDispatch()
    const {user_info} = useSelector(state=>state.user)
    const {list} = useSelector(state=>state.mylist);
    const target = list.filter(v=>v.order_id==props.order_id)[0]
    const invoice_number = useInput('')
    const dlvyCompany = useInput('')
    const handleInvoiceInfo = () =>{
        const data={
            nickname:user_info.nickname,
            auth:user_info.auth,
            invoice:invoice_number.value,
            delivery_company:dlvyCompany.value,
            order_id:props.order_id,
        }
        dispatch(UpdateInvoiceRequest(data))
        props.handleInvoicePopUp(false)
    }

    return (
        <>
            <Popup_background>
                <Container>
                    <Icon_Close>
                            <CloseIcon color="disabled" sx={{ fontSize: 55 }} onClick={() => props.handleInvoicePopUp(false)}/>
                    </Icon_Close>

                    <Info_Container>
                        <h1>상품 정보</h1>
                        <div>
                            <div>
                                <img src={target.img} alt="" />
                                </div>
                            <Table>
                                <tbody>
                                <tr>
                                    <td>상품명</td>
                                    <td>|</td>
                                    <td>{target.name}</td>
                                </tr>
                                <tr>
                                    <td>주문번호</td>
                                    <td>|</td>
                                    <td>{target.order_id}</td>
                                </tr>
                                <tr>
                                    <td>색상</td>
                                    <td>|</td>
                                    <td>{target.color}</td>
                                </tr>
                                <tr>
                                    <td>사이즈</td>
                                    <td>|</td>
                                    <td>{target.size}</td>
                                </tr>
                                <tr>
                                    <td>가격</td>
                                    <td>|</td>
                                    <td>{target.price}</td>
                                </tr>
                                <tr>
                                    <td>주문자</td>
                                    <td>|</td>
                                    <td>{target.buyer}</td>
                                </tr>
                                <tr>
                                    <td>수령인</td>
                                    <td>|</td>
                                    <td>{target.reciever}</td>
                                </tr>
                                <tr>
                                    <td>주소</td>
                                    <td>|</td>
                                    <td>{target.address}</td>
                                </tr>
                                <tr>
                                    <td>수령방법</td>
                                    <td>|</td>
                                    <td>{target.recieve_type}</td>
                                </tr>
                                <tr>
                                    <td>요청사항</td>
                                    <td>|</td>
                                    <td>{target.request==="null" ? "-" : target.request}</td>
                                </tr>
                                <tr>
                                    <td>전화번호</td>
                                    <td>|</td>
                                    <td>{target.phone_number}</td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>

                    </Info_Container>

                    <Input_Invoice>
                        <h2>송장 번호</h2>
                        <CustomInput {...invoice_number} length="50" placeholder='송장번호를 입력해주세요.' width="80%"/>
                        <h2>배송사</h2>
                        <CustomInput {...dlvyCompany} length="20" placeholder='배송사를 입력해주세요.' width="80%"/>

                        <Button value="송장 입력" func={handleInvoiceInfo} />
                    </Input_Invoice>


                </Container>
            </Popup_background>
        </>
    )
}

export default Invoice;

