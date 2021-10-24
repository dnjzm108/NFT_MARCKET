import { StyledNavToggle } from "./NavToggle.css";
import { useState } from "react";
import Accordion from "../Accordion";

const NavToggle = () => {
  const [visible, setVisible] = useState(false);
  const handleToggle = () => {
    setVisible(!visible);
  };
  return (
    <StyledNavToggle>
      <input
        type="checkbox"
        id="nav-toggle"
        className="nav-toggle"
        onClick={handleToggle}
      />
      <label htmlFor="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <Accordion visible={visible} handleToggle={handleToggle} />
    </StyledNavToggle>
  );
};

export default NavToggle;
