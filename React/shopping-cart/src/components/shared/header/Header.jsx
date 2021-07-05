import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <NavLink to="/shoppingcart" className="text-decoration-none">
      <a className="d-flex align-items-center text-dark text-decoration-none">
        <span className="fs-4">Shopping Cart <b>(React)</b></span>
      </a>
    </NavLink>
  );
};
export default Header;
