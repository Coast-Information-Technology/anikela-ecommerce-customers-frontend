import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./state/store";
import App from "./App";
import "./scss/main.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
