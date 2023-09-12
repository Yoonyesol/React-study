import { configureStore, createSlice } from "@reduxjs/toolkit";

//카운터 관련 슬라이스
const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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

//인증 관련 슬라이스
const initialAuthState = { inAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    logins(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

//저장소 생성
//const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }, //개별 리듀서들은 자동으로 하나의 리듀서로 합쳐진다.
});

//액션 객체 내보내기
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
