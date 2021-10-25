import '../css/index.css'
import wrapper from '../store/configureStore'
import '../css/index.css'
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"


const App = ({ Component }) => {
    const store = useStore((state) => state);
    return (
        <>
            <PersistGate persistor={store.__persistor}>
                <Component />
            </PersistGate>

        </>
    )
}

export default wrapper.withRedux(App)