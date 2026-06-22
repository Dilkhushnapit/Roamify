import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { FlightProvider } from "./context/FlightContext";

import App from "./App";

import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FlightProvider>
        <App />
      </FlightProvider>
    </BrowserRouter>
  </React.StrictMode>
);