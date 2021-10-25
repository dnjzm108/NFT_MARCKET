import { StyledExplore } from "./Explore.css";
import Filter from "../../component/Filter";
import Gallery from "../../component/Gallery";
import Navigation from "../../component/NavBigation";
import { Footter } from "../../component/Footter/footter";
import Input from "../../component/Input";
import useInput from "../../hook/useInput"
const Explore = () => {

  const temp = useInput();
  return (
    <>
      
      <Input {...temp} placeholder='임시 텍스트' width='400px' msg="이름을 적어주세요." />
      <Input {...temp} placeholder='임시 텍스트' width='300px'  search={true} height='long' />
      <Input {...temp} placeholder='임시 텍스트' width='500px'  height='short'/>

      
      {/* <Navigation />
      <div>
        <StyledExplore>
          <div>
            <Filter />
            <Gallery />
          </div>
        </StyledExplore>
        <Footter/>
      </div> */}
    </>
  );
};

export default Explore;
