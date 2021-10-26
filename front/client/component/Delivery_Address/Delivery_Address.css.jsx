import styled from 'styled-components'

export const Table = styled.table`
&{
    width: 100%;
    border: 1px solid #000000;
    box-sizing: border-box;
}

& > tr{
    width: 300px;
    height: 100%;
    border: 1px solid black;
    /* box-sizing: border-box; */
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
`

// const Middle_Input = styled.div`
// & {
//     margin: 40px auto 0;
//     height: 100px;
// }
// & > label{
//     font-weight: 700;
//     font-size: 20px;
//     color: #2d3741;
//     display: block;
//     float: left;
//     /* margin: 0 0 20px 0; */
// }

// & > input{
//     display: inline-block;
//     width: 300px;
//     /* height: calc(1.75em + 1.25rem + 2px); */
//     padding: .625rem .75rem;
//     box-sizing: border-box;
//     font-size: 1rem;
//     font-weight: 400;
//     line-height: 1.75;
//     color: #495057;
//     background-color: #fff;
//     background-clip: padding-box;
//     border: 1px solid #ced4da;
//     border-radius: .25rem;
// }
//`