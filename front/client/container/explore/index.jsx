import { StyledExplore } from "./Explore.css";
import Filter from "../../component/Filter";
import Gallery from "../../component/Gallery";
import Navigation from "../../component/Navigation";
import  Footter from "../../component/Footter";
import { useEffect,useState } from 'react'
import { useDispatch, useSelector,} from 'react-redux'
import { useRouter } from "next/router";
import { ExploreRequest } from '../../reducers/explore'
import Rowfilter from "../../component/Rowfilter";
const Explore = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  
  useEffect(()=>{
    dispatch(ExploreRequest(router.query))
  },[router.query])

  const {isError,skip} = useSelector(state=>state.explore)

  const [fetch,setFetch] = useState(false);

  const fetchMoreNFT = async () => {
    setFetch(true);
    dispatch(ExploreRequest({...router.query,skip}));
    setFetch(false);
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (
      scrollTop + clientHeight >= scrollHeight &&
      fetch === false) {
        fetchMoreNFT();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });





  return (
    <>
      <Navigation />
      <div>
        <StyledExplore>
          <div className='content-box'>
            <Filter />
            <div className='content-right'>
              <Rowfilter/>
              <Gallery />
            </div>
          </div>
        </StyledExplore>
      </div>
    </>
  );
};

export default Explore;
