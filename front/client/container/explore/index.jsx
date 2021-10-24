import { StyledExplore } from "./Explore.css";
import Filter from "../../component/Filter";
import Gallery from "../../component/Gallery";
import Navigation from "../../component/NavBigation";
import Link from "next/link";
import ULButton from "../../component/ULButton";
import {BiCategoryAlt} from "react-icons/bi"
const Explore = () => {

  const categoryIcon = () =>{
    return <><BiCategoryAlt size={24}/></>
  }

  return (
    <>
      

      <ULButton value='All catagories' icon={categoryIcon}/>
      {/* <Navigation />
      <div>
        <StyledExplore>
          <div>
            <Filter />
            <Gallery />
          </div>
        </StyledExplore>
      </div> */}
    </>
  );
};

export default Explore;
