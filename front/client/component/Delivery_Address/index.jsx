import CloseIcon from '@mui/icons-material/Close';
import { Icon_Close } from '../Login/Login.css'
import { Popup_background } from "../Wrap/Popup_Background";
import { Container } from "../Form/Container";
import CustomInput from "../CustomInput";
import Button from '../Button';
import { Table, AddressFind, Center, Subject } from './Delivery_Address.css'
import { useSelector } from 'react-redux'
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';
import { useState } from 'react';
import useInput from '../../hooks/useInput';
import Router from "next/router"
import {useDispatch} from 'react-redux'
import {Apply_Immy} from '../../reducers/product'
import { useEffect } from 'react';

const Delivery_Address_Component = (props) => {
    const data = useSelector(state => state.user)
    const product_data = useSelector(state => state.product)
    const {notice_page , product_info} = product_data
    const { select_qty, option } = props;
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [address, setaddress] = useState('')
    const [postNumber, setpostNumber] = useState('')
    const [recieveType, setRecieveType] = useState('')
    
    const dispatch = useDispatch()
    const Ponenumber = useInput()
    const address_detail = useInput()
    const Recipient = useInput()
    const requirement = useInput()
    const other = useInput()

    const openPostCode = () => {
        setIsPopupOpen(true)
    }
    // 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }
    const receive = (e) => {
        setRecieveType(e.target.value)
    }

    const handleOrder = async () => {
        if (Recipient.value !== undefined && recieveType !== undefined && Ponenumber.value !== undefined && address_detail.value !== undefined && address !== '') {
            const order_info = {
                product_id: product_info[option].product_id,
                price: product_info[option].price,
                buyer: data.user_info.nickname,
                qty: select_qty,
                product_no: product_info[option].product_no,
                reciever: Recipient.value,
                request: requirement.value,
                recieve_type: recieveType+','+other.value,
                phone_number: Ponenumber.value,
                address: address + address_detail.value,
                rest: product_info[option].rest,
                leftover: product_info[option].leftover
            }
             dispatch(Apply_Immy(order_info))
             
            } else {
                alert('빈칸을 확인해주세요')
            }
        }
        useEffect(()=>{
            if(notice_page !== ''){
                
                Router.push(`/notice/${notice_page}`)
            }

    },[notice_page])

    return (
        <>
            <Popup_background>
                <Container>
                    <Icon_Close>
                        <CloseIcon color="disabled" sx={{ fontSize: 55 }} onClick={() => props.handlePopup()} />
                    </Icon_Close>
                    <Subject> 주문서 </Subject>

                    <Table>
                        <tbody>
                        <tr>
                            <td>상품명</td>
                            <td>{product_info[option].name}</td>
                        </tr>
                        <tr>
                            <td>컬러</td>
                            <td>{product_info[option].color}</td>
                        </tr>
                        <tr>
                            <td>사이즈</td>
                            <td>{product_info[option].size}</td>
                        </tr>
                        <tr>
                            <td>수량</td>
                            <td>{select_qty}</td>
                        </tr>
                        <tr>
                            <td>결제금액</td>
                            <td><img src="/klay.png" alt="" /> {product_info[option].price * select_qty}</td>
                        </tr>

                        <tr>
                            <td>주문자</td>
                            <td>{data.user_info.nickname}</td>
                        </tr>
                        <tr>
                            <td>수령인</td>
                            <td>
                                <CustomInput {...Recipient} length="20" placeholder="수령인을 적어주세요" msg="수령인을 적어주세요" />
                            </td>
                        </tr>
                        <tr>
                            <td>요청 사항</td>
                            <td>
                                <CustomInput {...requirement} length="20" placeholder="요청 사항을 적어주세요" />
                            </td>
                        </tr>
                        <tr>
                            <td>수령 방법</td>
                            <td>
                                <input type="radio" name="receive" onClick={receive} value="문앞" /> 문앞
                                <input type="radio" name="receive" onClick={receive} value="경비실" /> 경비실
                                <input type="radio" name="receive" onClick={receive} value="택배함" /> 택배함
                                <input type="radio" name="receive" onClick={receive} value="기타" /> 기타   <CustomInput length="20"{...other} />
                            </td>
                        </tr>
                        <tr>

                            <td>주소</td>
                            {/* <Button value="주소찾기" func={()=> setIsPopupOpen(true)}/> */}
                            <td>
                                {address !== '' ? <h3>우편번호</h3> : ''}
                                <div>{postNumber}</div>
                                {address}
                                {address !== '' ? <CustomInput {...address_detail} length="20" placeholder="상세주소를 입력해 주세요" /> : ''}
                                <AddressFind type='button' onClick={openPostCode}>주소 찾기</AddressFind>
                                <div id='popupDom'>
                                    {isPopupOpen && (
                                        <PopupDom>
                                            <PopupPostCode onClose={closePostCode} address={address} setaddress={setaddress} setpostNumber={setpostNumber} />
                                        </PopupDom>
                                    )}
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td>전화번호</td>
                            <td><CustomInput {...Ponenumber}  length="12" placeholder=" - 빼고 입력해 주세요" /></td>
                        </tr>
                        </tbody>
                    </Table>


                    <Center>
                        <Button func={handleOrder} value="주문 하기" color="sky" />
                    </Center>



                </Container>
            </Popup_background>
        </>
    )
}


export default Delivery_Address_Component

