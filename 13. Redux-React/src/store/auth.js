import { createSlice } from "@reduxjs/toolkit";

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

export const authActions = authSlice.actions;

export default authSlice.reducer;
