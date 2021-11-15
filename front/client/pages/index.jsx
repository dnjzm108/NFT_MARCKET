import Head from 'next/head'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {END} from 'redux-saga'
import wrapper from '../store/configureStore'
import { useRouter } from 'next/router';
import Explore from '../container/explore'
import { MainPageInit, ExploreRequest} from '../reducers/explore'
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

export const getServerSideProps = wrapper.getServerSideProps( (Store)=> async (ctx)=> {
        Store.dispatch(MainPageInit(ctx.query))
        Store.dispatch(END)
        await Store.sagaTask.toPromise()
  })

export default Home