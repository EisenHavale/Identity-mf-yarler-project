import { createTheme } from "@mui/material/styles";

import React from "react";
import ReactDOM from "react-dom";
import {Button} from "./components/atoms/buttons/Button"
import { Input } from "./components/atoms/inputs/Input";
import LoginIcon from '@mui/icons-material/Login';

import "./index.css";

    

const App = () => {
return (
    <div className="container">
      <Button disabled={false} onClick={() =>console.log("Nothing important")} color="secondary" label="Testing" icon={<LoginIcon/>}/>
      <Input label="Nothing" icon={<LoginIcon />}/>
    </div>
);
}
ReactDOM.render(<App />, document.getElementById("app"));
