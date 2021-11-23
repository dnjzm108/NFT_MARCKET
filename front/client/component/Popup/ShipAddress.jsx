import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
import { Icon_Close } from '../Login/Login.css'
import { Popup_background } from "../Wrap/Popup_Background";
import { Container } from "../Form/Container";
import CustomInput from "../CustomInput";
import Button from '../Button';
import { Table, AddressFind, Center, Subject } from './Popup.css'
import { useSelector,useDispatch } from 'react-redux'
import PopupDom from '../Delivery_Address/PopupDom'
import PopupPostCode from '../Delivery_Address/PopupPostCode';
import { useState } from 'react';
import useInput from '../../hooks/useInput';
import {UpdateShipRequest} from '../../reducers/mylist'

const ShipAddress = ({handleShipPopUp}) => {
  const dispatch = useDispatch()
  const {user_info} = useSelector(state => state.user)
  const {order} = useSelector(state=>state.mylist)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [address, setaddress] = useState('')
  const [postNumber, setpostNumber] = useState('')
  const [recieveType, setRecieveType] = useState('')
  const Phonenumber = useInput()
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
      if (!Recipient.value || !recieveType || !Phonenumber.value || !address_detail.value || !address) {
        alert('빈칸을 확인해주세요')
      } else {
        const ship_info = {
            nickname:user_info.nickname,
            auth:user_info.auth,
          reciever: Recipient.value,
          recieve_type: recieveType,
          phone_number: Phonenumber.value,
          address: address+' '+address_detail.value,
          order_id: order.order_id,
          }
          dispatch(UpdateShipRequest(ship_info))
          handleShipPopUp(false);
          }
      }
  return (
      <>
          <Popup_background>
              <Container>
                  <Icon_Close>
                      <CloseIcon color="disabled" sx={{ fontSize: 55 }} onClick={() => handleShipPopUp(false)} />
                  </Icon_Close>
                  <Subject> 배송지 입력 </Subject>

                  <Table>
                    <tbody>
                      <tr>
                          <td>상품명</td>
                          <td>{order.name}</td>
                      </tr>
                      <tr>
                          <td>컬러</td>
                          <td>{order.color}</td>
                      </tr>
                      <tr>
                          <td>사이즈</td>
                          <td>{order.size}</td>
                      </tr>
                      <tr>
                          <td>수량</td>
                          <td>{order.qty}</td>
                      </tr>
                      <tr>
                          <td>가격</td>
                          <td>{order.order_price}</td>
                      </tr>
                      <tr>
                          <td>결제금액</td>
                          <td style={{display:'flex', alignItems:'center', justifyContent:'center'}}><img src="/klay.png" alt="" /> {order.order_price * order.qty}</td>
                      </tr>

                      <tr>
                          <td>주문자</td>
                          <td>{user_info.nickname}</td>
                      </tr>
                      <tr>
                          <td>수령인</td>
                          <td>
                              <CustomInput {...Recipient} placeholder="수령인을 적어주세요" msg="수령인을 적어주세요"  length={"30"}/>
                          </td>
                      </tr>
                      <tr>
                          <td>요청 사항</td>
                          <td>
                              <CustomInput {...requirement} placeholder="요청 사항을 적어주세요" length={"256"}/>
                          </td>
                      </tr>
                      <tr>
                          <td>수령 방법</td>
                          <td>
                              <input type="radio" name="receive" onClick={receive} value="문앞" /> 문앞
                              <input type="radio" name="receive" onClick={receive} value="경비실" /> 경비실
                              <input type="radio" name="receive" onClick={receive} value="택배함" /> 택배함
                              <input type="radio" name="receive" onClick={receive} value="기타" /> 기타   <CustomInput {...other} length={"20"}/>
                          </td>
                      </tr>
                      <tr>

                          <td>주소</td>
                          {/* <Button value="주소찾기" func={()=> setIsPopupOpen(true)}/> */}
                          <td>
                              {address !== '' ? <h3>우편번호</h3> : ''}
                              <div>{postNumber}</div>
                              {address}
                              {address !== '' ? <CustomInput {...address_detail} length={"200"} placeholder="상세주소를 입력해 주세요" /> : ''}
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
                          <td><CustomInput {...Phonenumber} length={"20"} placeholder=" - 빼고 입력해 주세요" /></td>
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

export default ShipAddress;