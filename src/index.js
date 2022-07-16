import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import DataState from "./context/DataState"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataState>
        <App />
      </DataState>
    </BrowserRouter>
  </React.StrictMode>
);
