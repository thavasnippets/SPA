import React from "react";
import { NavLink } from "react-router-dom";

import Login from "../../login/Login";
import Header from "../header/Header";

const Nav = (props) => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <Header />

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <NavLink to="/register" className="btn btn-outline-secondary">
          Register
        </NavLink>

        <NavLink to="/login" className="btn btn-outline-primary">
          Login
        </NavLink>
      </nav>
    </div>
  );
};
export default Nav;
