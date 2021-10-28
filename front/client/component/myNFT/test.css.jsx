import styled from "styled-components";

export const Test_style = styled.div`
    &{width: 100vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 120px;   
    text-align :center ;
    height: 50%;
    }
    
.btn{
    display: flex;
}
.URL{
    color: grey;
}
.URL:hover{
    color: black;
    cursor: pointer;
}
`
export const styledTd = styled.div`
    margin-top:22px;
`

export const styledWrap = styled.div`
    width: 100%;
    height: 100%;
`

export const styledRow = styled.div`
    width: 80%;
    height: 50%;
    color:rgba(45,55,65,.7);

& > .text-right{
    float: right;
}
`

    

