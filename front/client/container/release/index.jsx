import { StyledRelease } from "./Release.css";
import FileInformation from '../../component/FileInformation/index'
import AgreeInfo from '../../component/AgreeInfo/index'
import Sell from '../../component/Sell/index'
import NewRelease from '../../component/NewRelease/index'
import Preshow from '../../component/Preshow/index'
import Navigation from "../../component/NavBigation";

const Release = () => {
    return (
        <StyledRelease>
            <Navigation/>
            {/* 새로운 */}
            <div className="flex_contain">
            <div>
            <NewRelease/>
            <FileInformation/>
            </div>
            <Preshow/>
            </div>
            <AgreeInfo/>
            <Sell/>
        </StyledRelease>
    )
}

export default Release