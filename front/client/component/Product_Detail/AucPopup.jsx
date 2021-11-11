import { Popup_background } from "../wrap/popup_background"
import CloseIcon from '@mui/icons-material/Close';
import { StyledNowPopup } from "./Product_Detail.css"
import Button from "../Button"
import Input from "../Input"
import useInput from "../../hooks/useInput";
import { useSelector } from 'react-redux';
import axios from "axios";
import { url } from "../../saga/url";

const AucPopup = (props) => {
    const state_data = useSelector(state => state.user)
    const bid_price = useInput()
    let { product, auction_data } = props
    console.log(props);

    const applyAuction = async () => {

        const histoty_data = {
            auction_id: auction_data[0].auction_id,
            bider: state_data.user_info.nickname,
            bid: bid_price.value,
            auction_history_id:auction_data[0].auction_history_id
        }
        if (state_data.user_info.nickname == undefined) {
            return alert("로그인을 진행해 주세요")
        } else {
            console.log(state_data.user_info.nickname);
            if (auction_data[0].bid == null) {
                if (bid_price.value < product[0].price || bid_price.value == undefined) {
                    alert("최소 입찰가 이상으로 입력해 주세요")
                } else {
                    let result = await axios.post(`${url}/product/applyauction`,histoty_data)
                    console.log(result);
                }
            } else {
                if (bid_price.value < auction_data[0].bid || bid_price.value == undefined) {
                    alert("최소 입찰가 이상으로 입력해 주세요")
                } else {

                    let result = await axios.post(`${url}/product/applyauction`,histoty_data)
                    console.log(result);
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
                        <li>제품명 <span>{product[0].name}</span></li>
                        <li>컬러 <span>{product[0].color}</span></li>
                        <li>사이즈 <span>{product[0].size}</span></li>
                        <li>최소 입찰가  <span>
                            {
                                auction_data[0].bid !== null ?
                                    auction_data[0].bid : product[0].price
                            }
                        </span> 이상으로 입력해주세요</li>
                        <li> 입찰금액 <span><Input {...bid_price} type="number" msg="입찰가를 입력해 주세요" /></span></li>
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