import styled from "styled-components";

export const StyledSell = styled.div`
margin-top: 10%;
width: 100%;
border-top: 1px solid #d5d5d5;

.sell_section{
    /* display: flex; */
    padding: 4%;
}

.sell_section{
    display: inline-block;
    height: 400px;
    width: 100%;
    margin-top: 10%;
    background: #f0f9ff;
}


.release_btn{
    margin-top: 10%;
}

.release_btn>button{
    border-radius: 4px;
    height: 70px;
    font-size: 20px;
    border: 1px solid #222;
    cursor: pointer;
}

.cancel{
    background: white;
    width: 100px;
    border: 1px solid #222;
    cursor: pointer;
}

.go{
    background: #1E73FA;
    width: 260px;
    color: white;
    margin-left: 10%;
}

.buynow{
    margin-top: 4%;
}

.buynow>input{
    width: 300px;
    height: 40px;
    margin-top: 2%;
}



`