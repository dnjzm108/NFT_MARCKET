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
.select_box{
    height: 200px;
}
.select_option{
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10%;
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

`

export const OptionCheck= styled.div`

`