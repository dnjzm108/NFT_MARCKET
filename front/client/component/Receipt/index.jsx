
import { Popup_background } from "../Wrap/Popup_Background";
import { Container } from "../Form/Container";
import { Icon_Close } from "../Login/Login.css"
import CloseIcon from '@mui/icons-material/Close';
import {Info_Container,Input_Invoice,Table} from './Receipt.css'
 import CustomInput from "../CustomInput";
import { useDispatch, useSelector } from "react-redux";
import {multipFloat} from '../../util/float'
import Link from "next/link";
import Loadding from "../Loadding";
const Receipt = (props) => {
    const dispatch=useDispatch()
    const {user_info} = useSelector(state=>state.user)
    const {receipt} = useSelector(state=>state.mylist);
    

    const renderNFTaddress = () =>{
        return receipt.tokenId.map((v,i)=>{
            return (<tr key={i}>
                                    <td>NFT-{i+1}</td>
                                    <td>|</td>
                                    <td><a href={`https://baobab.scope.klaytn.com/nft/${receipt.contractAddr}/${v}?tabId=nftTransfer`} target='_blank'>{receipt.name+'-'+v}</a></td>
                                    </tr>)
                                
        })
    }

    if(receipt==null){
        return <Loadding></Loadding>
    }
    return (
        <>
            <Popup_background>
                <Container>
                    <Icon_Close>
                            <CloseIcon color="disabled" sx={{ fontSize: 55 }} onClick={() => props.handleReceiptPopUp(false)}/>
                    </Icon_Close>

                    <Info_Container>
                        <h1>영수증</h1>
                        <div>
                            <div>
                                <img src={receipt.img} alt="" />
                                </div>
                            <Table>
                                <tbody>
                                <tr>
                                    <td>상품명</td>
                                    <td>|</td>
                                    <td>{receipt.name}</td>
                                </tr>
                                <tr>
                                    <td>주문번호</td>
                                    <td>|</td>
                                    <td>{receipt.order_id}</td>
                                </tr>
                                <tr>
                                    <td>색상</td>
                                    <td>|</td>
                                    <td>{receipt.color}</td>
                                </tr>
                                <tr>
                                    <td>사이즈</td>
                                    <td>|</td>
                                    <td>{receipt.size}</td>
                                </tr>
                                <tr>
                                    <td>가격</td>
                                    <td>|</td>
                                    <td>{receipt.price}</td>
                                </tr>
                                <tr>
                                    <td>주문량</td>
                                    <td>|</td>
                                    <td>{receipt.qty}</td>
                                </tr>
                                <tr>
                                    <td>가격*주문량</td>
                                    <td>|</td>
                                    <td>{multipFloat([receipt.qty,receipt.price])}</td>
                                </tr>
                                <tr>
                                    <td>주문자</td>
                                    <td>|</td>
                                    <td>{receipt.buyer}</td>
                                </tr>
                                <tr>
                                    <td>주문일</td>
                                    <td>|</td>
                                    <td>{new Date(receipt.ready_date).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>배송일</td>
                                    <td>|</td>
                                    <td>{new Date(receipt.ship_date).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>구매 확정일</td>
                                    <td>|</td>
                                    <td>{new Date(receipt.complete_date).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>판매자 txhash</td>
                                    <td>|</td>
                                    <td><a href={`https://baobab.scope.klaytn.com/tx/${receipt.transactionHash}?tabId=inputData`} target='_blank'>확인하기</a></td>
                                </tr>
                                <>
                                {renderNFTaddress()}
                                </>
                                </tbody>
                            </Table>
                        </div>

                    </Info_Container>

                </Container>
            </Popup_background>
        </>
    )
}

export default Receipt;

