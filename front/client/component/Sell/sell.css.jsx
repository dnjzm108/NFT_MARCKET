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
    background: #f0f9ff;
    padding: 4%;
}

.sell_section>h3{
    display: inline-block;
    margin-top: 6%;
    font-size: 22px;
}

.select_btn> h1{
    display: inline-block;
    width: auto;
    padding: 10px;
    cursor: pointer;
    font-size: 18px;
    margin-top: 4%;
}

.select_btn> h1:hover{
    color: #22222290;
    transition: ease-in-out .2s;
}

.select_buynow{
    border-bottom: 2px solid ${p=>p.isNow ? '#1E73FA' : "none"};
}

.select_auc{
    border-bottom: 2px solid ${p=>!p.isNow ? '#1E73FA' : "none"};
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