import axios from "axios";
import { all, call, takeLatest,fork,put} from "redux-saga/effects";
import {url} from './url'
import {
    MINT_MAIN_CATE_REQUEST,
    MINT_MAIN_CATE_SUCCESS,
    MINT_MAIN_CATE_ERROR,
    MINT_MIDDLE_CATE_REQUEST,
    MINT_MIDDLE_CATE_SUCCESS,
    AUCTION_REQUEST,
    AUCTION_SUCCESS,
} from "../reducers/mint"


// mint 상품 등록 정보 api
async function mintAPI(data){
  return  await axios.post(`${url}/nft/mint`, data, { headers: {'Content-Type': 'multipart/form-data'}})
}

function* mint(action){
    let result = yield call(mintAPI,action.data)
    const {data} = result; 
    // console.log("result?",result);
    if(data.success){
      alert(`토큰아이디${data.tokenId}: 발행되었습니다.`)
      yield put({
                type: 'MINT_SUCCESS',
                data: data,
            })
    }
}

// 메인 카테고리 가져오는 api
async function getMaincateAPI(){
    return await axios.get(`${url}/nft/maincate`)
}

function* getMaincate() {
    let result = yield call(getMaincateAPI)
    let {data} = result
    if(data.success){
        yield put({
            type: MINT_MAIN_CATE_SUCCESS,
            // data: data.response.map(v=>`${v.value},${v.code}`),
            data: data.response
        })
    } else {

    }
}


// 중간 카테고리 가져오는 api
async function getMiddlecateAPI(){
    return await axios.get(`${url}/nft/middlecate`)
}

function* getMiddlecate(){
    let result = yield call(getMiddlecateAPI)
    let {data} = result
    if(data.success){
        yield put({
            type: MINT_MIDDLE_CATE_SUCCESS,
            data: data.response.map(v=>v.value),
        })
    }
    
}

async function AunctionInfoAPI(data){
    return await axios.post(`${url}/nft/auctioninfo`,data)
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

// watch 모아놓는 곳
function* watchMint(){
    yield takeLatest('MINT_REQUEST',mint)
}

function* watchMintMainCate(){
    yield takeLatest(MINT_MAIN_CATE_REQUEST,getMaincate)

}
function* watchMintMiddleCate(){
    yield takeLatest(MINT_MIDDLE_CATE_REQUEST,getMiddlecate)
}

function* watchAuctionInfo(){
    yield takeLatest(AUCTION_REQUEST,sendAuctionInfo)
}

export default function* mintSaga(){
    yield all([
        fork(watchMint),
        fork(watchMintMainCate),
        fork(watchMintMiddleCate),
        fork(watchAuctionInfo)
    ])
}