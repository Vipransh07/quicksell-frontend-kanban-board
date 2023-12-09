import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CustomDataContextProvider } from "./useCustomContext";

ReactDOM.render(
  <React.StrictMode>
   <CustomDataContextProvider> <App /></CustomDataContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
