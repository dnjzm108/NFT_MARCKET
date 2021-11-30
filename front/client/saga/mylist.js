import axios from "axios";
import { all, call, takeLatest,fork,put} from "redux-saga/effects";
import {LIST_UPDATE_REQUEST,
    LIST_UPDATE_SUCCESS,
    LIST_UPDATE_ERROR,
    UPDATE_SHIP_REQUEST,
    UPDATE_SHIP_SUCCESS,
    UPDATE_SHIP_ERROR,
    UPDATE_INVOICE_REQUEST,
    UPDATE_INVOICE_SUCCESS,
    UPDATE_INVOICE_ERROR,
    UPDATE_DELIVERY_REQUEST,
    UPDATE_DELIVERY_SUCCESS,
    UPDATE_DELIVERY_ERROR,
    DELETE_FAVORITE_REQUST,
    DELETE_FAVORITE_SUCCESS,
    DELETE_FAVORITE_ERROR,
    LIST_ADD_REQUEST,
    LIST_ADD_SUCCESS,
    LIST_ADD_ERROR,
} from '../reducers/mylist'

import {url} from './url'

async function myListAPI(data){
    let {params,nickname,auth} = data
    const _nickname = btoa(encodeURIComponent(nickname));
    const config = {
        params:params,
        headers:{
            'nickname':_nickname,
            'auth':auth,
          },
    }
      return await axios.get(`${url}/user/${params.type}`,config)
  }
 
 
  async function updateShipAPI(data){
    return await axios.post(`${url}/user/ship`,{...data})
  }

  async function updateInvoiceAPI(data){
    return await axios.put(`${url}/user/invoice`,{...data})
  }

  async function updateDeliveryAPI(data){
    return await axios.put(`${url}/user/delivery`,{...data})
  }

  async function updateLikeAPI(data){
    return  await axios.put(`${url}/main/like`,data)
}


function* getMyList(action){
    let result = yield call(myListAPI,action.data)
    const {data} = result; 
    if(data.success){
      yield put({
                type:LIST_UPDATE_SUCCESS,
                data:data.response,
            })
    }else{
        yield put({
        type:LIST_UPDATE_ERROR,
        data:data.error,
    })

    }
}

function* getMyFavorite(action){
    let result = yield call(myListAPI,action.data)
    const {data} = result; 
    if(data.success){
      yield put({
                type:LIST_ADD_SUCCESS,
                data:data.response,
            })
    }else{
        yield put({
        type:LIST_ADD_ERROR,
        data:data.error,
    })

    }
}


function* updateShip(action){
    const result = yield call(updateShipAPI,action.data)
    const {data} = result; 
    if(data.success){
        
      yield put({
                type:UPDATE_SHIP_SUCCESS,
                data:data.response,
            })
    }else{
        yield put({
            type:UPDATE_SHIP_ERROR,
            data,
        })

    }
}
function* updateInvoice(action){
    const result = yield call(updateInvoiceAPI,action.data)
    const {data} = result; 
    if(data.success){
        
      yield put({
                type:UPDATE_INVOICE_SUCCESS,
                data:data.response,
            })
    }else{
        yield put({
            type:UPDATE_INVOICE_ERROR,
            data,
        })

    }
}

function* updateDelivery(action){
    const result = yield call(updateDeliveryAPI,action.data)
    const {data} = result; 
    if(data.success){
        
      yield put({
                type:UPDATE_DELIVERY_SUCCESS,
                data:data.response,
            })
    }else{
        yield put({
            type:UPDATE_DELIVERY_ERROR,
            data,
        })

    }
}




function* deleteFavorite(action){
    const result = yield call(updateLikeAPI,action.data)
    const {data} = result; 
    if(data.success){
        yield put({
                type:DELETE_FAVORITE_SUCCESS,
                data:data.response,
            })
    }else{
            yield put({
                type:DELETE_FAVORITE_ERROR,
                data,
            })
        }
}






function* watchMyList(){
    yield takeLatest(LIST_UPDATE_REQUEST,getMyList)
}

function* watchMyFavorite(){
    yield takeLatest(LIST_ADD_REQUEST,getMyFavorite)
}

function* watchShip(){
    yield takeLatest(UPDATE_SHIP_REQUEST,updateShip)
}

function* watchInvoice(){
    yield takeLatest(UPDATE_INVOICE_REQUEST,updateInvoice)
}

function* watchDelivery(){
    yield takeLatest(UPDATE_DELIVERY_REQUEST,updateDelivery)
}

function* watchDeleteFavorite(){
    yield takeLatest(DELETE_FAVORITE_REQUST,deleteFavorite)
}




export default function* MyListSaga(){
    yield all([
        fork(watchMyList),
        fork(watchShip),
        fork(watchInvoice),
        fork(watchDelivery),
        fork(watchDeleteFavorite),
        fork(watchMyFavorite),
    ])
}