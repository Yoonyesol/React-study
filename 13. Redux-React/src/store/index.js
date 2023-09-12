import { createStore } from "redux";

export const INCREMENT = "increment";

const initialState = { counter: 0, showCounter: true };

//리듀서 함수
const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      //새로운 객체를 반환하는 것이므로 showCounter내용을 작성해 주지 않으면 새로운 객체가 기존 객체를 덮어써서 counter div가 아예 사라지게 된다.
      //따라서 항상 새 값을 생성해 주어야 함.
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increse") {
    return {
      //반드시 새로운 객체를 생성해서 상태를 바꾸어야 함. 원본 state 상태를 직접 바꾸면 안된다.
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  return state;
};

//저장소 생성
const store = createStore(counterReducer);

export default store;
