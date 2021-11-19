import axios from "axios";
import { all, call, takeLatest, fork, put } from "redux-saga/effects";
import { url } from './url'


async function poductAPI(data) {
  let info = []
    let result = await axios.post(`${url}/product/product_detail`, data)
    info.push(result.data.response.img)
    info.push(result.data.response.product)

    let { product_id } = result.data.response.product[0]
    let { product_no } = result.data.response.product[0]
    
    let code_data = {
        product_code :product_no.substr(0,4),
        product_no
    }
    let other_product = await axios.post(`${url}/product/other_product`, code_data)
    info.push(other_product.data.response)
    
    if (result.data.response.product[0].type == "auction") {
        let autcion_info = {
            product_id
        }
        let auction = await axios.post(`${url}/product/auction_info`, autcion_info)
        info.push(auction.data.response)
    }
    
    return info
}

function* product_page(action) {
    let result = yield call(poductAPI, action.data)
    if(result.length !== 0){
        yield put({
            type: 'PRODUCT_PAGE_SUCCESS',
            product_info:result
        })
    }else{
        yield put({
            type: 'PRODUCT_PAGE_ERROR'
        })
    }
}

async function auctionAPI(data){
    return await axios.post(`${url}/product/applyauction`,data)
}

function* apply_auction(action){
    let result = yield call(auctionAPI, action.data)

    if(result.data.success){
        yield put({
            type: 'AUCTION_SUCCEESS'
        })
    }else{
        yield put({
            type: 'AUCTION_ERROR'
        })
    }
} 

async function immyAPI(data){
    return await axios.post(`${url}/product/order`, data)
}

function* apply_immy(action){
    let result = yield call(immyAPI, action.data)

    if(result.data.success){
        yield put({
            type: 'IMMY_SUCCEESS',
            data : result.data.response
        })
    }else{
        yield put({
            type: 'IMMY_ERROR'
        })
    }
} 

async function noticeAPI(data){
    return await axios.post(`${url}/product/notice_order`, data)
}

function* notice_info(action){
    let result = yield call(noticeAPI, action.data)
    if(result.data.success){
        yield put({
            type: 'NOTICE_INFO_SUCCESS',
            data : result.data.response
        })
    }else{
        yield put({
            type: 'NOTICE_INFO_ERROR'
        })
    }
} 

function checkAPI(data){
    return axios.post(`${url}/user/name_check`,data)
}

function* check(action){
    let result = yield call(checkAPI,action.data)
    let {response} = result.data
    if (response !== null) {
        yield put({
            type: 'USER_NAME_SUCCESS',
            check:response
        })
    } else {
        yield put({
            type: 'USER_NAME_ERROR'
        })
    }
    
}


function* watchProduct() {
    yield takeLatest('PRODUCT_PAGE_REQUEST', product_page)
    yield takeLatest('APPLY_IMMY', apply_immy)
    yield takeLatest('APPLY_AUCTION', apply_auction)
    yield takeLatest('NOTICE_INFO', notice_info)
    yield takeLatest('USER_NAME_CHECK',check)
}

export default function* productSaga() {
    yield all([
        fork(watchProduct)
    ])
}