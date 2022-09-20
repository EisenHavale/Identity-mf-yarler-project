
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'
import "../public/index.css";
import { LoginForm } from "./components/organismos/form/LoginForm";
import IdentityRoutes from "./routes/Identity.routes";

    

const App = () => {
return (
    <BrowserRouter>
      <IdentityRoutes />
    </BrowserRouter>
    // <LoginForm />
);
}
ReactDOM.render(<App />, document.getElementById("app"));
