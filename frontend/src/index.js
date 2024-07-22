import React from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App";

console.log("Script is running");

const rootElement = document.getElementById("root");
console.log("Root element:", rootElement);

if (rootElement) {
  console.log("Creating root");
  const root = createRoot(rootElement);
  console.log("Rendering app");
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  console.error("Couldn't find root element");
}
