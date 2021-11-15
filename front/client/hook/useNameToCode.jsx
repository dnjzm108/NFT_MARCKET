import { useState } from "react";

const useNameToCode = (defaultValue) => {

  const list = [...defaultValue];
  const [now, setNow] = useState(list[0].code);
  const onClick = (code) => {
    setNow(code);
  };
  return {
    list,
    now,
    onClick,
  };
};

export default useNameToCode;
