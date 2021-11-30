import { useEffect, useState } from "react"
import useInput from "../../hook/useInput"
import CustomInput from "../CustomInput"
import Button from "../Button"
import { useDispatch } from "react-redux"
import { Auction_REQUEST } from '../../reducers/mint'
import OptionBox from "../OptionBox/OptionBox"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";



const Auction = 
({bid,setBid,
extension,setExtension,
startDate,setStartDate}) =>{
    

    const handleExtension =()=>{
         if(extension==0){
            setExtension(1)
        }else if(extension==1){
            setExtension(0)
        }
    }

    // datepicker 설정 - 오늘 이전 날짜는 선택 못하게
    const isPossibleDay = (date) => {
        const currentDate = new Date();
        const selectedDate = new Date(date);
        return currentDate.getTime() <= selectedDate.getTime();
    };


    const filterPassedTime =(time)=>{
        const currentDate = new Date()
        const selectedDate = new Date(time)

        return currentDate.getTime() < selectedDate.getTime()
    }

    // const checking =()=>{
    //     console.log("hey")
    // }

    return(
        <>
        <div className="auction">
            <h3>경매가로</h3>
            <h2>판매할 가격을 입력하세요</h2>
            <div className="auction_input">
                <CustomInput
                    defaultValue={bid}
                    placeholder='경매가'
                    width="400px"
                    msg="가격을 입력해주세요"
                    type="number"
                    onChange={(e)=>{setBid(e)}}
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
                timeIntervals={5}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                filterDate={isPossibleDay}
                filterTime={filterPassedTime}
                // minDate={new Date()} // 과거 날짜 disable
                // onClick ={checking}
                />
            </div>
            
          
        </div>
        <div className="extension_box">
            <input type="checkbox" name="extension" id="extension" onClick={()=>handleExtension()} />
            <p><label htmlFor="extension">새로운 입찰 발생시 경매 시간 5분 연장</label></p>
        </div>
        <div className="auction_btn">
        {/* <Button value="입력완료" func={AuctionSubmit}/> */}
        </div>
        
        </>
    )
}

export default Auction