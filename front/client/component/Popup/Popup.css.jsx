import styled from 'styled-components'

export const Table = styled.table`
&{
    width: 100%;
    border: 1px solid #000000;
    box-sizing: border-box;
}
&>tbody{
    & > tr{
    width: 300px;
    height: 100%;
    border: 1px solid black;
}
& > tr > td{
    padding: 5px;
    box-sizing: border-box;

}
& > tr > td > img{
    width: 20px;
    height: 20px;
}
& > tr > td:nth-child(1){
    width: 30%;
    height: 50px;
    /* border-right: 2px solid blue;
    border-bottom: 2px solid blue; */
    box-sizing: border-box;
}
& > tr > td:nth-child(2){
   text-align:center;
}
& > tr:nth-child(6) > td:nth-child(2) > input:nth-child(1){
    display: inline-block;
    width: 145px;
    height: 20px;
    margin: 0 auto;
}
& > tr:nth-child(6) > td:nth-child(2) > input:nth-child(4){
    display: block;
    width: 200px;
    height: 20px;
    margin: 0 auto;
}
& > tr:nth-child(6) > td:nth-child(2) > input:nth-child(3){
    display: block;
    width: 200px;
    height: 20px;
    margin: 0 auto;
}

}


`
export const AddressFind = styled.button`
padding: 12px 20px;
box-sizing: border-box;
background: #ffff;
border: 1px solid #000000;
`

export const Center = styled.div`
margin-top: 30px ;
display: flex;
justify-content: center;
`

export const Subject = styled.h1`
margin-bottom: 20px;
`