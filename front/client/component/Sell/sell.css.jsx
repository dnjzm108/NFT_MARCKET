import styled from "styled-components";

export const StyledSell = styled.div`
margin-top: 10%;
width: 100%;
border-top: 1px solid #d5d5d5;

.sell_section{
    width: 100%;
}

.select_sell{
    width: 80%;
    height: auto;
    display: inline-block;
    height: auto;
    margin-top: 10%;
    background: #f0f9ff;
    padding: 4%;
}

.buynow_btn{
    background: ${props=>props.isNow ? 'blue': 'white' };
}

.auction_btn{
    background-color: ${props=>!props.isNow ? 'blue':'white' };
}


.select_sell>div>button{
    padding: 10px;
    font-size: 16px;
    /* background: white; */
    border: solid 1px #222;
    border-radius: 4px;
    cursor: pointer;
}

.buynow, .auction{
    margin-top: 8%;
    margin-bottom: 8%;
    height: auto;
    position: relative;
    left: 12%;

}

.buynow>input,.auction >input{
    width: 300px;
    height: 40px;
    margin-top: 2%;
}

.release_btn{
    position: relative;
    left: 50%;
    margin-top: -200px;
}

.release_btn > button:nth-child(1){
    

}


.release_btn>button{
    border-radius: 4px;
    height: 70px;
    font-size: 20px;
    border: 1px solid #ededed;
    cursor: pointer;
}

.cancel{
    background: white;
    width: 100px;
    border: 1px solid #222;
    cursor: pointer;
    display: block;
    margin-bottom: 60px;
}

.go{
    background: #1E73FA;
    width: 260px;
    color: white;
}





`