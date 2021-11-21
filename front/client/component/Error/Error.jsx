import {StyledError} from './Error.css'

const Error = ({ code,message }) => {
  // const menu = useSelector((state)=>state.category.menu)
  return (
    <StyledError>
      <div className='error_box'>
      <div className='code'>{code}</div>
      <div className='message'>{message}</div>
      </div>
    </StyledError>
  );
};

export default Error;