import React from "react";
import { Liststyle } from "./sub.css";

const sub = () => {
    return (
      <>
        <Liststyle>
        <div className="Container">
            <div className="main_contain">
                <div className="title">
                    <tr>
                        <td className="sellist">판매 목록</td>
                        <td className="buylist">구매 목록</td>
                        <td className="auclist">경매 목록</td>
                    </tr>
                </div>
                <div className="content">
                    <tr>
                        <td className="sellist">판매 목록</td>
                        <td className="buylist">구매 목록</td>
                        <td className="auclist">경매 목록</td>
                    </tr>
                </div>
            </div>
        </div>
        </Liststyle>
        </>
    );
}

export default sub;