import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import store from "./store";
import App from "./components/App/App";

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
serviceWorker.unregister();

//For development mode
if (module.hot) {
  module.hot.accept();
}
