import React from "react";
import { Liststyle } from "./sub.css";
import Auclist from "./Auclist";
import Buylist from "./Buylist";
import Sellist from "./Sellist";
import { useState } from "react";
import Profile from "../mypage/profile";

const sub = () => {
    const [isSelect,setSelect] = useState(1)

    const ProfileMenu =()=>{
        setSelect(1)
    }

    const SelSell =()=>{
        setSelect(0)
    }
    const SelBuy =()=>{
        setSelect(2)
    }
    
    const SelAuc =()=>{
        setSelect(3)
    }
    
    
    
    return (
      <>
            <Liststyle isSelect={isSelect}>
            <div className="Container">
                <div className="main_contain">
                    <div className="title">
                            <h1 onClick={()=> ProfileMenu()} className="ProMenu">
                                내 프로필
                            </h1>
                            <h1 onClick={ () => SelSell()} className="sellist">
                                판매 목록
                            </h1>
                            <h1 onClick={ () => SelBuy()} className="buylist">
                                구매 목록
                            </h1>
                            <h1 onClick={ () => SelAuc()} className="auclist">
                                경매 목록
                            </h1>
                        
                    </div>
                    <div className="content">
                    {
                    isSelect ? <Profile/> : <Sellist/> 
                        }
                    </div>
                </div>
            </div>
            </Liststyle>
        </>
    );
}

export default sub;