import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./components/App";
import About from "./components/About";
import NotFound from "./components/NotFound";

const Routes = props => (
  <Router {...props}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </div>
  </Router>
);

export default Routes;
