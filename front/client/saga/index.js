import {all, fork} from 'redux-saga/effects'
import userSaga from './user'
import mintSaga from './mint'

export default function* rootSaga(){
    yield all([
       fork(userSaga),
       fork(mintSaga)
    ])
}