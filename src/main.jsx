import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routers/Router";

import "./assets/styles/app.css";
import "./assets/styles/cart.css";
import "./assets/styles/header.css";
import "./assets/styles/home.css";
import "./assets/styles/product-details.css";
import "./assets/styles/products.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
