import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from "redux";
import user from './user'
import mint from './mint'
import explore from './explore'
import mylist from './mylist'

import product from './product'


// const rootReducer = combineReducers({
//     index: (state = {}, action) => {
//         switch (action.type) {
//             case HYDRATE:
//                 return{
//                     ...state,
//                     ...action.payload
//                 }
//             default:
//                 return state
//         }
//     },
//     user,filter,mint,explore,mylist
// })
const rootReducer = (state = {},action) => {
    switch(action.type){
        case HYDRATE:
            const nextState = {
                ...state, // use previous state
                ...action.payload, // apply delta from hydration
              }
              if (state.user) nextState.user = state.user
            return nextState
        default:{
            const combineReducer = combineReducers({
                user,mint,explore,mylist // 저희가만들거 
            })
            return combineReducer(state,action)
        }
    }
}

export default rootReducer