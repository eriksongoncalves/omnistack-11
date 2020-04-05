import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute(props) {
  const isPrivate = localStorage.getItem("ongId");
  return isPrivate ? <Route {...props} /> : <Redirect path="/" />;
}

export default PrivateRoute;
