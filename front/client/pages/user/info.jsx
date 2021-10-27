import Profile from "../../component/Profile";
import MyInfo from "../../component/MyInfo";
import Navigation from "../../component/Navigation";
import SubNav from "../../component/SubNav"
import { useState } from "react";
import BuyList from '../../component/BuyList'
import Info from "../../container/Info";
const InfoPage = () => {
    const [selected,isSelected] = useState(0)

    //쿼리를 읽어오는 함수


    return (
            <Info>
            <Navigation/> 
            <div className='bg_grey'>
                {/* <SubNav/> */}
                {}
            
                {selected==2 && <MyInfo/>}
                {selected==0 && <Profile/>}
                {selected==1 && <BuyList/>}
            </div>
            </Info>
    );
}

export default InfoPage;
