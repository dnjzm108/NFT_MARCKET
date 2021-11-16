import styled from "styled-components";

export const CalendarContainer = styled.div`
    /* padding: "16px";
    background: "#216ba5";
    color: "#fff" ; */

`



export const StyledSell = styled.div`
/* margin-top: 10%; */
width: 100%;
color: #222;
.sell_section{
    width: 100%;
    /* height: 620px; */
}

.sell_section>h3{
    display: inline-block;
    margin-top: 10%;
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
    color: ${p=>p.isNow ? '#1E73FA' : '#222'};
}

.select_auc{
    border-bottom: 2px solid ${p=>!p.isNow ? '#1E73FA' : "none"};
    color: ${p=>!p.isNow ? '#1E73FA' : '#222'};
}

.select_sell{
    width: 50%;
    height: auto;
    display: inline-block;
    height: auto;
    background: #f0f9ff;
    padding: 4%;
    box-sizing: border-box;
    margin-top: 12%;
}

.buynow{
    width: 100%;
    height: auto;
} 

.buynow_input,.auction_input{
    display: flex;
    align-items: end;
    margin-top: 6%;
}

.buynow_input>p, .auction_input>p{
    padding: 4px;
    font-size: 20px;
    font-weight: bold;
}

.auction{
    margin-top: 8%;
    margin-bottom: 8%;
    height: auto;
}

.auction>h2{
    margin-bottom: 10%;
}
.select_terms>p{
    font-size: 18px;
    font-weight: bold;
    padding: 2%;
}

.select_terms>div{
    margin-left: 10px;
    margin-top: 10px;
}
.extension_box{
    margin-top: 10%;
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
}

.extension_box > p{
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
}

.auction_btn{
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
}

.react-datepicker__input-container>input{
    width: 16vw;
    height: 6vh;
    cursor: pointer;
    padding: 4%;
    font-size: 20px;
}

.react-datepicker-ignore-onclickoutside{
    width: 16vw;
}
.react-datepicker{
    width: 16vw;
    background-color: white;
    border: 1px solid black;
}

.react-datepicker__month-container{
    display: flex;
    flex-direction: column;
}

.react-datepicker__month{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align : center;
    /* padding: 10%; */
}
.react-datepicker__day-names{
    display: flex;
    justify-content: space-around;
    /* padding: 10%; */
}
.react-datepicker__week{
    display: flex;
    justify-content: space-evenly;
    cursor: pointer;
}

`