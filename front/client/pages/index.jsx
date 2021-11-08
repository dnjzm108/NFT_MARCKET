import Head from 'next/head'
import { useSelector } from 'react-redux'
import Explore from '../container/explore'
const Home = () => {


    return (
        <>
            <Head>
                <title>NET_MARCKET | Home</title>
            </Head>
            <Explore/>
        </>
    )
}

export default Home