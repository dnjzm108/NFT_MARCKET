import axios from "axios";
import { all, call, takeLatest, fork, put } from "redux-saga/effects";
import { url } from './url'


function adminAPI(data) {
    // const options = {'Content-type':'application/json'}
    return axios.post(`${url}/user/admin`, data)
}
function* admin(action) {
    let result = yield call(adminAPI, action.data)
    let { response } = result.data
    if (response == true) {
        yield put({
            type: 'ADMIN_SUCCESS'
        })
    } else {
        yield put({
            type: 'ADMIN_ERROR'
        })
        alert('아이디와 비번을 확인해주세요')
    }
}

function sellerAPI(data) {
    return axios.post(`${url}/user/checkseller`, data)
}

function* seller_info(action) {
    let result = yield call(sellerAPI, action.data)
    let { response } = result.data
    if (result.data.success == true){
        yield put({
            type: 'SELLER_SUCCESS',
            seller_info:response
        })
    } else {
        yield put({
            type: 'SELLER_ERROR'
        })
    }
}

function change_sellerAPI(data) {
    return axios.post(`${url}/user/chageseller`,data)
}

function* change_seller(action) {
    let result = yield call(change_sellerAPI, action.data)
    if (result.data.success == true){
        yield put({
            type: 'CHANGE_SELLER_SUCCESS'
        })
    } else {
        yield put({
            type: 'CHANGE_SELLER_ERROR'
        })
    }
}



function* watchAdmin() {

    yield takeLatest('ADMIN_LOGIN', admin)
    yield takeLatest('GET_SELLER_INFO', seller_info)
    yield takeLatest('CHANGE_SELLER', change_seller)
}

export default function* adminSaga() {
    yield all([
        fork(watchAdmin)
    ])
}