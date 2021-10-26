import styled from "styled-components";

export const StyledSell = styled.div`
margin-top: 10%;
width: 100%;
border-top: 1px solid #d5d5d5;
color: #222;
.sell_section{
    width: 100%;
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

.select_sell{
    width: 50%;
    height: auto;
    display: inline-block;
    height: auto;
    background: #f0f9ff;
    padding: 4%;
    box-sizing: border-box;
}

.buynow{
    width: 100%;
    height: auto;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
} 
.auction{
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

.flex_contain{
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}
.release_btn{
    display: flex;
}

.select_terms{
    padding: 10%;
}

.select_terms>p{
    font-size: 18px;
    font-weight: bold;
    padding: 2%;
}


/* .extension_box{
    display: inline-block;
    padding: 4%;
} */

/* .extension_box > input {
    display: inline-block;
} */

.extension_box{
    /* padding: 10px; */
    width: 700px;
}

.extension_box > p{
    margin-left: 10px;
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    padding: 2%;
}


`