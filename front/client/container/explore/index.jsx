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
  const {filter} = useSelector(state=>state.filter);
  const [fetch,setFetch] = useState(false);

  const fetchMoreNFT = async () => {
    setFetch(true);
    dispatch(ExploreRequest({...filter,skip}));
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
      dispatch(ExploreRequest(filter));
  },[])


  const renderTest = () =>{
    return (
      <div>{filter.category}</div>
    )
  }
  const renderTest2 = () =>{
    return filter.designer.map((v,i)=>{
      <div>{v}</div>
    })
    
  }

  return (
    <>
      <Navigation />
      <div>
        {renderTest()}
        {renderTest2()}
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
