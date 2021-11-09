import axios from "axios";
import { all, call, takeLatest,fork,put} from "redux-saga/effects";
import {url} from './url'


function joinAPI(data){
    // const options = {'Content-type':'application/json'}
    console.log('data@@@@@@@@@@@@',data);
    return axios.post(`${url}/user/join`,data,{ headers: {'Content-Type': 'multipart/form-data'}})
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
function adminAPI(data){
    return axios.post(`${url}/uesr/admin`,data)
}
function* admin(action){
    console.log('관리자 로그인');
    let result = yield call(adminAPI,action.data)
    let {data} = result
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