import { Popup_background } from "../wrap/popup_background"
import CloseIcon from '@mui/icons-material/Close';
import {StyledNowPopup} from "./Product_Detail.css"
import Button from "../Button"
import { useSelector } from 'react-redux';

const NowPopup = (props) => {
    const state_data = useSelector(state => state.user)
    const {product,select_qty,option} = props;

  

    return (
        <Popup_background>
            <StyledNowPopup>
                <div className="purchase_box">
                    <div className="x" onClick={()=>props.handlePopup()}>
                    <CloseIcon />
                    </div>
                    <h1>즉시구매 주문서</h1>
                    {/* <p>제품명</p> <span></span>
                    <p>가격</p> <span></span> */}
                    <ul>
                        <li>제품명 <span>{product[option].name}</span></li>
                        <li>컬러 <span>{product[option].color}</span></li>
                        <li>사이즈 <span>{product[option].size}</span></li>
                        <li>수량 <span>{select_qty}</span></li>
                        <li>결제금액  <span><img src="/perro.png" alt="" />{product[option].price*select_qty}</span></li>
                    </ul>
                    <div className="flex_contain">
                        <Button value="주문 취소" func={()=>props.handlePopup()} />
                        <Button value="주문 하기" color="blue" />
                    </div>
                </div>
            </StyledNowPopup>
        </Popup_background>
    )
}

export default NowPopup