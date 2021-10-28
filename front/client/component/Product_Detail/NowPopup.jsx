import { Popup_background } from "../wrap/popup_background"
import CloseIcon from '@mui/icons-material/Close';
import {StyledNowPopup} from "./Product_Detail.css"
import Button from "../Button"

const NowPopup = (props) => {
    
    return (
        <Popup_background>
            <StyledNowPopup>
                <div className="purchase_box">
                    <div className="x" onClick={()=>props.handlePopup()}>
                    <CloseIcon />
                    </div>
                    <h1>주문서</h1>
                    {/* <p>제품명</p> <span></span>
                    <p>가격</p> <span></span> */}
                    <ul>
                        <li>제품명 <span>sgss</span></li>
                        <li>가격 <span>5325</span></li>
                    </ul>
                    <div className="flex_contain">
                        <Button value="주문 취소" />
                        <Button value="주문 하기" color="blue" />
                    </div>
                </div>
            </StyledNowPopup>
        </Popup_background>
    )
}

export default NowPopup