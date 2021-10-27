import styled from "styled-components"


export const Auction_Wrap = styled.div`
&{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
}
& > div {
    padding: 10px;
    box-sizing: border-box;
}
& > div >h3{
    padding: 8px;
}
& > div >h2{
     text-align: center;
}
& > div >h4{
    border-top: 1px solid #000000;
    margin-top: 10px;
    padding: 10px;
    box-sizing: border-box;
}
& > div >h5{
    text-align: center;
}
& > div:nth-child(2){
    display: flex;
    justify-content: center;
}
`
export const Auction_History_Wrap = styled.div`
  &{
      height: 190px;
      padding: 30px;
      box-sizing: border-box;
      overflow-y: auto;
  }
  & > table{
      width: 100%;
  }
  & > table > tr{
    display: flex;
    justify-content: space-between
  }
  & > table > tr > td{
     text-align: center;
  }

  & > table > tr > td>img{
      width: 15px;
      height: 15px;
  }
`
