import axios from "axios";
import { all, call, takeLatest,fork,put} from "redux-saga/effects";
import {url} from './url'


function joinAPI(data){
     
    return axios.post(`${url}/user/join`,data,{ headers: {'Content-Type': 'multipart/form-data'}})
}

function* join(action){
    
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
    let result = yield call(loginAPI,action.data)
    console.log(result);
    let {data} = result
console.log(data);
    if (data !== '') {
        console.log(data);
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
function adminAPI(data){
    const options = {'Content-type':'application/json'}
    return axios.post(`${url}/user/admin`,data)
}
function* admin(action){
    let result = yield call(adminAPI,action.data)
    let {data} = result
    console.log(data);
    if (data == true) {
        yield put({
            type: 'ADMIN_SUCCESS'
        })
    } else {
        yield put({
            type: 'ADMIN_ERROR'
        })
    }
}

function* watchUser(){
    yield takeLatest('USER_LOGIN_REQUEST',login)
    yield takeLatest('USER_JOIN_REQUEST',join)
    yield takeLatest('ADMIN_LOGIN',admin)

}

export default function* userSaga(){
    yield all([
        fork(watchUser)
    ])
}