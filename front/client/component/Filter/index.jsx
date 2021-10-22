import { StyledFilter } from "./Filter.css";
import Button from "../FilterItem/Button";
import Panal from "../FilterItem/Panal";

const Filter = () => {
  return (
    <StyledFilter>
      <Panal value='안녕'>
        {/* <Button value='버튼'/> */}
      </Panal>
    </StyledFilter>
  );
}

export default Filter;