import styled from "styled-components";

export const StyledAgreeInfo = styled.div`
width: 100%;
height: 600px;
border-top: 1px solid #d5d5d5;
margin-top: 10%;

.agree_section{
    margin-top: 10%;
}

.agree_section>div>label>h3{
    display: inline-block;
    padding: 1%;
}

.agree_section>div>span{
    display: block;
    background: #f0f9ff;
    padding: 2%;
    line-height: 200%;
    margin-top: 18px;
}


.agree_section>div:nth-child(2){
    margin-top: 10%;
}
.agree_section>div:nth-child(3){
    margin-top: 8%;
}

.release_btn{
    margin-top: 10%;
    display: flex;
    justify-content: center;
}

.bottom_contain{
    height: 200px;
}
`
