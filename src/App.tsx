
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'
import "./index.css";
import IdentityRoutes from "./routes/Identity.routes";

    

const App = () => {
return (
    <BrowserRouter>
      <IdentityRoutes />
    </BrowserRouter>
);
}
ReactDOM.render(<App />, document.getElementById("app"));
