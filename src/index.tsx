import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/index";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
        <App />
    </StrictMode>
  );
} else {
  console.error("Element with id 'root' not found in the DOM.");
}
