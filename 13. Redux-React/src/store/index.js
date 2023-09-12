import { createStore } from "redux";

//리듀서 함수
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "increse") {
    return {
      counter: state.counter + action.amount,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

//저장소 생성
const store = createStore(counterReducer);

export default store;
