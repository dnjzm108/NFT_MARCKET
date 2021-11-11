import Button from '../Button'
import { useEffect, useState } from 'react';
import { Auction_Wrap ,Auction_History_Wrap} from './Auction.css'


export const Auction = (props) => {
    
     const {auction_data} = props;
    const [isLoading, setIsLoading] = useState(true)


useEffect(()=>{
if(auction_data[0] !== undefined){
    setIsLoading(false)
}
},[props.auction_data])

if(isLoading){
    return(
        <span>로딩중</span>
    )
} 
    return (
        <>
            <Auction_Wrap>
                <div>
                    <h3>마감 시간 : {auction_data[0].deadline} </h3>
                    <h3>현재 최고가</h3>
                    <h2><img src="/klay.png" alt="" />{auction_data[0].bid}</h2>
                    <h4>현재 낙찰받을수있는 사람</h4>
                    <h5> {auction_data[0].bider} </h5>
                </div>
                <div>
                    <Button value="경매 참여하기" color="sky" func={props.handlePopup}/>
                </div>
            </Auction_Wrap>
        </>
    )

}


export const Auction_History = (props) => {
    const {auction_data} = props;
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
    if(auction_data[0] !== undefined){
        setIsLoading(false)
    }
    },[props.auction_data])
    

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
                    <th>낙찰된 날짜</th>
                    <th>낙찰가</th>
                    <th>낙찰받은 사람</th>
                </tr>
                {
                    auction_data.map((v,i)=>{
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