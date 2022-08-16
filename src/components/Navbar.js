import React from "react";
import * as faIcon from "react-icons/fa";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <div className="navbar">
      <div className="navbar--icon">
        <Link to="#" className="menu-bar"></Link>
      </div>
    </div>
  );
}

export default navbar;
