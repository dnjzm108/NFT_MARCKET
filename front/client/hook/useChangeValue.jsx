import { useState } from "react";

const useChangeValue = (defaultValue) => {
  const list = [...defaultValue];
  const [init,setInit] = useState(false);
  const [value, setValue] = useState(0);
  const onChangeValue = (data) => {
    setValue(data);
  };
  let result = list[value];
  const onInit = (data)=>{
    setValue(data)
    setInit(true)
  }
  return {
    list,
    value,
    onChangeValue,
    result,
    init,
    onInit,
  };
};

export default useChangeValue;
