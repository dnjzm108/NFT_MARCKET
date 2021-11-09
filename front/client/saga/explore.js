import axios from "axios";
import qs from "qs";
axios.default.paramsSerializer = params => {
  return qs.stringify(params);
}
import { all, call, takeLatest,fork,put} from "redux-saga/effects";
const url = process.env.NEXT_PUBLIC_URL; 


async function exploreAPI(data){
    const params = {...data}
    return  await axios.get(`${url}/nft`,{params})
}
function* explore(action){
    let result = yield call(exploreAPI,action.data)
    let {data} = result
    if (data) {
        yield put({
            type: 'EXPLORE_SUCCESS',
            data,
          })

        } else {
        yield put({
            type: 'EXPLORE_ERROR',
            data
        })
    }

}

async function getDesignerAPI(){
    return  await axios.get(`${url}/nft/designer`)
}

function* getDisigner(){
    let result = yield call(getDesignerAPI)
    let {data} = result
    if (data.success) {
        yield put({
            type: 'GET_DESIGNER_SUCCESS',
            data:data.designer,
            })
    } else {
        yield put({
            type: 'GET_DESIGNER_ERROR',
            })
    }
}



function* watchExplore(){
    yield takeLatest('EXPLORE_REQUEST',explore)
    yield takeLatest('GET_DESIGNER_REQUEST',getDisigner)
}

export default function* exploreSaga(){
    yield all([
        fork(watchExplore)
    ])
}