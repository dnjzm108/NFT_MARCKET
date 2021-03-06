import { useEffect } from "react";
import { StyledFileInformation, StyledNewRelease, Styled_Slide } from "./FileInformation.css.jsx";

const FileInformation = (props) => {

    const handleForm = (e) => {
        e.preventDefault();
    }


    return (
        <StyledFileInformation>
            <StyledNewRelease>
                <div className="subject">
                    <p>파일 업로드</p>
                    <span className="intro">
                        NFT에 넣을 이미지 파일을 업로드해주세요.
                        최대 10MB까지 업로드할 수 있으며, 지원하는 파일 포맷은 아래와 같습니다. <br />
                        -  PNG , JPG , JPEG , GIF , WEBP<br />
                        -  3 x 4 비율을 권장합니다.
                    </span>
                </div>
            </StyledNewRelease>
            <form onSubmit={handleForm}>
                <div className="img_box">
                    <p> 이미지 파일을 업로드 </p>
                    <label htmlFor="click_submit"><div>파일선택</div></label>

                    {/* image */}
                    <input
                        accept='image/*'
                        type="file"
                        className="file_select_input"
                        multiple
                        onChange={(e) => { props.handleImg(e) }}
                        id="click_submit"
                    >
                    </input>
                </div>

               
                <div className="information_input">
                    {/* title */}
                    <p>이름</p>
                    <input type="text"
                        defaultValue={props.name}
                        onChange={(e) => { props.setName(e) }}
                        className="name_input"
                        placeholder="이름을 입력해주세요. (최대 50자까지)" />

                    {/* 심볼 */}
                    <p>SYMBOL</p>
                    <h3>* 해당 nft를 줄여 부를 때 사용됩니다. ex ) eth , klay (최대 10자까지) </h3>
                    <input type="text"
                        defaultValue={props.symbol}
                        onChange={(e) => { props.setSymbol(e) }}
                        className="symbol_input"
                        placeholder="심볼을 입력해주세요" />

                    {/* description */}
                    <p>설명</p>
                    <textarea
                        rows="6"
                        defaultValue={props.explain}
                        onChange={(e) => { props.setExplain(e) }}
                        className="explain_box"
                        placeholder="설명을 입력해주세요"></textarea>
                    {/* <input type="text" className="explain_box" placeholder="설명을 입력해주세요." /> */}
                </div>
            </form>

        </StyledFileInformation>
    )
}

export default FileInformation