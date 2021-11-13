import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from "redux";
import user from './user'
import mint from './mint'
import filter from './filter'
import explore from './explore'
import mylist from './mylist'
import admin from './admin'
import product from './product'




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
    user,filter,mint,explore,mylist,product,admin
})

export default rootReducer