import { Test_style,styledTd, styledRow, styledWrap,StyleTd } from "./MyInfo.css";
import CameraAlt from "@mui/icons-material/CameraAlt";
import {Circle} from "../../component/Join/Join.css";
import Button from "../Button"
import { CopyToClipboard } from "react-copy-to-clipboard";


const MyInfo = () => {

    const WalletUrl = "0xbf39ac77b62577d4c8e9c16f278b1c05e87d17e5"

    return ( 
        <>
                    <Test_style>
                    <div>
                    <Circle><CameraAlt/></Circle>
                <h1>네이선드레이크</h1>
                <i class="fas fa-exclamation-triangle"></i>
                <StyleTd/>
                <CopyToClipboard text={WalletUrl}>
                <td className="URL">0xbf39ac77b62577d4c8e9c16f278b1c05e87d17e5</td>
                </CopyToClipboard>
                <StyleTd/>
                <div className="btn">
                    <Button value='판매자 등록신청' url='/user/info' ml={100} mb={50} color="sky" size='small' />
                </div>
                    </div>
                    </Test_style>
                
                {/* <styledRow>
                    <tr className="mynft_tab">
                        <td className="active">소유한 NFT</td>
                        <td className="text-right">
                            <div className="txt">
                            * KrafterSpace에서 발행된 NFT만 표시됩니다.
                            </div>
                            <button type="button">최근 받은 순</button>
                        </td>
                    </tr>
                </styledRow> */}
        </>
    );
    
}


export default MyInfo;