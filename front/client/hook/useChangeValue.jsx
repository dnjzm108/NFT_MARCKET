import { useState } from "react";

const useChangeValue = (defaultValue) => {
  const list = [...defaultValue];
  const [value, setValue] = useState(0);
  const onChangeValue = (data) => {
    setValue(data);
  };

  let result = list[value];
  return {
    list,
    value,
    onChangeValue,
    result,
  };
};

export default useChangeValue;
