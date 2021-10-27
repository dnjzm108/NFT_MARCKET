import { Notice_Wrap, Under_line, Table, Btn_Box } from "./Notice_Delivery.css"
import Navigation from '../Navigation';
import Button from '../Button'

const Notice_Delivery = () => {
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
                                <td>A12937123909</td>
                            </tr>
                            <tr>
                                <td>상태</td>
                                <td>| </td>
                                <td>배송 준비중</td>
                            </tr>
                            <tr>
                                <td>운송장</td>
                                <td>| </td>
                                <td>182931741029418409 : 한진택배</td>
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
                                <td>맥북 프로 512GB</td>
                            </tr>
                            <tr>
                                <td>상품가격</td>
                                <td>| </td>
                                <td>100 클레이튼</td>
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
                                <td>정성진</td>
                            </tr>
                            <tr>
                                <td>수령인</td>
                                <td>| </td>
                                <td>정성진</td>
                            </tr>
                            <tr>
                                <td>주소</td>
                                <td>| </td>
                                <td>서울 어딘가</td>
                            </tr>
                            <tr>
                                <td>전화번호</td>
                                <td>| </td>
                                <td>01023422342</td>
                            </tr>
                            <tr>
                                <td>요청사항</td>
                                <td>| </td>
                                <td>빨리 가져다 주세요</td>
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