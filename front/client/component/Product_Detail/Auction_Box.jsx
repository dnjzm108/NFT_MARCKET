import Button from '../Button'
import { useEffect, useState } from 'react';
import { Auction_Wrap ,Auction_History_Wrap} from './Auction.css'

export const Auction = (props) => {
     const {auction_data} = props;
    const [isLoading, setIsLoading] = useState(true)
let {length} = auction_data
const last = length - 1
useEffect(()=>{
if(auction_data[0] !== undefined){
    setIsLoading(false)
    console.log("++++++++++++",length);
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
                    <h3>마감 시간 :{auction_data[0].deadline} </h3>
                    <h3>현재 최고가</h3>
                    <h2>{auction_data[last].bid}</h2>
                    <h4>현재 낙찰받을수있는 사람</h4>
                    <h5> 정성진 </h5>
                </div>
                <div>
                    <Button value="경매 참여하기" color="sky" func={props.handlePopup}/>
                </div>
            </Auction_Wrap>
        </>
    )

}


export const Auction_History = () => {
    return(
        <>
        <Auction_History_Wrap>
            <table>
                <tr>
                    <th>낙찰된 날짜</th>
                    <th>낙찰가</th>
                    <th>낙찰받은 사람</th>
                </tr>
                <tr>
                    <td>2021.10.23.10:10AM</td>
                    <td><img src="/klay.png"/>90</td>
                    <td>정성진</td>
                </tr>
                <tr>
                    <td>2021.10.23.10:10AM</td>
                    <td><img src="/klay.png"/>90</td>
                    <td>정성진</td>
                </tr>
                <tr>
                    <td>2021.10.23.10:10AM</td>
                    <td><img src="/klay.png"/>90</td>
                    <td>정성진</td>
                </tr>
                <tr>
                    <td>2021.10.23.10:10AM</td>
                    <td><img src="/klay.png"/>90</td>
                    <td>정성진</td>
                </tr>
                <tr>
                    <td>2021.10.23.10:10AM</td>
                    <td><img src="/klay.png"/>90</td>
                    <td>정성진</td>
                </tr>
                <tr>
                    <td>2021.10.23.10:10AM</td>
                    <td><img src="/klay.png"/>90</td>
                    <td>정성진</td>
                </tr>
               
            </table>

        </Auction_History_Wrap>
        </>
    )
}