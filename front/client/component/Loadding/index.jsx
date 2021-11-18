import { Loadding_Wrap } from './Loadding.css'


const Loadding = () => {

    return (
        <Loadding_Wrap>
            <div className="loading-container">
                <div className="loading"></div>
                <div className="loading-text">loading</div>
            </div>
        </Loadding_Wrap>
    )
}

export default Loadding