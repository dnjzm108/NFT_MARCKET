import { StyledFileInformation } from "./FileInformation.css.jsx";
import { useState } from "react"

const FileInformation = () => {
    const [imgBase64, setImgBase64] = useState("");
    const [file,setFile] = useState(null)
    const [fileBase,setFileBase] = useState(file)
    const [imgFile, setImgFile] = useState(null);
    
    // const uploadImage =(e)=>{
    //     const formData = new FormData();
    //     formData.append("file",e.target.files[0]);
    //     const 
    // }

    const handleChangeFile = (event) => {
        let reader = new FileReader();
    
        reader.onloadend = () => {
          // 2. 읽기가 완료되면 아래코드가 실행됩니다.
          const base64 = reader.result;
          if (base64) {
            setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
          }
        }
        if (event.target.files[0]) {
          reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
          setImgFile(event.target.files[0]); // 파일 상태 업데이트
        }
      }

    const handleChange=(e)=>{
        // console.log(e)
        // alert('hi')
        e.preventDefault();
        const { files } = e.target;
        if(files.length+file.length>10){
            alert(" 올릴수 있는 이미지는 최대 10장입니다 ")
        }else{
            for(let i=0; i<files.length; i++){
                if(files[i]){
                    setFile(newFile=>[...newFile,files[i]])
                    let reader = new FileReader()
                    reader.readAsDataURL(files[i])
                    reader.onloadend = () => {
                        const base64 = reader.result
                        if (base64) {
                            let base64Sub = base64.toString()
                            setFileBase(imgBase64 => [...imgBase64, base64Sub])
                        }
                    }
                }
            }
        }
    }

    return(
        <StyledFileInformation>
            <div className="img_box">
                <p> 이미지 / 영상 파일을 드래그하여 업로드하거나 </p>
                <button> 파일선택 </button>
                
                    
                    <input // 얘 display none 해놓음 
                        // accept=".png, .jpg, .jpeg, .gif, .webp, .mp4"
                        accept='image/*'
                        type="file"
                        name="imgFile" id="imgFile"
                        className="file_select_input"
                        multiple
                        onChange={handleChangeFile}
                    />
                    <div className="imagecon">
                    {/* {fileBase.map((item,key)=>{
                    return(
                        <ImageContent key={key}>
                            <img 
                            src={item}
                        />
                        </ImageContent>
                    )
                })} */}
                    </div>
                
                    
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