import { StrictMode } from "react";
import { Toaster } from "sonner";
import { createRoot } from "react-dom/client";
import App from "./app.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster richColors theme="system" position="top-center" />
  </StrictMode>
);
