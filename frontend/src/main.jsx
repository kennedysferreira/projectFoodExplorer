import { theme } from "./style/theme";
import GlobalStyles from "./style/global";
import { ThemeProvider } from "styled-components";
import { Routes } from "./routes";
import { StrictMode } from "react";
import { App } from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>
);
