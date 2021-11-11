import axios from "axios";
import { all, call, takeLatest,fork,put} from "redux-saga/effects";
import {url} from './url'
import {
    MINT_MAIN_CATE_REQUEST,
    MINT_MAIN_CATE_SUCCESS,
    MINT_MAIN_CATE_ERROR
} from "../reducers/mint"

async function mintAPI(data){
  return  await axios.post('http://localhost:4000/nft/mint', data, { headers: {'Content-Type': 'multipart/form-data'}})
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
    }else{

    }
    // let {data} = result

    // if (data.login_info !== undefined) {
    //     yield put({
    //         type: 'USER_LOGIN_SUCCESS',
    //         data: 'OK',
    //         user_info:data.login_info
    //     })
    // } else {
    //     yield put({
    //         type: 'USER_LOGIN_ERROR',
    //         data: '아이디와 비밀번호를 확인해주세요'
    //     })
    // }
    
}

async function getMaincateAPI(){
    return await axios.get('http://localhost:4000/nft/maincate')
     
}

function* getMaincate(action) {
    let result = yield call(getMaincateAPI)
    let {data} = result
    yield put({
        type: MINT_MAIN_CATE_SUCCESS,
        data: data.map(v => v.value),
    })
    // if (data.success) {
    //     yield put({
    //         type: MINT_MAIN_CATE_SUCCESS,
    //         data: data.map(v => v.value),
    //     })
    // } else {
    //     yield put({
    //         type: MINT_MAIN_CATE_ERROR,
    //         data: 'error',
    //     })
    // }
}

function* watchMint(){
    yield takeLatest('MINT_REQUEST',mint)
}

function* watchMintMainCate(){
    yield takeLatest(MINT_MAIN_CATE_REQUEST,getMaincate)

}

export default function* mintSaga(){
    yield all([
        fork(watchMint),
        fork(watchMintMainCate)
    ])
}