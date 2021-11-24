import { StyledSwap } from "./swap.css";
import { BiDownArrowAlt, BiWindowOpen } from "react-icons/bi";
import { useEffect,useState } from "react"
import { Swap_REQUEST } from "../../reducers/token";
import { useSelector, useDispatch } from 'react-redux'
// import caver from "../../klaytn/caver"


const SwapToken = () => {
    const dispatch = useDispatch()
    const [klay,setKlay] = useState("");
    const [perr,setPerr] = useState("");
    const [k2p,setK2P] = useState('')
    const [p2k,setP2K] = useState('')
    const [currency,setCurrency] = useState(true)  // true면 klay, false면 perro 
    const [swap,setSwap] = useState(0)



    const handleKlay = (e) =>{
            const klayInput = e.target.value;
            setKlay(klayInput);
            setK2P(klayInput*10)
    }

    const handlePerr = (e) =>{
            const perrInput = e.target.value;
            setPerr(perrInput);
            setP2K(perrInput/10);
    }

    useEffect(()=>{
            setPerr(klay*10)
    },[klay])

    useEffect(()=>{
            setKlay(perr/10)
    },[perr])

    const SwapPerro = () =>{
        // if(window.klaytn.selectedAddress){
        //     alert('로그인해주세요.')
        // }

        let sendKlay = 0;
        let perroAmount = 0; 
        if(currency==true){
            sendKlay=String(klay)
            perroAmount=String(k2p);
        }else{
            sendKlay=String(p2k);
            perroAmount = String(perr);
        }
        window.caver.klay
        .sendTransaction({
            type: 'VALUE_TRANSFER',
            from: window.klaytn.selectedAddress,
            to: '0x22CA3559D885CFb99b48CfF8AA3E38Ed8C4d0A4f',
            value: caver.utils.toPeb(sendKlay, 'KLAY'),
            gas: 8000000
        })
        .once('transactionHash', transactionHash => {
            // console.log('txHash', transactionHash)
        })
        .once('receipt', receipt => {
            console.log('receipt', receipt)
            const recipientAddress  = receipt.from;
            
            const data = {
                recipientAddress,
                perroAmount,
            }
            dispatch(Swap_REQUEST(data))
        })
        .once('error', error => {
            console.log('error', error)
            alert('거절.')
        })
        
    }

  
    return (
        <>
        <StyledSwap>
        <div className="name">
            Perro Swap
        </div>

        {currency 
        ?(<div className="Wbox">
        <div className="From" >
            <img className="klay_icon" src="/klay.png" alt="" />
          <p className="klaytn">Klaytn</p>
        <input type="number" defaultValue={klay} onChange={(e)=>{handleKlay(e)}}  min="1" className="klay" placeholder="0.0"/>
        </div>
        <BiDownArrowAlt className="icon"/>
        <div className="To" onClick={()=>setCurrency(false)}>
            <img className="Perr_icon" src="/쉽독.jpg" alt="" />
            <p className="perro">Perro</p>
            {/* <input type="number"  defaultValue={klay} min="1" className="perr" placeholder="0.0"/> */}
            <span className="klayspan" >{k2p}</span>
        </div>
        <div className="swap_btn" onClick={SwapPerro}>Click</div>
        </div>)
        :(
        <div className="Wbox2">
        <div className="From" onClick={()=>setCurrency(true)}>
            <img className="klay_icon" src="/klay.png" alt="" />
          <p className="klaytn">Klaytn</p>
            <span className="klayspan">{p2k}</span>
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


        
        </StyledSwap>
        </>
    );
}

export default SwapToken;