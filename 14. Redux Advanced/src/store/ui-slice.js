import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui", //고유 이름
  initialState: { cartIsVisible: false }, //초기 상태
  reducers: {
    //메소드 맵
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
