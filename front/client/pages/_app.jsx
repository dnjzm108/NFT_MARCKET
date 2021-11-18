import '../index.css'
import wrapper from '../store/configureStore'
import { useSelector, useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"
import WebSocket from '../component/WebSocket';
const App = ({ Component,pageProps}) => {
    const store = useStore((state) => state);

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