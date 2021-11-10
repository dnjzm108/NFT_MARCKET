import {all, fork} from 'redux-saga/effects'
import userSaga from './user'
import mintSaga from './mint'
import exploreSaga from './explore'
import TokenSaga from './token'
import FilterSaga from './filter'
import MyListSaga from './mylist'

export default function* rootSaga(){
    yield all([
       fork(userSaga),
       fork(mintSaga),
       fork(exploreSaga),
       fork(TokenSaga),
       fork(FilterSaga),
       fork(MyListSaga)
    ])
}