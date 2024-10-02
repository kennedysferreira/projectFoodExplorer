import { theme } from "./style/theme";
import GlobalStyles from "./style/global";
import { ThemeProvider } from "styled-components";
import { Routes } from "./routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes/>
    </ThemeProvider>
  </StrictMode>
);
