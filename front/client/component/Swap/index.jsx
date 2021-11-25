import { StyledSwap } from "./swap.css";

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

    console.log(window.klaytn.selectedAddress);

    const SwapPerro = async () => {
        if (window.klaytn.selectedAddress == undefined) {
            alert('로그인을 진행해 해주세요.')
            return;
        }
        if (change) {

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
            console.log(window.klaytn)
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
        } else {
            alert('아직 준비중인 서비스입니다.')
        }

    }
    const change_state = () => {
        setChange(!change)
    }

    const change_value = (values) => {
        setCurrency(values)
    }

    return (
        <>
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
        </>
    );
}

export default SwapToken;