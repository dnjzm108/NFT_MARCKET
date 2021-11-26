import { BiDownArrowAlt, BiWindowOpen } from "react-icons/bi";


export const Container_Perro = (props) => {

    return (
        <div>
            
            <div className="name">
                Perro Swap
            </div>
            {props.currency
                ? (<div className="Wbox">
                    <div className="From" >
                        <img className="klay_icon" src="/klay.png" alt="" />
                        <p className="klaytn">Klaytn</p>
                        <input type="number" defaultValue={props.klay} onChange={(e) => { props.handleKlay(e) }} min="1" className="klay" placeholder="0.0" />
                    </div>

                    <BiDownArrowAlt className="icon" />

                    <div className="To" onClick={()=>{props.change_value(false)}}>
                        <img className="Perr_icon" src="/쉽독.jpg" alt="" />
                        <p className="perro">Perro</p>
                        {/* <input type="number"  defaultValue={props.klay} min="1" className="perr" placeholder="0.0"/> */}
                        <span className="klayspan" >{props.k2p}</span>
                    </div>
                    <div className="swap_btn" onClick={props.SwapPerro}>Click</div>
                </div>)
                : (
                    <div className="Wbox2">
                        <div className="From" onClick={()=>{props.change_value(true)}}>
                            <img className="klay_icon" src="/klay.png" alt="" />
                            <p className="klaytn">Klaytn</p>
                            <span className="klayspan">{props.p2k}</span>
                        </div>

                        <BiDownArrowAlt className="icon" />

                        <div className="To">
                            <img className="Perr_icon" src="/쉽독.jpg" alt="" />
                            <p className="perro">Perro</p>
                            <input type="number" defaultValue={props.perr} onChange={(e) => { props.handlePerr(e) }} min="1" className="perr" placeholder="0.0" />
                            
                            <div className="swap_btn2" onClick={props.SwapPerro}>Click</div>
                        </div>
                    </div>)
            }


        </div>
    )
}


export const Container_Klatn = (props) => {


return(
    <div>
        <div className="name">
                    Klaytn Swap
                </div>
                {props.currency
                    ? (<div className="Wbox">
                        <div className="From" onClick={()=>{props.change_value(false)}}>
                            <img className="Perr_icon" src="/쉽독.jpg" alt="" />
                            <p className="perro">Perro</p>
                            {/* <input type="number"  defaultValue={props.klay} min="1" className="perr" placeholder="0.0"/> */}
                            <span className="klayspan" >{props.k2p}</span>
                        </div>

                        <BiDownArrowAlt className="icon" />
                        
                        <div className="To" >
                            <img className="klay_icon" src="/klay.png" alt="" />
                            <p className="klaytn">Klaytn</p>
                            <input type="number" defaultValue={props.klay} onChange={(e) => { props.handleKlay(e) }} min="1" className="klay" placeholder="0.0" />
                        </div>
                        <div className="swap_btn" onClick={props.SwapPerro}>Click</div>
                    </div>)
                    : (
                        <div className="Wbox2">
                             <div className="From">
                                <img className="Perr_icon" src="/쉽독.jpg" alt="" />
                                <p className="perro">Perro</p>
                                <input type="number" defaultValue={props.perr} onChange={(e) => {props.handlePerr(e) }} min="1" className="perr" placeholder="0.0" />
                            </div>

                            <BiDownArrowAlt className="icon" />

                            <div className="To" onClick={()=>{props.change_value(true)}}>
                                <img className="klay_icon" src="/klay.png" alt="" />
                                <p className="klaytn">Klaytn</p>
                                <span className="klayspan">{props.p2k}</span>
                            </div>
                            <div className="swap_btn" onClick={props.SwapPerro}>Click</div>
                        </div>)
                }
    </div>
)
}