import '../index.css'
import wrapper from '../store/configureStore'
import { useSelector, useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"
const App = ({ Component,pageProps}) => {
    const store = useStore((state) => state);

    return (
        <> 
            <PersistGate persistor={store.__persistor}>
                <Component {...pageProps} />
            </PersistGate>

        </>
    )
}

export default wrapper.withRedux(App)