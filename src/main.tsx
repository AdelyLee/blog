import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import routes from './router/router';
import "antd/dist/antd.less"
import "@/style/index.scss"

ReactDOM.render(
  <Router>
    {routes}
  </Router>,
  document.getElementById('root') as HTMLElement
);
