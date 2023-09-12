import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
//app의 최상단 App.js에 저장소를 제공한다.
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
