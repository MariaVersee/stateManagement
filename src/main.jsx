import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "./store/themeStore/ThemeProvider.jsx";
import UserProvider from "./store/userStore/userProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <UserProvider>
      <App />
      </UserProvider>
    </ThemeProvider>
  </StrictMode>
);
