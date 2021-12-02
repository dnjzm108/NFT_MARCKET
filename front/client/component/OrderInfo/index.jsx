
import { Popup_background } from "../Wrap/Popup_Background";
import { Container } from "../Form/Container";
import { Icon_Close } from "../Login/Login.css"
import CloseIcon from '@mui/icons-material/Close';
import {Info_Container,Input_Invoice,Table} from './OrderInfo.css'
 import CustomInput from "../CustomInput";
import { useDispatch, useSelector } from "react-redux";
import {multipFloat} from '../../util/float'
const OrderInfo = (props) => {
    const dispatch=useDispatch()
    const {user_info} = useSelector(state=>state.user)
    const {list} = useSelector(state=>state.mylist);
    const target = list.filter(v=>v.order_id==props.order_id)[0]


    return (
        <>
            <Popup_background>
                <Container>
                    <Icon_Close>
                            <CloseIcon color="disabled" sx={{ fontSize: 55 }} onClick={() => props.handleOrderPopUp(false)}/>
                    </Icon_Close>

                    <Info_Container>
                        <h1>주문서</h1>
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
                                    <td>{target.order_price}</td>
                                </tr>
                                <tr>
                                    <td>주문량</td>
                                    <td>|</td>
                                    <td>{target.qty}</td>
                                </tr>
                                <tr>
                                    <td>가격*주문량</td>
                                    <td>|</td>
                                    <td>{multipFloat([target.qty,target.order_price])}</td>
                                </tr>
                                <tr>
                                    <td>주문자</td>
                                    <td>|</td>
                                    <td>{user_info.nickname}</td>
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

                </Container>
            </Popup_background>
        </>
    )
}

export default OrderInfo;

