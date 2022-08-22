import React from "react";
import "./home.css"
import { Link } from "react-router-dom"

const homeButtonLinkStyle= {
  textDecoration: "none",
  color: "#2b2d42"
}

const Home = () => {
  return (
  <div className="home">
    <div className="image--container">
      <button className="image--button"><Link to={"Workouts"} style={homeButtonLinkStyle}> Create your workout plan</Link></button>
    </div>




  </div>
  )
};

export default Home;
