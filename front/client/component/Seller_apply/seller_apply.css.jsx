import styled from 'styled-components'


export const Underline = styled.div`
 width: 40%;
 border-bottom: 1px solid #000000;
 margin: 0 auto 15px;
 padding: 5px 0;
`

export const Table = styled.table`
&{
    display: inline-block;
    width: 100%;
    /* height: 120px; */
    /* border: 1px solid #000000; */
    padding: 10px 10% ;
    box-sizing: border-box;
}

& > tr{
    padding: 10px;
}
&>tr>td:nth-child(2){
    padding:  5px;
    box-sizing: border-box;
}
`

export const Btn_Box = styled.div`
&{
    margin: 10px 0;
    display: flex;
    justify-content: center;
}
`