import { useEffect, useState } from "react"
import useInput from "../../hook/useInput"
import CustomInput from "../Input/index"
import Button from "../Button"
import { useDispatch } from "react-redux"
import { Auction_REQUEST } from '../../reducers/mint'
import OptionBox from "../OptionBox/OptionBox"
import DatePicker from "react-datepicker"
import CalendarContainer from './sell.css'



const Auction = () =>{
    const price = useInput();
    const [extension,setExtension] = useState(false)
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());

    const handleExtension =()=>{
        setExtension(!extension)
    }

    const date_to_str=(format)=>{
    const year = format.getFullYear();
    const month = format.getMonth() + 1;
    if(month<10) month = '0' + month;
    const date = format.getDate();
    if(date<10) date = '0' + date;
    const hour = format.getHours();
    if(hour<10) hour = '0' + hour;
    const min = format.getMinutes();
    if(min<10) min = '0' + min;
    // const sec = format.getSeconds();
    // if(sec<10) sec = '0' + sec;

    return year + "-" + month + "-" + date + " " + hour + ":" + min ;
}

    const AuctionSubmit = async()=>{
        // const formData = new FormData();
        // const deadline = date_to_str(startDate)
        // formData.append("bid", price.value)
        // formData.append("deadline",deadline)
        // formData.append("option",extension)
        // for (let key of formData.keys()) {
        //     console.log(key);
        //   }
        // for (let value of formData.values()) {
        //     console.log(value);
        //   }
        // await dispatch(Auction_REQUEST(formData))

        const deadline = date_to_str(startDate)
        const data ={
            bid:price.value,
            deadline:deadline,
            option:extension
        }
        dispatch(Auction_REQUEST(data))
    }
    // const getDeadline =()=>{
    //     const date = new Date();
    // }

    // const getDeadline=(date)=>{
    //     console.log(date);
    // }
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
            <p>경매 기간을 선택해주세요</p>
            <div>
                <DatePicker
                closeOnScroll={true}
                dateFormat="yyyy/MM/dd"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                // onClick={(date)=>{getDeadline(date)}}
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