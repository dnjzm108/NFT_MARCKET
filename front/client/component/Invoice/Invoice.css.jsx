import styled from 'styled-components'

export const Info_Container = styled.div`
&{
    text-align:cneter;
    width: 100%;
    border: 1px solid #000000;

}
& >div{
    width: 100%;
    padding: 20px;
    border: 1px solid #000000;
}
& > div > div:nth-child(1){
    display: inline-block;
    width: 80px;
    height: 80px;
    float: left;
    border: 1px solid #000000;
}
& >div >div:nth-child(2){
    display: inline-block;
    width: 70%;
    height: 100px;
    border: 1px solid #000000;
}
`
export const Input_Invoice = styled.div`
&{
    width:100%;
    border: 1px solid #000000;
}
`