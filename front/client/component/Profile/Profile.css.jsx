import styled from "styled-components";

export const ProfileStyled = styled.div`
  &{
    width: 100vw;
    margin: 50px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;    
    text-align :center ;
    margin-right: 100px;
}


&>div>img{
    width: 130px;
    height: 130px;
    overflow: hidden;
    border: 1px solid rgb(229, 232, 235);
    border-radius: 50%;
    padding: 4px;
}

.btn{
    display: flex;
    margin-left: 40px;
}

.btn_edit{
    display: flex;
    margin-left: 120px;
}
.URL{
        color: grey;
        cursor: pointer;
    }
    .URL:hover{
        color: black;
    }

.seller_title{
    display: flex;
    margin-left: 100px;
    justify-content: center;
}

.verified{
    display: none;
    color: #3a84fb;
}

.need_verified{
    color:red;
}

.input-file-button{
  padding: 6px 25px;
  cursor: pointer;
}

`

export const StyleTd = styled.div`
    margin-top: 20px;
`

export const StyledBox = styled.div`
    margin-left: 56px;;
`

export const CameraAlt = styled.div`
    width: 120px;
    height: 120px;
`


export const Contain = styled.div`
& {
    margin: 70px auto;
}
& > label{
    font-weight: 700;
    font-size: 20px;
    color: #2d3741;
    display: inline-block;
    float: left;
    margin: 0 0 20px 0;
}

& > td{
    font-size: 12px;
    line-height: 20px;
    color: rgba(45,55,65,.7);
    float: right;
    display: inline-block;
    margin-left: 20px;
}

& > input{
    display: block;
    width: 100%;
    height: calc(1.75em + 1.25rem + 2px);
    padding: .625rem .75rem;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.75;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
}
`

