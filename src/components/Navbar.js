import React from "react";
import { navbarData } from "./NavbarData";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="menu--title">MENU</div>
        <ul className="navbar--list">
          {navbarData.map((item) => {
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path} className={item.cName}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
