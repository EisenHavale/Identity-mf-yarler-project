
import React from "react";
import ReactDOM from "react-dom";
import { LoginForm } from "./components/organismos/form/LoginForm";

import "./index.css";

    

const App = () => {
return (
    <div className="container">
      <LoginForm />      
    </div>
);
}
ReactDOM.render(<App />, document.getElementById("app"));
