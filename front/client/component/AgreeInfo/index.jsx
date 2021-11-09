import { StyledAgreeInfo } from "./AgreeInfo.css"
import Button from "../Button"
import { useState } from "react";


const AgreeInfo = ({handleSubmit,handleAgree}) => {
    return(
        <StyledAgreeInfo>
            <div className="agree_section">
                <div>
                    <input type="checkbox" id="agreeInfo" onChange={()=>{handleAgree(0)}}/>
                    <label htmlFor ="agreeInfo" ><h3>본인은 NFT 발행을 위해 아래 정보를 수집 및 이용하는 것에 동의합니다.</h3></label>
                    <span>
                    - 수집항목: NFT 이름, 설명, 파일 (이미지 등)
                    - 수집목적: NFT 발행 및 관리<br/>
                    - 보유 및 이용기간: 영구 (규정위반, 요청 시 파기)
                    - 동의를 거부할 경우 NFT 발행할 수 없습니다.
                    </span>
                </div>
                <div>
                    <input type="checkbox" id="agreeCaution" onChange={()=>{handleAgree(1)}}/>
                    <label htmlFor ="agreeCaution" ><h3 >본인은 아래 유의사항을 꼼꼼히 확인하였으며, 이를 준수하는데 동의합니다.</h3></label>
                    <span>
                    1. 본인은 제3자의 지적재산권, 인권, 개인정보 등 타인의 권리를 침해하지 않습니다.<br/>
                    2. 본인은 본인의 개인정보를 활용하는 경우 본인의 개인정보가 제3자에게 공개, 활용, 제공 등이 될 수 있음을 인지하며 이에 동의합니다.<br/>
                    3. 본인은 이용약관 및 운영정책에 반하는 NFT를 발행하지 않으며 발행하는 NFT에 대한 모든 책임은 본인에게 있음을 확인하고 동의합니다.<br/>
                    4. 본인은 NFT에 부적절한 이미지나 영상이 포함될 경우 고지 없이 삭제될 수 있음을 인지하며 이에 동의합니다.
                    </span>
                </div> 
            </div>
            <div className="release_btn">
                <Button value="취소 하기" color="white" className="cancel" />
                <Button value="상품 등록" color="blue" className="go" ml="50"  
                func={handleSubmit}/>
            </div>
            <div className="bottom_contain"></div>
        </StyledAgreeInfo>
    )
}

export default AgreeInfo