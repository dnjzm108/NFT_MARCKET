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
import SearchView from "../../component/SearchView"
const Explore = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const {user_info} = useSelector(state=>state.user);
  const {isError,skip} = useSelector(state=>state.explore)
  
  
  useEffect(()=>{
    const data = {
      params:router.query,
      nickname:user_info.nickname
    }
    dispatch(ExploreRequest(data))
  },[router.query])
  
  const [fetch,setFetch] = useState(false);

  const fetchMoreNFT = async () => {
    setFetch(true);
    const data = {
      params:{...router.query,skip},
    }
    dispatch(ExploreRequest(data));
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
              <Rowfilter>
                <SearchView/>
              </Rowfilter>
              <Gallery />
            </div>
          </div>
        </StyledExplore>
      </div>
    </>
  );
};

export default Explore;
