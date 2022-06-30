import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

import Logo from "./Logo";

function Nav() {
  return (
    <div className="nav p-1 mt-1">
      <Logo />
      <nav className="m-2">
        <Link className="link" to="/news">
          new
        </Link>
        <Link className="link" to="/front">
          past
        </Link>
        <Link className="link" to="/newcomments">
          comments
        </Link>
        <Link className="link" to="/ask">
          ask
        </Link>
        <Link className="link" to="/show">
          show
        </Link>
        <Link className="link" to="/jobs">
          jobs
        </Link>
        <Link className="link" to="/submit">
          submit
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
