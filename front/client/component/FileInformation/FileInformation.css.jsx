import styled from "styled-components";

export const StyledFileInformation = styled.div`
.img_box{
    margin-top: 2%;
    width: 840px;
    height: 260px;
    border: 1px dashed #bdbdbd;
    text-align: center;
    box-sizing: border-box;
}

.img_box>p{
    font-weight: lighter;
    margin-top: 10%;
    font-size: 20px;
}

.img_box> button{
    display: inline-block;
    background: #1d5ddf;
    color: white;
    width: 170px;
    height: 50px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    text-align: center;
    margin-top: 30px;
    transition: .1s ease-in-out;
}

.img_box> button:hover{
    cursor: pointer;
    background: white;
    border: .5px solid #1d5ddf;
    color: #1d5ddf;
}

.file_select_input{
    display: none;
}

.information_input{
    margin-top: 6%;
}

.information_input>p{
    margin: 4% 0 10px 0;
    font-size: 20px;
    font-weight: bold;
}

.information_input> input,textarea{
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    width: 840px;
    height: 50px;
    padding: 1%;
}

.explain_box{
    height: 180px;
}


.imagecon>img{
    width: 150px;
    height: 200px;
    background-color: #efefef;
    box-sizing: border-box;
}
`

export const ImageContent=styled.div`
    
    display: flex;
    img{
    width: 150px;
    height: 200px;
    background-color: #efefef;
    box-sizing: border-box;
    display: flex;
    }
`

export const CloseButton=styled.div`

`