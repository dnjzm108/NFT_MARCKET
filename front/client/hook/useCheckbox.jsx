import { useState } from "react";

const useCheckBox = (defaultValue) => {
  const list =[...defaultValue.list]

  const [value, setValue] = useState(defaultValue.value);

  const onCheck = (index) => {
    if(value&(1<<index)){
      setValue(value ^(1<<index));
    }else{
      setValue(value | (1 << index));
    }
  };

  const onInit=()=>{
    setValue(0);
  }

  let result = list.filter((_,i)=>(1<<i&value)).map(v=>v.name);

  return {
    list,
    value,
    onCheck,
    onInit,
    result
  };
};

export default useCheckBox;
