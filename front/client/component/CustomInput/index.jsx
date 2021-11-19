import { StyledInput, InputWrap } from "./Input.css";
import { BiSearch } from 'react-icons/bi'
import { BsFillExclamationCircleFill } from 'react-icons/bs'
import { useState } from "react";

// onChange  (object) : useInput 훅 넘기기
//  const nickname = useInput();

// {...nickname}

// praceholder (string): 
// placeholder='내용을 입력해 주세요.'

// search (bool): 인풋박스 안에 돋보기 아이콘 쓰려면 true 
// search={true}

// width(string): 원하는 너비만큼 
// width='100px'   
// width='10vw'
//width = '70%'

//height (string): 'long' 아니면 'short'  지정하지 않으면 long
//height='short' 


// msg (string): required 항목일 때. 
// '닉네임을 입력해주세요'

//type (string)  text number




const CustomInput = ({ onChange, placeholder, search, width, height, msg, type, func, length }) => {

  const [require, setRequire] = useState(false);

  const handleChange = (e) => {
    onChange(e);

    func(e.target.value)
    
    if (e.target.value == '' && msg) {
      setRequire(true)
    } else {
      setRequire(false)
    }
  }

  const handleBlur = (e) => {
    if (e.target.value == '' && msg) {
      setRequire(true)
    }
  }


  const handleType = () => {
    switch (type) {
      case 'number':
        return 'number';

      case 'password':
        return 'password';

      default:
        return 'text';
    }
  }


  const handleHeight = (data) => {
    switch (data) {
      case 'long':
        return 'calc(1.75em + 1.25rem + 2px)'
      case 'short':
        return '40px';
      default:
        return 'calc(1.75em + 1.25rem + 2px)'
    }
  }

return (
  <InputWrap width={width} height={handleHeight(height)}>
    <StyledInput require={require}>
      {search &&
        <label htmlFor="inpput">
          <i>
            <BiSearch size={24} color={'#888'} />
          </i>
        </label>
      }
         <input type={handleType()} id="inpput" maxLength={length} onBlur={(e) => { handleBlur(e) }} onChange={(e) => { handleChange(e) }} placeholder={placeholder} />
      {require &&
        (<i>
          <BsFillExclamationCircleFill size={24} color={'#dc3545'} />
        </i>)
      }
    </StyledInput>
    {require && <span className='required_msg'>{msg}</span>}
  </InputWrap>
);
}

export default CustomInput;