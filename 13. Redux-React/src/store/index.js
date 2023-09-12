import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

//저장소 생성
//const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }, //개별 리듀서들은 자동으로 하나의 리듀서로 합쳐진다.
});

export default store;
