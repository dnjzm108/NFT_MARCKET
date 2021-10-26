import { StyledFileInformation } from "./FileInformation.css.jsx";

const FileInformation = () => {
    return(
        <StyledFileInformation>
            <div className="img_box">
                <p> 이미지 / 영상 파일을 드래그하여 업로드하거나 </p>
                <button> 파일선택 </button>
                <input // 얘 display none 해놓음 
                    accept=".png, .jpg, .jpeg, .gif, .webp, .mp4"
                    type="file"
                    className="file_select_input" /> 
                    
            </div>
            <div className="information_input">
                <p>이름</p>
                <input type="text" className="name_input" placeholder="이름을 입력해주세요. (최대 50자까지)" />
                <p>설명</p>
                <textarea rows="6" className="explain_box" placeholder="설명을 입력해주세요"></textarea>
                {/* <input type="text" className="explain_input" placeholder="설명을 입력해주세요." /> */}
            </div>
        </StyledFileInformation>
    )
}

export default FileInformation