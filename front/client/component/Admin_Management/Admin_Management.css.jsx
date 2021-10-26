import styled from "styled-components"

export const Management_Wrap = styled.div`
&{
    padding: 90px 0 0 0;
    box-sizing: border-box;
}
`
export const Right = styled.div`
position: relative;
right: -1300px;
top: -20px;

`

export const Side_bar = styled.div`
display: inline-block;
width: 20%; 
height: 100%;
text-align:center;
padding: 40px;
box-sizing: border-box;

`

export const Line = styled.div`
width: 1px;
height: 600px;
border-right: 1px solid #000000;
float: right;
position: relative;
top: -30px;
right: -10px;

`

export const Container = styled.div`
float: right;
display: inline-block;
width: 80%;
padding: 30px;
box-sizing: border-box;


`

export const Content_Box = styled.div`
width: 95%;
height: 100px;
margin: 5px;
padding: 20px;
border: 1px solid #000000;
box-sizing: border-box;

`

export const Table = styled.table`
  &{
      display: flex;
      justify-content: space-between;
      padding: 5px ;
  }
  &>tr>th{
      display: inline-block;
      width: 250px;
      /* text-align:center; */
  }
`

export const  Btn_Box = styled.div`
     position: relative;
     top: -35px;

`
