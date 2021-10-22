import Head from 'next/head'
import {Delivery_address} from '../component/delivery_address'

const Home = () => {
    return (
        <>
            <Head>
                <title>NET_MARCKET | Home</title>
            </Head>
            
            <div>메인페이지 입니다.</div>
            <Delivery_address></Delivery_address>
        </>
    )
}

export default Home