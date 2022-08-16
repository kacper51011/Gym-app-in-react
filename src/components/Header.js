import React from "react";

const Header = ({ person }) => {
  return (
    <div className="header">
      <div className="greeting">
        Have a great day{person ? ", " + person + "!" : "!"}
      </div>
      <div className="header--title"> GymApp</div>
      <div></div>
    </div>
  );
};

export default Header;
