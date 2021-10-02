import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.scss";
import Routes from "inn:routes";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);