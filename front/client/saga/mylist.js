import axios from "axios";
import { all, call, takeLatest,fork,put} from "redux-saga/effects";
import {url} from './url'
import {LIST_UPDATE_REQUEST,
    LIST_UPDATE_SUCCESS,
    LIST_UPDATE_ERROR,

} from '../reducers/mylist'


async function myListAPI(data){
    const config = {
        params:data,
    }
      return await axios.get(`http://localhost:4000/user/${data.type}`,config)

  }



  // return  await axios.post('http://localhost:4000/nft/mint', data, { headers: {'Content-Type': 'multipart/form-data'}})


function* getMyList(action){
    let result = yield call(myListAPI,action.data)
    const {data} = result; 
    if(data.success){
      yield put({
                type:LIST_UPDATE_SUCCESS,
                data:data.response,
            })
    }else{
      put({
        type:LIST_UPDATE_ERROR,
        data,
    })

    }
}


function* watchMyList(){
    yield takeLatest(LIST_UPDATE_REQUEST,getMyList)
}

export default function* MyListSaga(){
    yield all([
        fork(watchMyList)
    ])
}