import axios from "axios";
import { all, call, takeLatest, fork, put } from "redux-saga/effects";
import { url } from './url'


async function poductAPI(data) {
  let info = []
    let result = await axios.post(`${url}/product/product_detail`, data)
    info.push(result.data.img)
    info.push(result.data.product)
    let { product_id } = result.data.product[0]
    let { product_no } = result.data.product[0]
    
    let code_data = {
        product_code :product_no.substr(0,4),
        product_no
    }
    let other_product = await axios.post(`${url}/product/other_product`, code_data)
    info.push(other_product.data)
    
    if (result.data.product[0].type == "auction") {
        let autcion_info = {
            product_id
        }
        let auction = await axios.post(`${url}/product/auction_info`, autcion_info)
        info.push(auction.data)
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

    if(result){
        yield put({
            type: 'AUCTION_SUCCEESS'
        })
    }else{
        yield put({
            type: 'AUCTION_ERROR'
        })
    }
} 

function* watchProduct() {
    yield takeLatest('PRODUCT_PAGE_REQUEST', product_page)
    yield takeLatest('APPLY_AUCTION', apply_auction)

}

export default function* productSaga() {
    yield all([
        fork(watchProduct)
    ])
}