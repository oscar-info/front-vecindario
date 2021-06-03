import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import { RecoilRoot } from "recoil";
import "./assets/styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
