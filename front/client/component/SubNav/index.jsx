import React from "react";
import { Liststyle } from "./SubNav.css";
import { useState } from "react";

const SubNav = () => {
    const [isSelect,setSelect] = useState(0)
    
    return (
      <>
            <Liststyle isSelect={isSelect}>
            <div className="Container">
                <div className="main_contain">
                    <div className="title">
                        <h3 onClick={ () => setSelect(1)} className="buylist">
                            구매 목록
                        </h3>
                        <h3 onClick={ () => setSelect(2)} className="auclist">
                            경매 목록
                        </h3>
                        <h3 onClick={ () => setSelect(3)} className="sellist">
                            판매 목록
                        </h3>
                    </div>
                </div>
            </div>
            </Liststyle>
        </>
    );
}

export default SubNav;