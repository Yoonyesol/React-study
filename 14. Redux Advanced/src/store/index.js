import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  //루트 리듀서, 리듀서 맵
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
