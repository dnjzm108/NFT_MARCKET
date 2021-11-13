import { all, call, takeLatest,fork,put} from "redux-saga/effects";
import axios from "axios";
import qs from "qs";
axios.default.paramsSerializer = params => {
  return qs.stringify(params);
}
import {
    INIT_EXPLORE_REQUEST,
    GET_EXPLORE_REQUEST,
    GET_EXPLORE_SUCCESS,
    GET_EXPLORE_ERROR,
    GET_FILTER_SUCCESS,
} from '../reducers/explore'


const url = process.env.NEXT_PUBLIC_URL; 


async function exploreAPI(data){

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
    return  await axios.get(`${url}/main`,{params})
}


function* explore(action){
    let result = yield call(exploreAPI,action.data)
    let {data} = result
    if (data.success) {
        yield put({
            type: GET_EXPLORE_SUCCESS,
            data:{
                list:data.response.list,
                skip:data.response.skip
            }
        })
        } else {
        yield put({
            type: GET_EXPLORE_ERROR,
            data:{
                code:data.error.code,
                message:data.error.message,
            }
        })
    }

}

async function mainInitAPI(){
    return  await axios.get(`${url}/main/init`)
}

function* mainInit(action){
    console.log(action.data)
    let result = yield call(mainInitAPI)
    let {data} = result
    if (data.success) {
        yield put({
            type: GET_EXPLORE_SUCCESS,
            data:{
                list:data.response.list,
                skip:data.response.skip,
                }
            })
        yield put({
            type: GET_FILTER_SUCCESS,
            data:{
                category:data.response.category,
                designer:data.response.designer,
                }
            })
    } else {
        yield put({
            type: GET_EXPLORE_ERROR,
            data:{
                code:data.error.code,
                message:data.error.message,
            }
        })
    }
}

function* watchExplore(){
    yield takeLatest(GET_EXPLORE_REQUEST,explore)
    yield takeLatest(INIT_EXPLORE_REQUEST,mainInit)
}

export default function* exploreSaga(){
    yield all([
        fork(watchExplore)
    ])
}