import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";
import { counterActions } from "../store/index";

const Counter = () => {
  //useSelector: 저장소의 데이터에 접근하기(자동으로 구독 설정) -> 리덕스 저장소 내 데이터 변경 시 컴포넌트 함수 리렌더링
  const counter = useSelector((state) => state.counter.counter);
  //redux store에 대한 action을 보내는 함수
  const dispatch = useDispatch();
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
