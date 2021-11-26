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

    & > div > .name{
        font-size: 40px;
        font-weight: bold;
        text-align: center;
        margin: 40px;
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
    .Wbox2{
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
        z-index: 2;
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
        font-weight:bold;
        
    }

    .perro{
        float: right;
        font-size: 20px;
        font-weight:bold;
    }

    .icon{
        color: white;
        position: absolute;
        font-size: 35px;
    }

    .swap_btn{
        color: black;
        font-size:15px;
        width: 44%;
        text-align: center;
        height: 30px;
        cursor: pointer;
        background-color: white;
        position:sticky;
        height: 32px;
        border-radius: 30px;
        margin-top: 15px;
        margin-bottom: -47px;
        padding: 5.1px;
        font-weight: bold;
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

    

    .rate{
        font-weight: bold;
        font-size: px;
    }
    
    .swap_btn2{
        color: black;
        font-size:15px;
        width: 100%;
        text-align: center;
        height: 30px;
        cursor: pointer;
        background-color: white;
        position:sticky;
        height: 32px;
        border-radius: 30px;
        margin-top: 45px;
        padding: 5px;
        font-weight: bold;
    } 

    .swap_btn2:hover{
        color: white;
        background-color: black;
    }

    .klayspan{
        width: 100px;
        height: 30px;
        font-size: 18px;
        text-align: right;
        border: none;
        outline: none;
        float: right;
        margin-right: 5px;
        overflow: hidden;
    }
`




export const  PerroGuide = styled.div`
    width: 34vw;
    height: 100vh;
    /* padding: 3%; */
    position: absolute;
    

    .get_perro_btn{
        
        padding: 1%;
        display: flex;
        width: 10vw;
        margin: 0 auto;
        height: 5vh;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background-color: #1e73fa;
        color: white;
        font-size: 16px;
        cursor: pointer;
        transition: .15s ease-in-out;
        margin-top: 10%;
    }
    .get_perro_btn:hover{
        background-color: white;
        color: #1e73fa;
        border: 1px solid #1e73fa;
    }
    img{
        width: 38vw;
        padding: 10%;
    }
`