import { Popup_background } from "../Wrap/Popup_Background"
import CloseIcon from '@mui/icons-material/Close';
import { StyledNowPopup } from "./Product_Detail.css"
import Button from "../Button"
import CustomInput from "../CustomInput"
import useInput from "../../hooks/useInput";
import { useDispatch, useSelector } from 'react-redux';
import Router from "next/router";
import {Apply_Auction} from '../../reducers/product'
import { User_Logout } from '../../reducers/user'
import { sendToken } from '../../hook/sendToken'

const AucPopup = (props) => {
    const state_data = useSelector(state => state.user)
    const {user_info} = state_data
    const product_state = useSelector(state => state.product)
    const {auction_info,product_info,auction_history} = product_state;
    const bid_price = useInput()
    const dispatch = useDispatch()

    const logout = () =>{
        dispatch(User_Logout())
    }

    const applyAuction = async () => {

        const histoty_data = {
            product_no: product_info[0].product_no,
            auction_id: auction_info.auction_id,
            bider: user_info.nickname,
            bid: bid_price.value,
            option:auction_info.option,
            deadline:auction_info.deadline,
            auction_history_id:auction_history[0].auction_history_id,
            auth:user_info.auth,
            nickname:user_info.nickname
        }
        if (user_info.nickname == undefined) {
            return alert("로그인을 진행해 주세요")
        } else {
            if (auction_history[0].bid == null) {
                if (bid_price.value <= product_info[0].price || bid_price.value == undefined) {
                    alert("최소 입찰가 이상으로 입력해 주세요")
                } else {
                    let payment = await sendToken(bid_price.value,logout)
                    console.log(payment);
                     if (payment !== undefined) {
                         dispatch(Apply_Auction(histoty_data))
                         props.handlePopup()
                     }
                }
            } else {
                if (bid_price.value <= auction_history[0].bid || bid_price.value == undefined) {
                    alert("최소 입찰가 이상으로 입력해 주세요")
                } else {
                    let payment = await sendToken(bid_price.value,logout)
                    console.log(payment);
                     if (payment !== undefined) {
                         dispatch(Apply_Auction(histoty_data))
                         props.handlePopup()
                     }
                }
            }
        }
    }
    return (
        <Popup_background>
            <StyledNowPopup>
                <div className="purchase_box">
                    <div className="x" onClick={() => props.handlePopup()}>
                        <CloseIcon />
                    </div>
                    <h1>경매 주문서</h1>
                    {/* <p>제품명</p> <span></span>
                    <p>가격</p> <span></span> */}
                    <ul>
                        <li>제품명 <span>{product_info[0].name}</span></li>
                        <li>컬러 <span>{product_info[0].color}</span></li>
                        <li>사이즈 <span>{product_info[0].size}</span></li>
                        <li>최소 입찰가  <span>
                            {
                                auction_history[0].bid !== null ?
                                auction_history[0].bid : product_info[0].price
                            }
                        </span> 이상으로 입력해주세요</li>
                        <li> 입찰금액 <span><CustomInput {...bid_price} type="number" msg="입찰가를 입력해 주세요" /></span></li>
                    </ul>
                    <div className="flex_contain">
                        <Button value="주문 취소" func={() => props.handlePopup()} />
                        <Button value="주문 하기" color="blue" func={() => applyAuction()} />
                    </div>
                </div>
            </StyledNowPopup>
        </Popup_background>
    )

}

export default AucPopup