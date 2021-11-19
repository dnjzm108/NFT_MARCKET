import { Notice_Wrap, Under_line, Table, Btn_Box } from "./Notice_Delivery.css"
import Navigation from '../Navigation';
import Button from '../Button'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { url } from "../../saga/url"
import {Notice_Info} from '../../reducers/product'
import { useDispatch,useSelector } from "react-redux";
import Loadding from "../Loadding";



const Notice_Delivery = () => {
    const product_data = useSelector(state => state.product)
    const notice_info = product_data.notice_info[0]
    const dispatch = useDispatch()
    const router = useRouter()
    const { id } = router.query
    const data = {
        order_id : id
    }
    let status = '대기중'
    if(notice_info !== undefined){
        if(notice_info.status == 'wait'){
            status = '상품준비중'
        }else if(notice_info.status == 'ready'){
            status = '상품준비중'
        }else if(notice_info.status == 'ship'){
            status = '배송중'
        }else if(notice_info.status == 'completed'){
            status = '구매완료'
        }

    }
    
    useEffect(async()=>{
        if (id != undefined) {
            dispatch(Notice_Info(data))
        }
    },[id])

    if(notice_info == undefined){
        return(
            <Loadding />
        )
    }

    return (
        <>
            <Navigation />

            <Notice_Wrap>

                <div>
                    <h1>배송 정보</h1>
                    <Under_line />
                    <div>
                        <Table>
                            <tbody>
                            <tr>
                                <td>주문번호</td>
                                <td>| </td>
                                <td>{notice_info.dlvy_id}</td>
                            </tr>
                            <tr>
                                <td>상태</td>
                                <td>| </td>
                                <td>{status}</td>
                            </tr>
                            <tr>
                                <td>운송장</td>
                                <td>| </td>
                                <td>
                                    {notice_info.invocie == undefined ? '배송준비 중입니다.' : 
                                    notice_info.invocie +":"+ notice_info.delievry_compony}</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

                <div>
                    <h1>상품 정보</h1>
                    <Under_line />
                    <div>
                        <Table>
                            <tbody>
                            <tr>
                                <td>상품명</td>
                                <td>| </td>
                                <td>{notice_info.name}</td>
                            </tr>
                            <tr>
                                <td>상품가격</td>
                                <td>| </td>
                                <td><img src="/klay.png" alt="" /> {notice_info.price}</td>
                            </tr>
                            <tr>
                                <td>결제방법</td>
                                <td>| </td>
                                <td>kaikas</td>
                            </tr>
</tbody>
                        </Table>
                    </div>
                </div>

                <div>
                    <h1>주문자 정보</h1>
                    <Under_line />
                    <div>
                        <Table>
                            <tbody>
                            <tr>
                                <td>주문자</td>
                                <td>| </td>
                                <td>{notice_info.buyer}</td>
                            </tr>
                            <tr>
                                <td>수령인</td>
                                <td>| </td>
                                <td>{notice_info.reciever}</td>
                            </tr>
                            <tr>
                                <td>주소</td>
                                <td>| </td>
                                <td>{notice_info.address}</td>
                            </tr>
                            <tr>
                                <td>전화번호</td>
                                <td>| </td>
                                <td>{notice_info.phone_number}</td>
                            </tr>
                            <tr>
                                <td>요청사항</td>
                                <td>| </td>
                                <td>{notice_info.request}</td>
                            </tr>
                            </tbody>
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