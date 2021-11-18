import '../index.css'
import wrapper from '../store/configureStore'
import { useSelector, useStore ,useDispatch } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"
import { useEffect } from 'react';
import {User_Logout} from '../reducers/user'
import WebSocket from '../component/WebSocket';

const App = ({ Component,pageProps}) => {
    const store = useStore((state) => state);
    // const dispatch = useDispatch();
    // useEffect(()=>{
    //     if(typeof window !== 'undefined'){
    //         if( window.klaytn !== undefined){
    //             klaytn.on('accountsChanged', function(accounts) {
    //                 dispatch(User_Logout())
    //               })
    //               klaytn.on('networkChanged', function() {
    //                 dispatch(User_Logout())
    //               })
    //         }
    //     }
    // },[])
   
    return (
        <> 
            <PersistGate persistor={store.__persistor}>
                <WebSocket>
                    <Component {...pageProps} />
                </WebSocket>
            </PersistGate>

        </>
    )
}

export default wrapper.withRedux(App)