import React from "react";
import { Liststyle } from "./sub.css";
import Auclist from "./Auclist";
import Buylist from "./Buylist";
import Sellist from "./Sellist";
import { useState } from "react";

const sub = () => {
    const [isSelect,setSelect] = useState(true)

    const SelBuy =()=>{
        setSelect(false)
    }
    
    const SelAuc =()=>{
        setSelect(false)
    }
    
    const SelSell =()=>{
        setSelect(true)
    }
    
    return (
      <>
            <Liststyle isSelect={isSelect}>
            <div className="Container">
                <div className="main_contain">
                    <div className="title">
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
                    isSelect ? <Sellist/> : <Buylist/> || <Auclist/>
                        }
                    </div>
                </div>
            </div>
            </Liststyle>
        </>
    );
}

export default sub;