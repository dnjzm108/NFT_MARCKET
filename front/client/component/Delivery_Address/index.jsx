import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
import { Icon_Close } from '../Login/Login.css'
import { Popup_background } from "../Wrap/Popup_Background";
import { Container } from "../Form/Container";
import Input from "../input";
import Button from "../Button"
import { Table, AddressFind, Center,Subject } from './Delivery_Address.css'
import { useSelector } from 'react-redux'
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';
import { useState } from 'react';
import useInput from '../../hooks/useInput';

export const Delivery_Address_Component = () => {
    const data = useSelector(state => state.user)

    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [address, setaddress] = useState('')
    const [postNumber, setpostNumber] = useState('')

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

    return (
        <>
            <Popup_background>
                <Container>
                    <Icon_Close>
                        <Link href="/">
                            <CloseIcon color="disabled" sx={{ fontSize: 55 }} />
                        </Link>
                    </Icon_Close>
                    <Subject>배송 주문</Subject>

                    <form action="">
                        <Table>
                            <tr>
                                <td>상품명</td>
                                <td>람보르기니</td>
                            </tr>
                            <tr>
                                <td>주문자</td>
                                <td>{data.user_info.nickname}</td>
                            </tr>
                            <tr>
                                <td>수령인</td>
                                <td>
                                    <Input {...Recipient} placeholder="수령인을 적어주세요" msg="수령인을 적어주세요" />
                                </td>
                            </tr>
                            <tr>
                                <td>요청 사항</td>
                                <td>
                                    <Input {...requirement} placeholder="요청 사항을 적어주세요" />
                                </td>
                            </tr>
                            <tr>
                                <td>수령 방법</td>
                                <td>
                                    <input type="radio" name="receive" /> 문앞
                                    <input type="radio" name="receive" /> 경비실
                                    <input type="radio" name="receive" /> 택배함
                                    <input type="radio" name="receive" /> 기타   <Input {...other} />
                                </td>
                            </tr>
                            <tr>

                                <td>주소</td>
                                {/* <Button value="주소찾기" func={()=> setIsPopupOpen(true)}/> */}
                                <td>
                                    {address !== '' ? <h3>우편번호</h3> : ''}
                                    <div>{postNumber}</div>
                                    {address}
                                    {address !== '' ? <Input {...address_detail} placeholder="상세주소를 입력해 주세요" /> : ''}
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
                                <td><Input {...Ponenumber} placeholder=" - 빼고 입력해 주세요" /></td>
                            </tr>
                        </Table>

                        <Center>
                            <Button value="주문 하기" color="sky" url="/" />
                        </Center>
                    </form>


                </Container>
            </Popup_background>
        </>
    )
}




