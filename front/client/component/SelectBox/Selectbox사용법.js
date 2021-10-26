// 사용하고자 하는 위치에 아래와 같이 import 
// import Selectbox from "../../component/SelectBox";
// import useChangeValue from "../../hooks/useChangeValue";


select박스 안에 들어갈 내용을 배열 형태로  
useChangeValue 에 전달


import Selectbox from "../../component/SelectBox";
import useChangeValue from "../../hook/useChangeValue";
import { useEffect } from "react";
const Sample = () => {

  const list = ["전체","입찰","유찰","낙찰"]
  const category =useChangeValue(list)

  useEffect(()=>{
    console.log(category.list)
    console.log(category.value) // 이건 선택된 배열의 인덱스 값. index  =>  0
    console.log(category.result) // 이건 선택된 값.  ex) list[index]   => 전체
  },[category])

  return (
    <>
      <Selectbox {...category}/>
    </>
  );
};

export default Sample;


