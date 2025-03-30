import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Apply dark mode based on localStorage preference
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
