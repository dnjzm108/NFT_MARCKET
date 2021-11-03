import styled from "styled-components"

export const StyledSwap = styled.div`
   &{width: 100vw;
    max-width: 700px;
    margin: 0 auto;
    justify-content: center;
    padding-top: 50px;   
    align-items: center;
    height: 50%;
    display: flex;
    flex-direction: column;
    }

    & > div{
        font-size: 40px;
        font-weight: bold;
    }
    
    .Wbox{
        margin-top: 50px;
        width:500px;
        height:400px;
        background-color: black;
        display: flex;
        flex-direction: column;
        border-radius: 50px;
        align-items: center;
        justify-content: center;
    }
    
    .From{
        font-size: 14px;
        margin-bottom: 50px;
        width: 300px;
        height: 100px;
        background-color: white;
        border-radius: 14px;
        padding: 40px;
    }

    & > div > img{
    width: 30px;
    height: 30px;
    overflow: hidden;
    border: 1px solid rgb(229, 232, 235);
    border-radius: 50%;
    padding: 4px;
    }

    .To{
        font-size: 14px; 
        width: 300px;
        height: 100px;
        background-color: white;
        border-radius: 14px;
        padding: 40px;
    }

    .klay{
        width: 100px;
        height: 30px;
        font-size: 18px;
        text-align: right;
        border: none;
        outline: none;
        float: right;
        margin-right: 5px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        }
    .perr{
        width: 100px;
        height: 30px;
        font-size: 18px;
        text-align: right;
        border: none;
        outline: none;
        float: right;
        margin-right: 5px;
    }

    .klaytn{
        float: right;
        font-size: 20px;
    }

    .perro{
        float: right;
        font-size: 20px;
    }

    .icon{
        color: white;
        position: absolute;
    }

    .swap_btn{
        color: black;
        font-size:15px;
        width: 30%;
        text-align: center;
        height: 30px;
        cursor: pointer;
        background-color: white;
        position: absolute;
        bottom: 160px;
        border-radius: 30px;
        padding: 5px;
    } 

    .swap_btn:hover{
        color: white;
        background-color: black;
    }
    
    .klay_icon{
        width: 30px;
    }

    .Perr_icon{
        width: 40px;
        border-radius: 140px;
    }

`


