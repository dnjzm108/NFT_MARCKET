import axios from "axios";
import { all, call, takeLatest,fork,put} from "redux-saga/effects";
import {url} from './url'


function joinAPI(data){
    // const options = {'Content-type':'application/json'}
    return axios.post(`${url}/user/join`,data)
    
}
function* join(action){
    
    console.log("action++++++++",action);
    let result = yield call(joinAPI,action.data)
    let {data} = result
    
    if (data !== null) {
        yield put({
            type: 'USER_JOIN_SUCCESS',
            data: 'OK',
            user_info:data
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
    console.log('성공');
    let result = yield call(loginAPI,action.data)
    let {data} = result

    if (data !== undefined) {
        yield put({
            type: 'USER_LOGIN_SUCCESS',
            data: 'OK',
            user_info:data
        })
    } else {
        yield put({
            type: 'USER_LOGIN_ERROR',
            data: '아이디와 비밀번호를 확인해주세요'
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