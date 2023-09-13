import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui", //고유 이름
  initialState: { cartIsVisible: false, notification: null }, //초기 상태
  reducers: {
    //메소드 맵
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
