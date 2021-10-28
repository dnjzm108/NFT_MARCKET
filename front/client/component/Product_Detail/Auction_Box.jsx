import Button from '../Button'
import { Auction_Wrap ,Auction_History_Wrap} from './Auction.css'

export const Auction = ({handlePopup}) => {
    return (
        <>
            <Auction_Wrap>
                <div>
                    <h3>마감 시간 : 2021.10.20 10:00Am</h3>
                    <h3>현재 최고가</h3>
                    <h2>100클레이튼</h2>
                    <h4>현재 낙찰받을수있는 사람</h4>
                    <h5> 정성진 </h5>
                </div>
                <div>
                    <Button value="경매 참여하기" color="sky" func={handlePopup}/>
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