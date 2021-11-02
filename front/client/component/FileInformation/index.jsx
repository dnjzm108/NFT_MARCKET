import { StyledFileInformation,ImageContent,CloseButton  } from "./FileInformation.css.jsx";


const FileInformation = (props) => {

    return(
        <StyledFileInformation>
            <form>
                <div className="img_box">
                    <p> 이미지 / 영상 파일을 드래그하여 업로드하거나 </p>
                    <button><label htmlFor="click_submit">파일선택</label></button>
                    
                    {/* image */}
                    <input
                    accept='image/*'
                    type="file"
                    className="file_select_input"
                    multiple
                    onChange={(e)=>{props.handleImg(e)}}
                    id="click_submit"
                    >
                    </input>
                    {/* <div className="imagecon">
                        <img src={myImage}/>
                        {images.map(image => (
                            <div key={image}>
                                <img src={image}></img>
                            </div>
                        ))}
                    </div> */}
                </div>
                <div className="information_input">
                    {/* title */}
                    <p>이름</p>
                    <input type="text" 
                    defaultValue={props.title}
                    onChange={(e)=>{props.setTitle(e)}}
                    className="name_input" 
                    placeholder="이름을 입력해주세요. (최대 50자까지)" 
                    required />
                    {/* description */}
                    <p>설명</p>
                    <textarea 
                    rows="6" 
                    defaultValue ={props.description}
                    onChange={(e)=>{props.setDescription(e)}}
                    className="explain_box" 
                    placeholder="설명을 입력해주세요" 
                    required></textarea>
                    {/* <input type="text" className="explain_box" placeholder="설명을 입력해주세요." /> */}
                </div>
            </form>
        </StyledFileInformation>
    )
}

export default FileInformation