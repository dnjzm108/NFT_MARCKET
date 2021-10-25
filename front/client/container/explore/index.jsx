import { StyledExplore } from "./Explore.css";
import Filter from "../../component/Filter";
import Gallery from "../../component/Gallery";
import Navigation from "../../component/NavBigation";
import { Footter } from "../../component/Footter/footter";
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
        <Footter/>
      </div>
    </>
  );
};

export default Explore;
