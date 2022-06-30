import React from "react";
import { Link } from "react-router-dom";

import "./Logo.css";

function Logo() {
  return (
    <div className="logo">
      <strong>Y</strong>
      <Link to="/news">Hacker News</Link>
    </div>
  );
}

export default Logo;
