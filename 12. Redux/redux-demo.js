const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

//리덕스 저장소 생성
const store = redux.createStore(counterReducer); //저장소를 조작할 리듀서 함수를 인자로 넣기

console.log(store.getState());

//저장소 구독 함수 생성. 저장소 상태 변경 시마다 트리거됨
const counterSubscriber = () => {
  const latestState = store.getState(); //트리거되면 getState()로 변경된 이후의 최신 상태를 받아온다
  console.log(latestState);
};

//저장소 데이터가 변경될 때마다 counterSubscriber를 실행시킴
store.subscribe(counterSubscriber);

//action
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
