import { Test_style,styledTd, styledRow, styledWrap } from "./test.css";
import { Middle_btn, Small_btn } from "../btn";
import CameraAlt from "@mui/icons-material/CameraAlt";
import {Circle} from "../../component/Join/Join.css";
import { StyleTd } from "../mypage/Profile.css";
import Button from "../Button"

const myNFT = () => {
    return ( 
        <>
            <styledWrap>
                
                    <Test_style>
                    <div>
                    <Circle><CameraAlt/></Circle>
                <h1>네이선드레이크</h1>
                <StyleTd/>
                <h4>0xbf39ac77b62577d4c8e9c16f278b1c05e87d17e5</h4>
                <StyleTd/>
                <Button value='프로필 편집' url='/user/Profile_edit' ml={120} mb={50} color="sky" size='small' />
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
            </styledWrap>
        </>
    );
    
}


export default myNFT;