import { Notice_Wrap, Under_line, Table, Btn_Box } from "./Notice_Delivery.css"
import Navigation from '../Navigation';
import Button from '../Button'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { url } from "../../saga/url"



const Notice_Delivery = () => {
    const router = useRouter()
    const { id } = router.query
    const data = {
        order_id : id
    }
    
    const [info,setInfo] = useState('')

    useEffect(async()=>{
        if (id != undefined) {
            let result = await axios.post(`${url}/product/notice_order`, data)
            setInfo(result.data[0])
        }
    },[id])

    return (
        <>
            <Navigation />

            <Notice_Wrap>

                <div>
                    <h1>배송 정보</h1>
                    <Under_line />
                    <div>
                        <Table>
                            <tr>
                                <td>주문번호</td>
                                <td>| </td>
                                <td>{info.dlvy_id}</td>
                            </tr>
                            <tr>
                                <td>상태</td>
                                <td>| </td>
                                <td>{info.status}</td>
                            </tr>
                            <tr>
                                <td>운송장</td>
                                <td>| </td>
                                <td>{info.invocie} : {info.delievry_compony}</td>
                            </tr>
                        </Table>
                    </div>
                </div>

                <div>
                    <h1>상품 정보</h1>
                    <Under_line />
                    <div>
                        <Table>
                            <tr>
                                <td>상품명</td>
                                <td>| </td>
                                <td>{info.name}</td>
                            </tr>
                            <tr>
                                <td>상품가격</td>
                                <td>| </td>
                                <td><img src="/klay.png" alt="" /> {info.price}</td>
                            </tr>
                            <tr>
                                <td>결제방법</td>
                                <td>| </td>
                                <td>kaikas</td>
                            </tr>

                        </Table>
                    </div>
                </div>

                <div>
                    <h1>주문자 정보</h1>
                    <Under_line />
                    <div>
                        <Table>
                            <tr>
                                <td>주문자</td>
                                <td>| </td>
                                <td>{info.buyer}</td>
                            </tr>
                            <tr>
                                <td>수령인</td>
                                <td>| </td>
                                <td>{info.reciever}</td>
                            </tr>
                            <tr>
                                <td>주소</td>
                                <td>| </td>
                                <td>{info.address}</td>
                            </tr>
                            <tr>
                                <td>전화번호</td>
                                <td>| </td>
                                <td>{info.phone_number}</td>
                            </tr>
                            <tr>
                                <td>요청사항</td>
                                <td>| </td>
                                <td>{info.request}</td>
                            </tr>
                        </Table>
                    </div>
                </div>
                <Btn_Box>

                    <Button value="메인으로" url="/" />
                </Btn_Box>
            </Notice_Wrap>
        </>

    )
}

export default Notice_Delivery