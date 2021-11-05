import axios from "axios"
import { all, call, takeLatest,fork,put} from "redux-saga/effects";

async function tokenSwapAPI(data){
    return  await axios.post('http://localhost:4000/nft/swap', data)
  }


function* swapSaga(action){
    let result = yield call(tokenSwapAPI,action.data)
    const {data} = result; 
    console.log(data)
    if(data.success){
      alert(`${data.amount}perro 발행되었습니다.`)
      yield put({
                type: 'TOKEN_SWAP_SUCCESS',
            })
    }else{

    }

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