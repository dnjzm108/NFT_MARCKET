import axios from "axios";
import { all, call, takeLatest,fork,put} from "redux-saga/effects";
const url = process.env.NEXT_PUBLIC_URL; 


async function exploreAPI(data){
    console.log("data",data);
    return  await axios.get(`${url}/nft`)
}
function* explore(action){
    let result = yield call(exploreAPI,action.data)
    let {data} = result
    console.log(data)
    if (data) {
        yield put({
            type: 'EXPLORE_SUCCESS',
            data
          })

        } else {
        yield put({
            type: 'EXPLORE_ERROR',
            data
        })
    }

}



function* watchExplore(){
    yield takeLatest('EXPLORE_REQUEST',explore)
}

export default function* exploreSaga(){
    yield all([
        fork(watchExplore)
    ])
}