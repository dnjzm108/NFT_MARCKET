import { useEffect, useState } from "react"
import useInput from "../../hook/useInput"
import CustomInput from "../CustomInput"
import Button from "../Button"
import { useDispatch } from "react-redux"
import { Auction_REQUEST } from '../../reducers/mint'
import OptionBox from "../OptionBox/OptionBox"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";



const Auction = () =>{
    const price = useInput();
    const [extension,setExtension] = useState(false)
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date())

    const handleExtension =()=>{
        setExtension(!extension)
    }
    const isPossibleDay = (date) => {
        const currentDate = new Date();
        const selectedDate = new Date(date);
        return currentDate.getDate() <= selectedDate.getDate();
      };

    const AuctionSubmit = async()=>{
        const deadline = new Date(+startDate+ 3240*10000).toISOString().replace("T", " ").replace(/\..*/, ''); 
        const data ={
            bid:price.value,
            deadline:deadline, //2021-11-16 14:36:51 이런 형태로 바꿔야 함
            option:extension
        }
        dispatch(Auction_REQUEST(data))
    }

    return(
        <>
        <div className="auction">
            <h3>경매가로</h3>
            <h2>판매할 가격을 입력하세요</h2>
            <div className="auction_input">
                <CustomInput
                    {...price}
                    placeholder='경매가'
                    width="400px"
                    msg="가격을 입력해주세요"
                    type="number"
                />
                <p>원</p>
            </div>
        </div>
        <div className="select_terms">
            <p>경매 마감일을 선택해주세요</p>
            <div>
                <DatePicker
                closeOnScroll={true}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                filterDate={isPossibleDay}
                />
            </div>
            
          
        </div>
        <div className="extension_box">
            <input type="checkbox" name="extension" onClick={()=>handleExtension()} />
            <p>새로운 입찰 발생시 경매 시간 5분 연장</p>
        </div>
        <div className="auction_btn">
        <Button value="입력완료" func={AuctionSubmit}/>
        </div>
        
        </>
    )
}

export default Auction