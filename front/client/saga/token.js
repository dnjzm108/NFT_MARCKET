import axios from "axios"
import { all, call, takeLatest,fork,put} from "redux-saga/effects";




function* swapSaga(){
    const result = yield call(axios.post,'http://localhost:4000/nft/swap')

}


function* KipSaga(){
    const result = yield call(axios.post,`http://localhost:4000/nft/transfer`)
    //NFT랑 같이 해줘야하나?
}

function* watchToken(){
    yield takeLatest('TOKEN_TRANSFER_SUCCESS',KipSaga)
    yield takeLatest('TOKEN_SWAP_REQUEST',swapSaga)
}

export default function* TokenSaga(){
    yield all([
        fork(watchToken)
    ])
}