import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-abxtuphpyeazjh86.us.auth0.com"
     clientId="GaFaQVFHKkqm2c3gbFpcaygXm8GcaE2I"
     authorizationParams={{
      redirect_uri: "ImperioPropertyManagement.pm"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
