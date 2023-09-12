import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

//초기 상태 설정
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++; //immer: 자동으로 원래 있던 상태를 복제한다.
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//저장소 생성
//const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: counterSlice.reducer,
});

//액션 객체 내보내기
export const counterActions = counterSlice.actions;

export default store;
