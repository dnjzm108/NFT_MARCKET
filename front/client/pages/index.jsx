import Head from 'next/head'
import { useEffect } from 'react'
import Explore from '../container/explore'
import caver from '../klaytn/caver'



const Home = () => {

    useEffect(async()=>{
       const Caver = caver.klay;
       console.log(Caver)

 

    },[])

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