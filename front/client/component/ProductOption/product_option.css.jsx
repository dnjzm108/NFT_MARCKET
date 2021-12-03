import styled from "styled-components";

export const Options = styled.div`
margin-top: 6%;
h1{
    margin-bottom: -4vh;
}
h3{
    margin-top: 4%;
    /* margin-bottom: 2%; */
}

h3>p{
    margin-top: 2%;
    margin-bottom: 5%;
    font-size: 16px;
}
.select_category{
    width: 70vw;
    display: flex;
    justify-content: space-evenly;
    padding: 10%;
    margin-left: -18vw;
}
.select_contain{
    position: relative;
    display: flex;
    justify-content: flex-start;
}
.select_box{
    position: absolute;
    width: 50vw;
    display: flex;
    justify-content: space-between;
    margin-left: 2vw;
    margin-top:-10vh;
}

.option_explain{
    padding: 2%;
    width: 40vw;
    background-color: #f0f9ff;
    margin-bottom: 4%;
    margin-left: 2vw;
    margin-top: 16vh;
}

.select_option{
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}

.select_option>span{
    font-weight: bold;
    width: 42vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 30px;
}

.select_option>span>p{
    width: 6vw;
    font-size: 1vw;
    text-align: center;
}

.select_option>span>input{
    width: 46vw;
    height: 6vh;
    border: 1px solid #d8d8d8;
    padding: 1%;
    border-radius: 8px;
}

.option_btn{
    margin: 6% 0 8% 0;
}

`

export const OptionCheck= styled.div`
.op_box{
    margin-top: 50px;
}
.op_box>span{
    /* 수량 가격 리스트 머리부분 */
    width: 50vw;
    display: flex;
    height: 14vh;
    justify-content: flex-start;
    align-items: center;
    padding: 4%;
    text-align: center;
    border-bottom: 1px solid black;
    margin-bottom: 5vh;
}
.op_box>span>h3{
    width: 6vw;
    font-size: 1.5vw;
}

.op_box>span>p{
    width: 14vw;
    margin-left: 4vw;
    font-size: 1.1vw;
}
.op_box>div>p{
    display: inline-block;
    padding: 1%;
    /* 옵션선택 완료버튼을 눌러주세요*/
}

.option_ul{
    display: flex;
    flex-direction: column;
    
}
.option_li{
    width: 50vw;
    display: flex;
    height: 14vh;
    justify-content: flex-start;
    align-items: center;
    padding: 4%;
}

.enter_all{
    display: flex;
    width: 50%;
    height: 10vh;
    background-color: #f0f9ff;
    margin-bottom: 4%;
    align-items: center;
    padding: 2%;
}


.option_li>p>input{
    /* 수량가격 인풋 */
    width: 14vw;
    height: 6vh;
    padding: 4%;
    margin-left: 4vw;
    border: 1px solid #d8d8d8;
    border-radius: 6px;
    color: grey;
    font-size: 14px;
    text-align: center;
}

.option_li>h1{
    width: 6vw;
    font-size: 20px;
    text-align: center;
    
}

.option_btn{
    margin: 8% 0 8% 0;
}
`