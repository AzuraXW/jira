import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { loadDevTools } from "jira-dev-tool";
import AppProvider from "./context";
import "antd/dist/antd.css";

loadDevTools(() =>
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <AppProvider>
      <App />
    </AppProvider>
  )
);
// root.;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
