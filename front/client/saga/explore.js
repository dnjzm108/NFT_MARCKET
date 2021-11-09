import axios from "axios";
import qs from "qs";
axios.default.paramsSerializer = params => {
  return qs.stringify(params);
}
import { all, call, takeLatest,fork,put} from "redux-saga/effects";
const url = process.env.NEXT_PUBLIC_URL; 


async function exploreAPI(data){
    console.log(data)
    let params = {...data}
    if(params.category==null){
        delete params.category;
    }
    if(params.designer==null||params.designer.length==0){
        delete params.designer;
    }
    if(params.price_min==null||params.price_max==null){
        delete params.price_min
        delete params.price_max
    }
    if(params.search==null){
        delete params.search
    }
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

async function getFilterDataAPI(){
    return  await axios.get(`${url}/nft/filter`)
}

function* getFilterData(){
    let result = yield call(getFilterDataAPI)
    let {data} = result
    if (data.success) {
        yield put({
            type: 'GET_FILTER_DATA_SUCCESS',
            data:{
                category:data.category,
                designer:data.designer,
            }
            })
    } else {
        yield put({
            type: 'GET_FILTER_DATA_ERROR',
            })
    }
}

function* watchExplore(){
    yield takeLatest('EXPLORE_REQUEST',explore)
    yield takeLatest('UPDATE_FILTER',explore)
    yield takeLatest('GET_FILTER_DATA_REQUEST',getFilterData)
}

export default function* exploreSaga(){
    yield all([
        fork(watchExplore)
    ])
}