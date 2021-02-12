import React from "react";
import "./index.css";

import App from "./App";

import ReactDOM from "react-dom";
import { store, persistor } from "./redux/store";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { persistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <persistGate persistor={persistor}>
        <App />
      </persistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
