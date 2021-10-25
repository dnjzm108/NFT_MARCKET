import { StyledExplore } from "./Explore.css";
import Filter from "../../component/Filter";
import Gallery from "../../component/Gallery";
import Navigation from "../../component/NavBigation";
import { Footter } from "../../component/Footter/footter";
import CustomInput from "../../component/CustomInput";
import useInput from "../../hook/useInput"
import { useEffect } from "react";
const Explore = () => {

  const temp = useInput();

  const hello = () =>{
    alert('hello')
  }
  return (
    <>
      
      <CustomInput {...temp} placeholder='임시 텍스트' width='400px' />
      <CustomInput {...temp} placeholder='임시 텍스트' width='300px' />
      <CustomInput {...temp} placeholder='임시 텍스트' width='500px' />

      
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
