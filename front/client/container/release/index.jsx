import { StyledRelease } from "./Release.css";
import FileInformation from '../../component/FileInformation/index'
import AgreeInfo from '../../component/AgreeInfo/index'
import Sell from '../../component/Sell/index'
import NewRelease from '../../component/NewRelease/index'
import Preshow from '../../component/Preshow/index'

const Release = () => {
    return (
        <StyledRelease>
            {/* 헤더 */}
            <NewRelease/>
            <div className="flex_contain">
            <FileInformation/><Preshow/>
            </div>
            <AgreeInfo/>
            <Sell/>
        </StyledRelease>
    )
}

export default Release