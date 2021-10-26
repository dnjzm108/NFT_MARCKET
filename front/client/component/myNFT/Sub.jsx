import React from "react";
import { Liststyle } from "./sub.css";
import Auclist from "./Auclist";
import Buylist from "./Buylist";
import Sellist from "./Sellist";
import { useState } from "react";

const sub = () => {
    const [isSelect,setSelect] = useState(true)

    const SelAuc =()=>{
        setSelect(true)
    }

    const SelBuy =()=>{
        setSelect(false)
    }

    const SelSell =()=>{
        setSelect(false)
    }
    
    return (
      <>
        <Liststyle isSelect={isSelect}>
        <div className="Container">
            <div className="main_contain">
                <div className="title">
                    <tr>
                        <td className="sellist">
                            <h3 onClick={ () => SelSell() }>판매 목록</h3>
                        </td>
                        <td className="buylist">
                            <h3 onClick={ () => SelBuy() }>구매 목록</h3>
                        </td>
                        <td className="auclist">
                             <h3 onClick={ () => SelAuc() }>경매 목록</h3>
                        </td>
                    </tr>
                </div>
                <div className="content">
                   {isSelect ? <Sellist/> : <Buylist/>  <Auclist/>}
                </div>
            </div>
        </div>
        </Liststyle>
        </>
    );
}

export default sub;