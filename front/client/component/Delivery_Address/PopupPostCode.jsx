import React, { useState } from 'react';
import DaumPostcode from "react-daum-postcode";
import styled from 'styled-components'
import Button from "../Button"

const PopupPostCode = (props) => {



  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }
    console.log(data)
    console.log(fullAddress)
    console.log(data.zonecode)
    props.setaddress(fullAddress)
    props.setpostNumber(data.zonecode)
    props.onClose()
  }


  return (
    <div>
      <PostCodeStyle><DaumPostcode onComplete={handlePostCode} />
        <Center>
          <Button func={props.onClose} value="닫기" />
        </Center>
      </PostCodeStyle>

    </div>
  )
}

export default PopupPostCode;

const PostCodeStyle = styled.div`
  display: block ;
  position : absolute ;
  top : 0 ;
  left: 0;
  width : 100% ;
  height: 100% ;
  padding : 7px ;
  background: #ffffff;
`
const Center = styled.div`
margin-top: 40px ;
display: flex;
justify-content: center;
`