import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
/**
 * imports styles
 */
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss";
import "./assets/demo/demo.css";
import "./assets/demo/nucleo-icons-page-styles.css";
/**
 * imports componentes and views
 */

import IndexPage from "./views/index";

let hist = createBrowserHistory();
function App() {
  console.log(hist);

  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default App;
