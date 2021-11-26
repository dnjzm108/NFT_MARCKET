import axios from "axios";
import { all, call, takeLatest,fork,put} from "redux-saga/effects";
import {url} from './url'
import {
    MINT_REQUEST,
    MINT_SUCCESS,
    AUCTION_REQUEST,
    AUCTION_SUCCESS,
    GET_CATEGORY_REQUEST,
    GET_CATEGORY_SUCCESS,
    PRODUCT_OPTIONS_REQUEST,
    PRODUCT_OPTIONS_SUCCESS,
} from "../reducers/mint"


// mint 상품 등록 정보 api
async function mintAPI(data){

  return  await axios.post(`${url}/nft/mint`, data, { headers: {'Content-Type': 'multipart/form-data'}})
}

function* mint(action){
    let result = yield call(mintAPI,action.data)
    const {data} = result; 
    if(data.success){
      alert(`토큰아이디${data.product_id}: 발행되었습니다.`)
      yield put({
                type: MINT_SUCCESS,
                data: data,
            })
    }
}


// 카테고리 정보 가져오는 API
async function getCategoryAPI(){
    return await axios.get(`${url}/nft/category`)
}

function* getCategory(){
    let result = yield call(getCategoryAPI)
    let {data} = result
    if(data.success){
        yield put({
            type: GET_CATEGORY_SUCCESS,
            data:{
                category: data.response.category,
            } 
        })
    }
    
}

// auction 정보 api
async function AunctionInfoAPI(data){
    return await axios.post(`${url}/nft/auctioninfo`,data, {headers: { "Content-Type": `application/json`}})
}

function* sendAuctionInfo(action){
    let result =yield call(AunctionInfoAPI,action.data)
    let {data} = result
    if(data.success){
        yield put({
            type: AUCTION_SUCCESS,
            data:data
        })
    }
    
}

// 상품 옵션 정보 넣기
// async function ProductOptionsAPI(data){
//     return await axios.post(`${url}/nft/options`,data,{headers: { "Content-Type": `application/json`}})

// async function getCategoryAPI(){
//     return await axios.get(`${url}/nft/category`)
// }
    
function* sendProductOptions(action){
    let result = yield call(ProductOptionsAPI,action.data)
    let {data} = result
    if(data.success){
        yield put({
            type: PRODUCT_OPTIONS_SUCCESS,
            data:data
        })
    }
    
}


// watch 모아놓는 곳
function* watchMint(){
    yield takeLatest(MINT_REQUEST,mint),
    yield takeLatest(AUCTION_REQUEST,sendAuctionInfo),
    yield takeLatest(GET_CATEGORY_REQUEST,getCategory),
    yield takeLatest(PRODUCT_OPTIONS_REQUEST,sendProductOptions)

}


export default function* mintSaga(){
    yield all([
        fork(watchMint)
    ])
}