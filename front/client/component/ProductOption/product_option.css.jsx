import styled from "styled-components";

export const Options = styled.div`
margin-top: 6%;
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
    display: flex;
    justify-content: space-around
}
.select_box{
    height: 200px;
    display: flex;
    justify-content: space-around
}
.select_option{
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.select_option>span{
    font-weight: bold;
    width: 70vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.select_option>span>input{
    width: 64vw;
    height: 5vh;
}

.option_btn{
    margin: 8% 0 8% 0;
}

`

export const OptionCheck= styled.div`
.op_box{
    margin-top: 50px;
}
.enter_all{
    width: 50%;
    height: 10vh;
    background-color: #f0f9ff;
    margin-bottom: 4%;
}
.op_box>div>p{
    display: inline-block;
    padding: 1%;
    transform: translateY(80%);
}
.op_box>div>p>input{
    margin-left: 10px;
}

.option_ul{
    height:26vh;
    /* width: 60vw; */
    display: flex;
    flex-direction: column;
    
}
.option_li{
    width: 80vw;
    display: flex;
    height: 14vh;
    justify-content: space-around;
    align-items: center;
    transform : translateX(-10%);
    
}
.option_li>h1{
    width: 10vw;
    font-size: 20px;
    text-align: center;
}

.option_btn{
    margin: 8% 0 8% 0;
}
`