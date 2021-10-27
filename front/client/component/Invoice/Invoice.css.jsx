import styled from 'styled-components'

export const Info_Container = styled.div`
&{
    text-align:cneter;
    width: 100%;
    border: 1px solid #000000;

}
& >div{
    width: 100%;
    padding: 20px 0 10px 20px;
    border-top: 1px solid #000000;
}
& > div > div:nth-child(1){
    display: inline-block;
    width: 120px;
    height: 100px;
    float: left;
    border: 1px solid #000000;
}
& > div > div:nth-child(1) > img{
    width: 120px;
    height: 100px;
}

`
export const Input_Invoice = styled.div`
&{
    width:100%;
    border: 1px solid #000000;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
&>h2{
    padding: 10px;
    box-sizing: border-box;
}
`

export const Table = styled.table`
&{
    display: inline-block;
    width: 70%;
    /* height: 120px; */
    /* border: 1px solid #000000; */
    /* padding: 15px; */
    box-sizing: border-box;
}

&>tr{
    padding: 10px;
}

&>tr>td:nth-child(2){
    padding:  5px;
    box-sizing: border-box;
}
`