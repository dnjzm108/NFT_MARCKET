import Product_Detail_Component from "../../component/Product_Detail"
import {END} from 'redux-saga'
import wrapper from '../../store/configureStore'
import {Product_Page_Request} from '../../reducers/product'
import { useRouter } from 'next/router'
import WebSocket from "../../component/WebSocket"


const Product_Detail = () => {
    // const router = useRouter()
    // const { id } = router.query
    // const data={
    //     product_no: id
    // }
    return (
        <>
        <WebSocket>
            <Product_Detail_Component />
        </WebSocket>
        </>
    )
}

    // export const getServerSideProps = wrapper.getServerSideProps( (Store)=> async (ctx)=> {
    //     console.log("rwerwerwerwrwer",ctx);
    //     // 첫번쨰는 dispatch 써서 API 요청을 보냅니다. 그리고 상태를 변경시킵니다.
    //     Store.dispatch(Product_Page_Request(ctx.query))
    //     Store.dispatch(END)
    //     await Store.sagaTask.toPromise()
    //   })

export default Product_Detail
