import Button from '../Button'
import { useEffect, useState } from 'react';
import { Auction_Wrap ,Auction_History_Wrap} from './Auction.css'
import { useSelector } from 'react-redux';
import Loadding from '../Loadding'


export const Auction = (props) => {
    const product_state = useSelector(state => state.product)
const {auction_info,auction_history, product_info} = product_state;
    const [isLoading, setIsLoading] = useState(true)


useEffect(()=>{
if(auction_info !== undefined){
    setIsLoading(false)
}
},[auction_info])

if(isLoading){
    return(
        <Loadding />
    )
} 
    return (
        <>
            <Auction_Wrap>
                <div>
                    <h3>마감 시간 : {auction_info.deadline} </h3>
                    <h3>현재 최고가</h3>
                    <h2><img src="/klay.png"/>{auction_history.length>0 ? auction_history[0].bid : product_info['0'].price}</h2>
                    <h4>현재 낙찰받을수있는 사람</h4>
                    <h5> {auction_history.length>0 ?auction_history[0].bider : '-'} </h5>
                </div>
                <div>
                    <Button value="경매 참여하기" color="sky" func={props.handlePopup}/>
                </div>
            </Auction_Wrap>
        </>
    )

}


export const Auction_History = (props) => {
    const product_state = useSelector(state => state.product)
const {auction_info,auction_history} = product_state;
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
    if(auction_history[0] !== undefined){
        setIsLoading(false)
    }
    },[auction_history])
    

    if(isLoading){
        return(
            <span>로딩중</span>
        )
    } 
    return(
        <>
        <Auction_History_Wrap>
            <table>
                <tr>
                    <th>입찰한 시간</th>
                    <th>입찰가</th>
                    <th>입찰한 사람</th>
                </tr>
                {
                    auction_history.map((v,i)=>{
                        return(
                            <tr key={i}>
                            <td>{v.date}</td>
                            <td><img src="/klay.png"/>{v.bid}</td>
                            <td>{v.bider}</td>
                        </tr>
                        )
                    })
                }
               
               
            </table>

        </Auction_History_Wrap>
        </>
    )
}