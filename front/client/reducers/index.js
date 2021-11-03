import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from "redux";
import user from './user'
import mint from './mint'
import filter from './filter'
import explore from './explore'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';


const persistConfig ={
    key:'root',
    storage,
    whitelist:["user"]
}


const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                return{
                    ...state,
                    ...action.payload
                }
            default:
                return state
        }
    },
    user,filter,mint,explore
})

export default persistReducer(persistConfig,rootReducer)