import Head from 'next/head'
import {END} from 'redux-saga'
import wrapper from '../store/configureStore'
import Explore from '../container/explore'
import { MainPageInit, ExploreRequest} from '../reducers/explore'
// import {UserLogin_REQUEST} from '../reducers/user'

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