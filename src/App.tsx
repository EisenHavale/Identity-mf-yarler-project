import { ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'
import "../public/index.css";
import { theme } from "./helpers/ThemePalette";
import IdentityRoutes from "./routes/Identity.routes";

  //TODO Custom theme color

const App = () => {
return (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <IdentityRoutes />
    </BrowserRouter>
  </ThemeProvider>
    // <LoginForm />
);
}
ReactDOM.render(<App />, document.getElementById("app"));
