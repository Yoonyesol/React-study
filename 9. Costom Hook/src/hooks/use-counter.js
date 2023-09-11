import { useEffect, useState } from "react";

//(forwards = true): 매개변수는 선택사항이 된다.
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]); //매개변수로 받아오는 값이므로 의존성 설정

  return counter;
};
export default useCounter;
