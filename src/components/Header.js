import React from "react";
import "./header.css";

const Header = ({ person }) => {
  return (
    <div className="header">
      <div> Hope u have a great day {person ? person : "!"}</div>
      <div> cośtam cośtam</div>
      <div> version 1.0</div>
    </div>
  );
};

export default Header;
