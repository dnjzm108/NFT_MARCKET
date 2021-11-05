import { StyledSwap } from "./swap.css";
import { BiDownArrowAlt } from "react-icons/bi";
import { useEffect,useState } from "react"
import { Swap_REQUEST } from "../../reducers/token";
import { useSelector, useDispatch } from 'react-redux'



const SwapToken = () => {
    const dispatch = useDispatch()
    const [klay,setKlay] = useState("");
    const [perr,setPerr] = useState("");
    const [k2p,setK2P] = useState('')
    const [test,setTest] = useState(true)
    const [swap,setSwap] = useState(0)

    const handleKlay = (e) =>{
            const klayInput = e.target.value;
            setKlay(klayInput);
            setK2P(klayInput*1300)
    }

    const handlePerr = (e) =>{
            const perrInput = e.target.value;
            setPerr(perrInput);
    }

    useEffect(()=>{
            setPerr(klay*1300)
    },[klay])

    useEffect(()=>{
            setKlay(perr/1300)
    },[perr])

    const SwapPerro = () =>{
        window.caver.klay
        .sendTransaction({
            type: 'VALUE_TRANSFER',
            from: window.klaytn.selectedAddress,
            to: '0xbf39AC77B62577D4c8e9c16F278B1C05E87D17E5',
            value: caver.utils.toPeb('1', 'KLAY'),
            gas: 8000000
        })
        .once('transactionHash', transactionHash => {
            console.log('txHash', transactionHash)
        })
        .once('receipt', receipt => {
            console.log('receipt', receipt)
        })
        .once('error', error => {
            console.log('error', error)
        })
        
        dispatch(Swap_REQUEST())
    }
    

    return (
        <>
        <StyledSwap>
        <div className="name">
            Perro Swap
        </div>

        {test 
        ?(<div className="Wbox">
        <div className="From" >
            <img className="klay_icon" src="/klay.png" alt="" />
          <p className="klaytn">Klaytn</p>
        <input type="number" defaultValue={klay} onChange={(e)=>{handleKlay(e)}}  min="1" className="klay" placeholder="0.0"/>
        </div>
        <BiDownArrowAlt className="icon"/>
        <div className="To" onClick={()=>setTest(false)}>
            <img className="Perr_icon" src="/쉽독.jpg" alt="" />
            <p className="perro">Perro</p>
            {/* <input type="number"  defaultValue={klay} min="1" className="perr" placeholder="0.0"/> */}
            <span className="klayspan" >{klay*1300}</span>
        </div>
        <div className="swap_btn" onClick={SwapPerro}>Click</div>
        </div>)
        :(
        <div className="Wbox2">
        <div className="From" onClick={()=>setTest(true)}>
            <img className="klay_icon" src="/klay.png" alt="" />
          <p className="klaytn">Klaytn</p>
            <span className="klayspan">{perr/1300}</span>
        </div>
        <BiDownArrowAlt className="icon"/>
        <div className="To">
            <img className="Perr_icon" src="/쉽독.jpg" alt="" />
            <p className="perro">Perro</p>
        <input type="number"  defaultValue={perr}  onChange={(e)=>{handlePerr(e)}} min="1" className="perr" placeholder="0.0"/>
        <div className="swap_btn2" onClick={SwapPerro}>Click</div>
        </div>
    </div>)    
        }

        
        <div className="rate">1 KLAY = 1300 PERR</div>
        </StyledSwap>
        </>
    );
}

export default SwapToken;