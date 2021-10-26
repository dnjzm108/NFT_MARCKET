import { StyledExplore } from "./Explore.css";
import Filter from "../../component/Filter";
import Gallery from "../../component/Gallery";
import Navigation from "../../component/Navigation";
const Explore = () => {

  return (
    <>
      <Navigation />
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
