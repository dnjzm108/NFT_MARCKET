import { StyledPanal } from "./Panal.css";

const Panal = ({children, value}) => {
  return (
    <StyledPanal>
      <div>
        {value}
      </div>
      <div>
      {children}
      </div>
    </StyledPanal>
  );
}

export default Panal;