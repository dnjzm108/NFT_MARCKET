import {createWrapper} from 'next-redux-wrapper'
import { applyMiddleware, compose, createStore,combineReducers } from 'redux'
import rootReducer from '../reducers'       
import {composeWithDevTools} from 'redux-devtools-extension'
import createSaga from 'redux-saga'
import rootSaga from '../saga/index'
import userSaga from '../saga/user'
import { persistStore } from 'redux-persist';

/*
    reudx-saga
    context == redux
    context 비동기통신 
    redux why? middleware 
    middleware 비동기통신 
    congtext useEffect 컴포넌트에서 api통신하는 코드르 작성해야됫는데
    따로 코드를 작성해서 실행할수있겠금 처리해줄수있음.
                middleware
    disaptch  reducer  state 
    redux 설정할줄알아야
    redux saga 를 사용가능함 -> redux의 미들웨어 
*/

const getEnhancer = () => {
    const sagaMiddlewares = createSaga()
    const Middlewares = [sagaMiddlewares]
    const enhencer= (
      process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...Middlewares))
      : composeWithDevTools(applyMiddleware(...Middlewares))
    )
    return {enhencer,sagaMiddlewares}
  }

const configureStore = ()=>{
    const isServer = typeof window == 'undefined'
    let {enhencer,sagaMiddlewares} = getEnhancer()
    
    if(isServer) {
        const Store = createStore(rootReducer,enhencer)
        Store.sagaTask = sagaMiddlewares.run(rootSaga)
        return Store
    }else {
        const {persistStore, persistReducer} = require('redux-persist')
        const storage = require('redux-persist/lib/storage').default
        
        const persistConfig = {
            key: "nextjs",
            storage, // localStorage에 저장합니다.
            whitelist: ["filter","user",] 
            // blacklist -> 그것만 제외합니다
          };

        const persistedReducer  = persistReducer(persistConfig,rootReducer)
        const Store = createStore(persistedReducer,enhencer)
        Store.__persistor = persistStore(Store)
        Store.sagaTask = sagaMiddlewares.run(rootSaga)

        return Store
    }
}


const wrapper = createWrapper(configureStore,{
    debug : process.env.NODE_ENV === 'development'
})     
export default wrapper