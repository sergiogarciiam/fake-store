import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routers/Router";

import "./assets/styles/app.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
