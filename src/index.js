import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Homepage from "./Homepage";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/ezone/zone">
          <App />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
