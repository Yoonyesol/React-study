import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false); //입력란이 건드려지는가 확인하는 state

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched; //에러가 보여져야 하는지에 대한 변수(입력창이 건드려졌으면서 유효한 값이 들어오지 않은 경우)

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const valueBlurHandler = (e) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};
export default useInput;
