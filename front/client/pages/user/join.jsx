import Join_Component from '../../component/Join'
import { useSelector,useDispatch } from 'react-redux';

const Join = () => {

    const data = useSelector(state => state.user)

    return (
        <>
            <Join_Component data={data}/>
        </>
    )
}

export default Join

