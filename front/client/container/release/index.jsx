import { StyledRelease } from "./Release.css";
import FileInformation from '../../component/FileInformation/index'
import AgreeInfo from '../../component/AgreeInfo/index'
import Sell from '../../component/Sell/index'
import NewRelease from '../../component/NewRelease/index'

const Release = () => {
    return (
        <StyledRelease>
            {/* 헤더 */}
            <NewRelease/>
            <FileInformation/>
            <AgreeInfo/>
            <Sell/>
        </StyledRelease>
    )
}

export default Release