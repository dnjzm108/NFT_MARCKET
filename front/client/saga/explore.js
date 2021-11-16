import { all, call, takeLatest,fork,put} from "redux-saga/effects";
import axios from "axios";
import qs from "qs";
import {url} from './url'
axios.default.paramsSerializer = params => {return qs.stringify(params);}

import {
    INIT_EXPLORE_REQUEST,
    GET_EXPLORE_REQUEST,
    GET_EXPLORE_SUCCESS,
    GET_EXPLORE_ERROR,
    UPDATE_LIKE_REQUEST,
    UPDATE_LIKE_SUCCESS,
    UPDATE_LIKE_ERROR,
    INIT_EXPLORE_SUCCESS,
} from '../reducers/explore'

async function updateLikeAPI(data){
    return  await axios.post(`${url}/main/like`,data)
}


function* updateLike(action){
    let result = yield call(updateLikeAPI,action.data)
    let {data} = result
    if (data.success) {
        yield put({
            type: UPDATE_LIKE_SUCCESS,
            data:{
              ...data.response
            }
        })
        } else {
        yield put({
            type: UPDATE_LIKE_ERROR,
            data:{
                ...data.error
            }
        })
    }

}
async function exploreAPI(data){
    let {params,wallet} = data
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


    const config = {
        params,
        headers:{
            'wallet':wallet,
          },
    }
    return  await axios.get(`${url}/main`,config)
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

async function mainInitAPI(data){
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

    const config = {
        params,
        // headers:{
        //     'wallet':wallet,
        //   },
      }
    return  await axios.get(`${url}/main/init`,config)
}

function* mainInit(action){
    let result = yield call(mainInitAPI,action.data)
    let {data} = result
    if (data.success) {
        yield put({
            type: INIT_EXPLORE_SUCCESS,
            data:{
                list:data.response.list,
                skip:data.response.skip,
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

function* watchInitExplore(){
    yield takeLatest(INIT_EXPLORE_REQUEST,mainInit)
}

function* watchExplore(){
    yield takeLatest(GET_EXPLORE_REQUEST,explore)
}

function* watchExploreLike(){
    yield takeLatest(UPDATE_LIKE_REQUEST,updateLike)
}


export default function* exploreSaga(){
    yield all([
        fork(watchExplore),
        fork(watchInitExplore),
        fork(watchExploreLike)
    ])
}