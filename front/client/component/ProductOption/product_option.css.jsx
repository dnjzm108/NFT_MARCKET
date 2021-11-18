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
    width: 72vw;
    display: flex;
    /* justify-content: space-around */
    justify-content: space-around;
    margin-bottom: 4%;

}
.select_contain{
    position: relative;
    height: 200px;
    display: flex;
    justify-content: space-around
}
.select_box{
    position: absolute;
    width: 50vw;
    display: flex;
    justify-content: space-between
}

.select_option{
    height: 100px;
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
    width: 60vw;
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
    display: flex;
    width: 50%;
    height: 10vh;
    background-color: #f0f9ff;
    margin-bottom: 4%;
    align-items: center
}
.enter_all_btn{
    background-color: white;
    height: 40px;
    width: 50px;
    padding: 2px;
    border: 1px solid black;
    border-radius: 8px;
    cursor: pointer;
    margin-left: 2%;
}
.op_box>div>p{
    display: inline-block;
    padding: 1%;
    /* transform: translateY(80%); */
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