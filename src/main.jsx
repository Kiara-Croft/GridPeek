import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// importă contextul nostru nou:
import { FavoriteTeamProvider } from "./FavoriteTeamContext/FavoriteTeamContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FavoriteTeamProvider>
        <App />
      </FavoriteTeamProvider>
    </BrowserRouter>
  </StrictMode>
);
