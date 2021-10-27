import { StyledRelease } from "./Release.css";
import FileInformation from '../../component/FileInformation/index'
import AgreeInfo from '../../component/AgreeInfo/index'
import Sell from '../../component/Sell/index'
import NewRelease from '../../component/NewRelease/index'
import Thumbnail from '../../component/Thumbnail/index'
import Navigation from "../../component/Navigation/index";
import Footter from '../../component/Footter'

const Release = () => {
    return (
        <>
        <StyledRelease>
            <Navigation/>
            {/* 새로운 */}
            <div className="flex_contain">
            <div>
            <NewRelease/>
            <FileInformation/>
            </div>
            <Thumbnail/>
            </div>
            <Sell/>
            <AgreeInfo/>
        </StyledRelease>
        {/* <Footter/> */}
        </>
    )
}

export default Release