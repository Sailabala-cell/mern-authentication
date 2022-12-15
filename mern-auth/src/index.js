import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as ReactDOMClient from 'react-dom/client';
//Redux
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <Provider store={store}>
		<App />
	</Provider>
  </React.StrictMode>
);

// reportWebVitals();





