import axios from "axios";
import { all, call, takeLatest,fork,put} from "redux-saga/effects";
import {url} from './url'


function joinAPI(data){
     
    return axios.post(`${url}/user/join`,data,{ headers: {'Content-Type': 'multipart/form-data'}})
}

function* join(action){
    
    let result = yield call(joinAPI,action.data)
    let {response} = result.data
    if (response !== null) {
        yield put({
            type: 'USER_JOIN_SUCCESS',
            data: 'OK',
            user_info:response
        })
    } else {
        yield put({
            type: 'USER_JOIN_ERROR',
            data: '아이디와 비밀번호를 확인해주세요'
        })
    }
    
}

function loginAPI(data){
    return axios.post(`${url}/user/login`,data)
}

function* login(action){
    let result = yield call(loginAPI,action.data)
    console.log(result);
    let {response} = result.data
    if (response !== undefined) {
        yield put({
            type: 'USER_LOGIN_SUCCESS',
            user_info:response
        })
    } else {
        yield put({
            type: 'USER_LOGIN_ERROR'
        })
    }
    
}


function* watchUser(){
    yield takeLatest('USER_LOGIN_REQUEST',login)
    yield takeLatest('USER_JOIN_REQUEST',join)
    
}

export default function* userSaga(){
    yield all([
        fork(watchUser)
    ])
}