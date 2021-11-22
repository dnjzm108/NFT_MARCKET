import axios from "axios";
import { all, call, takeLatest,fork,put} from "redux-saga/effects";
import {url} from './url'


function joinAPI(data){
     
    return axios.post(`${url}/user/join`,data,{ headers: {'Content-Type': 'multipart/form-data'}})
}

function* join(action){
    
    let result = yield call(joinAPI,action.data)
    let {response} = result.data
    const {data} = result;

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
function sellerAPI(data){
    return axios.post(`${url}/user/applyseller`,data)
}

function* seller(action){
    let result = yield call(sellerAPI,action.data)
    console.log(result);
    let {success,error} = result.data

    if (success == true) {
        yield put({
            type: 'SELLER_APPLY_SUCCESS'
        })
        alert('정상정으로 신청되었습니다.')
    } else {
        yield put({
            type: 'SELLER_APPLY_ERROR'
        })
        alert(error.message)
    }
    
}


function* watchUser(){
    yield takeLatest('USER_LOGIN_REQUEST',login)
    yield takeLatest('USER_JOIN_REQUEST',join)
    yield takeLatest('SELLER_APPLY',seller)
    
}

export default function* userSaga(){
    yield all([
        fork(watchUser)
    ])
}