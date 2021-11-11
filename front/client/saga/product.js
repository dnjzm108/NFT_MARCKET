import axios from "axios";
import { all, call, takeLatest,fork,put} from "redux-saga/effects";
import {url} from './url'


function poductAPI(data){
    console.log(data);
    // let result = await axios.post(`${url}/product/product_detail`, data)
    // let result = await axios.post(`${url}/product/auction_info`, autcion_info)
    // let checking_like = await axios.post(`${url}/product/check_like`, info)
    // let other_product = await axios.post(`${url}/product/other_product`, code_data)
}

function* product_page(action){
    let result = yield call(poductAPI,action.data)
    let {data} = result
    console.log(data);
}

function* watchProduct(){
     yield takeLatest('PRODUCT_PAGE_REQUEST',product_page)

}

export default function* productSaga(){
    yield all([
        fork(watchProduct)
    ])
}