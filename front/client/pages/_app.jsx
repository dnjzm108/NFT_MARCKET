<<<<<<< HEAD
import '../index.css'
=======
import '../css/index.css'
import wrapper from '../store/configureStore'
import '../css/index.css'
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"
>>>>>>> 2c7a5859ef9df7a9a0889a11f57fca1081d5cb55


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