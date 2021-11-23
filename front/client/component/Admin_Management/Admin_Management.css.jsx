import styled from "styled-components"

export const Management_Wrap = styled.div`
&{
    box-sizing: border-box;
    display: flex;
}
`
export const Right = styled.div`
position: relative;

`

export const Side_bar = styled.div`
&{
display: inline-block;
width: 20%; 
height: 100%;
/* text-align:center; */
padding: 40px;
box-sizing: border-box;
}
& > ul{
    padding: 20px 0 0 20px;
    box-sizing:border-box;
}
& > ul>li{
    padding: 7px;
    box-sizing: border-box;
}
`

export const Line = styled.div`
width: 1px;
height: 600px;
border-right: 1px solid #000000;
float: right;
position: relative;
top: -130px;
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
&{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
width: 95%;
margin: 5px;
padding: 20px;
border: 1px solid #000000;
box-sizing: border-box;
}
&:hover{
    -webkit-box-shadow: 0px 7px 12px 2px rgba(119, 119, 119, 0.3);
    box-shadow: 0px 7px 12px 2px rgba(119, 119, 119, 0.3);
    /* box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px; */
    transition: all 0.1s ease 0s;
    transform: translateY(-1px);
}
`

export const Table = styled.table`
  &{
      /* display: flex;
       flex-direction: column;
      justify-content: space-between;
      padding: 5px ; */
  }
  & >tbody{
    display: flex;
       flex-direction: column;
      justify-content: space-between;
      padding: 5px ;
      &>tr>th{
          display: inline-block;
          width: 25%;
      }
  }

`

export const  Btn_Box = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
     position: relative;
     /* top: -5vh; */

`
