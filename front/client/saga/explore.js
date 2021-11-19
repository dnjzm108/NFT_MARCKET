import { all, call, takeLatest,fork,put} from "redux-saga/effects";
import { url } from './url'
import axios from "axios";
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
    return  await axios.put(`${url}/main/like`,data)
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
    
    let {params,nickname,auth} = data
    const config = {
        params,
        headers:{
            'nickname':nickname,
            'auth':auth,
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
    const config = {
        params,
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
        fork(watchExploreLike),
    ])
}