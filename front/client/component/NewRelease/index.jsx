import { StyledNewRelease } from "./newrelease.css";

const NewRelease = () => {
    const handleChange=()=>{
        return "hi"
    }
    return (
        <StyledNewRelease>
            <div className="subject">
                <h2>새로운 NFT 발행하기</h2>
                <p>파일 업로드</p>
                {/* <input type="file" value="파일업로드" onChange = {handleChange.bind(this)}/> */}
                <span className="intro">
                    NFT에 넣을 이미지 / 영상 파일을 업로드해주세요.
                    최대 10MB까지 업로드할 수 있으며, 지원하는 파일 포맷은 아래와 같습니다. <br />
                    - 이미지 : PNG , JPG , JPEG , GIF , WEBP (가로 세로 사이즈 600px 이상) <br />
                    - 영상: MP4 (가로 세로 사이즈 600px 이상)
                </span>
                
            </div>
        </StyledNewRelease>
    )
}

export default NewRelease