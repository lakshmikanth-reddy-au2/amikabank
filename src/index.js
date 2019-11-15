import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";
import "./styles.css";

function Index() {
  return (
    <div className="Index">
      <App />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  rootElement
);
