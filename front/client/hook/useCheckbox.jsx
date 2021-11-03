import { useState } from "react";

const useCheckBox = (defaultValue) => {
  const list =[...defaultValue.list]
  const [result, setResult] = useState([...defaultValue.result]);
  const onCheck = (index) => {
    if(result.includes(list[index].name)){
      let newResult = result.filter(v=>v!=list[index].name)
      setResult(newResult)
    }else{
      let newResult=[...result].push(list[index].name)
      setResult(newResult)
    }
  };

  return {
    list,
    onCheck,
    result
  };
};

export default useCheckBox;
