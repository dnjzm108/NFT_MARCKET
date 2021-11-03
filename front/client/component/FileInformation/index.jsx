import { StyledFileInformation,ImageContent,CloseButton  } from "./FileInformation.css.jsx";
import { useState } from "react"
import axios from "axios"

const FileInformation = ({
    titleValue,
    titleChange ,
    descriptionValue,
    descriptionChange
    }) => {
    async function postImage({image, description,title}) {
        const formData = new FormData();
        for(let i = 0; i<image.length; i++){
          formData.append("image",image[i])
        }
        formData.append("description", description)
        formData.append("title",title)
        const result = await axios.post('http://localhost:4000/nft/mint', formData, { headers: {'Content-Type': 'multipart/form-data'}})
        console.log(result)
        return result.data
      }
    

      const [file, setFile] = useState([])
    const [images, setImages] = useState([])

    const submit = async event => {
        event.preventDefault()
        const result = await postImage({ image: file, description:description,title:title })
        // setImages([result.image, ...images])
    }

    const fileSelected = event => {
        const newfiles = [];
        for (let i = 0; i < event.target.files.length; i++) {
            newfiles.push(event.target.files[i])
        }
        setFile(newfiles)
        console.log(newfiles)
    }

    return(
        <StyledFileInformation>
            <form onSubmit={submit}>
                <div className="img_box">
                    <p> 이미지 / 영상 파일을 드래그하여 업로드하거나 </p>
                    <button type="submit"><label htmlFor="click_submit">파일선택</label></button>
                    
                    {/* image */}
                    <input
                    accept='image/*'
                    type="file"
                    className="file_select_input"
                    multiple
                    onChange={fileSelected}
                    id="click_submit"
                    >
                    </input>
                    <div className="imagecon">
                        {/* <img src={myImage}/> */}
                        {images.map(image => (
                            <div key={image}>
                                <img src={image}></img>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="information_input">
                    {/* title */}
                    <p>이름</p>
                    <input type="text" 
                    value={titleValue}
                    onChange={()=>titleChange()}
                    className="name_input" 
                    placeholder="이름을 입력해주세요. (최대 50자까지)" 
                    required />
                    {/* description */}
                    <p>설명</p>
                    <textarea 
                    rows="6" 
                    value={descriptionValue}
                    onChange={()=>descriptionChange()}
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