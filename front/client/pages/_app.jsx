import '../index.css'
import wrapper from '../store/configureStore'
import { useEffect } from 'react';
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"
import { GetFilterData } from '../reducers/explore';
import { useDispatch } from 'react-redux';
const App = ({ Component }) => {
    const dispatch = useDispatch()
    const store = useStore((state) => state);
    
  useEffect(()=>{
    console.log('11')
      dispatch(GetFilterData())
  },[])

    return (
        <> 
            <PersistGate persistor={store.__persistor}>
                <Component />
            </PersistGate>

        </>
    )
}

export default wrapper.withRedux(App)