import { StyledExplore } from "./Explore.css";
import Filter from "../../component/Filter";
import Gallery from "../../component/Gallery";
const Explore = () => {
  return (
    <div>
      <StyledExplore>
      {/* 헤더 만들면 여기 추가 */}
      <div>
        <Filter/>
        <Gallery/>
      </div>
      </StyledExplore>
    </div>
  );
}

export default Explore;