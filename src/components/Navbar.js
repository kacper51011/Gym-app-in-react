import React from "react";
import { navbarData } from "./NavbarData";
import { Link } from "react-router-dom";
import * as FiIcons from "react-icons/fi"

const linkStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexWrap: "noWrap",
  textDecoration: "none",
  color: "#f3f7f8",
  fontSize: "calc(5px + 1.4vw)",
};

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="menu--title">MENU</div>
        <ul className="navbar--list">
          {navbarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path} style={linkStyle}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
