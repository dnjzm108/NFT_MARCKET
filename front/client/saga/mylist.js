import axios from "axios";
import { all, call, takeLatest,fork,put} from "redux-saga/effects";
import {LIST_UPDATE_REQUEST,
    LIST_UPDATE_SUCCESS,
    LIST_UPDATE_ERROR,
    UPDATE_SHIP_REQUEST,
    UPDATE_SHIP_SUCCESS,
    UPDATE_SHIP_ERROR

} from '../reducers/mylist'

import {url} from './url'

async function myListAPI(data){
    const config = {
        params:data,
    }
      return await axios.get(`${url}/user/${data.type}`,config)
  }
  // return  await axios.post('http://localhost:4000/nft/mint', data, { headers: {'Content-Type': 'multipart/form-data'}})
 
  async function updateShipAPI(data){
    return await axios.post(`${url}/user/ship`,{...data})
      
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
        data,
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
            type:LIST_UPDATE_ERROR,
            data,
        })

    }
}








function* watchMyList(){
    yield takeLatest(LIST_UPDATE_REQUEST,getMyList)
}

function* watchShip(){
    yield takeLatest(UPDATE_SHIP_REQUEST,updateShip)
}

export default function* MyListSaga(){
    yield all([
        fork(watchMyList),
        fork(watchShip)
    ])
}