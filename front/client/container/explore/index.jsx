import { StyledExplore } from "./Explore.css";
import Filter from "../../component/Filter";
import Gallery from "../../component/Gallery";
import Navigation from "../../component/Navigation";
import  Footter from "../../component/Footter";
import { useEffect,useState } from 'react'
import { useDispatch, useSelector,} from 'react-redux'
import { ExploreRequest,GetFilterData } from '../../reducers/explore'

const Explore = () => {
  const dispatch = useDispatch();
  const {isError,skip,end} = useSelector(state=>state.explore)
  const filter = useSelector(state=>state.filter);
  const [fetch,setFetch] = useState(false);

  const fetchMoreNFT = async () => {
    setFetch(true);
    let data = {...filter};
    delete data.isLoading;

    dispatch(ExploreRequest({...data,skip}));
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

  useEffect(()=>{
    let data = JSON.parse(JSON.stringify(filter))
    delete data.isLoading;
    console.log(data);
      dispatch(ExploreRequest(data));
      return () => {
        setFetch(false);
      };
  },[])


  const renderTest = () =>{
    return (
      <div>{filter.category}</div>
    )
  }

  return (
    <>
      <Navigation />
      <div>
        {renderTest()}
      </div>
      <div>
        <StyledExplore>
          <div>
            <Filter />
            <Gallery />
          </div>
        </StyledExplore>
      </div>
    </>
  );
};

export default Explore;
