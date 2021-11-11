import styled from "styled-components"


export const Notice_Wrap = styled.div`
&{
 padding-top: 80px;
 box-sizing: border-box;
}

&>div{
    width: 700px;
    margin: 50px auto 0;
    border: 1px solid #000000;
    padding: 20px;
    box-sizing: border-box;
}

`

export const Table = styled.table`
&>tr>td:nth-child(1){
    padding: 10px;
    box-sizing: border-box;
}
&>tr>td:nth-child(2){
    padding: 10px;
    box-sizing: border-box;
}

&>tr>td>img{
    width: 15px;
    height: 15px;
}
`

export const Under_line = styled.div`
width:30%;
height: 1px;
border-bottom: 1px solid #000000;
margin: 10px 0;
`


export const Btn_Box = styled.p`
    width: 110px;
    margin: 20px auto ;
    display: block;
    padding: 0 auto;
`