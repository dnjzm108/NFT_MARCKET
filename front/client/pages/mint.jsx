import Release from '../container/release'
import axios from 'axios'
import {END} from 'redux-saga'
import wrapper from '../store/configureStore'
import {Mint_MainCate_Request , Mint_MiddleCate_Request, Getcategory_REQUEST} from '../reducers/mint'


const mint = () => {
  return (
    <div>
      <Release/>
    </div>
  );
}


export const getServerSideProps = wrapper.getServerSideProps( (Store)=> async (req,res)=> {
  // 첫번쨰는 dispatch 써서 API 요청을 보냅니다. 그리고 상태를 변경시킵니다.
  Store.dispatch(Getcategory_REQUEST())
  Store.dispatch(END)
  await Store.sagaTask.toPromise()
})

export default mint;