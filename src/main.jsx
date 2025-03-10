import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { MovieAppProvider } from "./contexts/MovieAppContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MovieAppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MovieAppProvider>
  </StrictMode>
);
