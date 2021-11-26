import { StyledSwap,PerroGuide } from "./swap.css";

import { useEffect, useState } from "react"
import { Swap_REQUEST } from "../../reducers/token";
import { useSelector, useDispatch } from 'react-redux'
// import caver from "../../klaytn/caver"
import Button from "../Button";
import { Container_Klatn, Container_Perro } from "./container"


const SwapToken = () => {
    const dispatch = useDispatch()
    const [klay, setKlay] = useState("");
    const [perr, setPerr] = useState("");
    const [k2p, setK2P] = useState('')
    const [p2k, setP2K] = useState('')
    const [currency, setCurrency] = useState(true)  // true면 klay, false면 perro 
    const [change, setChange] = useState(true)  // true면 klay를 token으로 교환
    const [swap, setSwap] = useState(0)
    const [openGuide,setOpenGuide] = useState(false)


    const handleKlay = (e) => {
        const klayInput = e.target.value;
        setKlay(klayInput);
        setK2P(klayInput * 10)
    }

    const handlePerr = (e) => {
        const perrInput = e.target.value;
        setPerr(perrInput);
        setP2K(perrInput / 10);
    }

    useEffect(() => {
        setPerr(klay * 10)
    }, [klay])

    useEffect(() => {
        setKlay(perr / 10)
    }, [perr])


    const SwapPerro = async () => {
        if (window.klaytn.selectedAddress == undefined) {
            alert('로그인을 진행해 해주세요.')
            return;
        }
        if (change) { // klay -> perro

            let sendKlay = 0;
            let perroAmount = 0;
            if (currency == true) {
                sendKlay = String(klay)
                perroAmount = String(k2p);
            } else {
                sendKlay = String(p2k);
                perroAmount = String(perr);
            }

            console.log(perroAmount)
            if (window.klaytn.selectedAddress === undefined) {
                await window.klaytn.enable()
                console.log(window.klaytn.selectedAddress)
            }

            window.caver.klay
                .sendTransaction({
                    type: 'VALUE_TRANSFER',
                    from: window.klaytn.selectedAddress,
                    to: '0xC04a226684ED39C0341071af53f34E98aFA06156', // 관리자 공개키 
                    value: caver.utils.toPeb(sendKlay, 'KLAY'),
                    gas: 8000000
                })
                .once('transactionHash', transactionHash => {
                    console.log('txHash', transactionHash)
                })
                .once('receipt', receipt => {
                    console.log('receipt', receipt)
                    const recipientAddress = receipt.from;
                    const data = {
                        recipientAddress,
                        perroAmount,
                        change

                    }
                    console.log('data!!!!', data);
                    dispatch(Swap_REQUEST(data))
                })
                .once('error', error => {
                    console.log('error', error)
                    alert('거절.')
                })
        } else { //  perro -> klay
            

            const kip7 =new window.caver.klay.KIP7('0x1bfbc74191486a98a5abd8749c17fa0496c3d765')
            const exchangeToken = await kip7.transfer('0xB3064FA7E7F47A14E2e9F268799B99a9ce038826','10000000000000000000',{
                from:window.klaytn.selectedAddress
            })
            console.log(exchangeToken);
           
        }

    }
    const change_state = () => {
        setChange(!change)
    }

    const change_value = (values) => {
        setCurrency(values)
    }

    const handleGuide = ()=>{
        return setOpenGuide(!openGuide)
    }

    return (
        <>
            {/* <FlexContain> */}
                <PerroGuide>
                <div>
                    <div className="get_perro_btn" onClick={handleGuide}>
                        토큰 추가 가이드
                    </div>  
                    { openGuide ? <img src="https://i.ibb.co/vLQH92r/33.jpg" alt="33" border="0" />:''}
                </div>
                </PerroGuide>
                <StyledSwap>

                    {change ?
                        <>
                            <Button value="CHANGE KLAYTN" color="sky" func={change_state} />
                            <Container_Perro
                                currency={currency}
                                k2p={k2p}
                                p2k={p2k}
                                klay={klay}
                                perr={perr}
                                change_value={change_value}
                                handleKlay={handleKlay}
                                handlePerr={handlePerr}
                                SwapPerro={SwapPerro}
                            />

                        </>
                        :
                        <>
                            <Button value="CHANGE TOKEN" color="sky" func={change_state} />
                            <Container_Klatn
                                currency={currency}
                                k2p={k2p}
                                p2k={p2k}
                                klay={klay}
                                perr={perr}
                                change_value={change_value}
                                handleKlay={handleKlay}
                                handlePerr={handlePerr}
                                SwapPerro={SwapPerro}
                            />
                        </>
                    }
                </StyledSwap>
            {/* </FlexContain> */}
        </>
    );
}

export default SwapToken;