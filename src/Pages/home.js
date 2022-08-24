import React from "react";
import "./home.css"
import { Link } from "react-router-dom"
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";


const homeButtonLinkStyle= {
  textDecoration: "none",
  color: "#2b2d42"
}

const Home = () => {


  return (
  <div className="home">
    <div className="image--container">
      <div className="cards--container">
        <div className="card">
          <div className="card--image"><BiIcons.BiBody /></div>
          <div className="card--text">learn about the exercises!</div>
        </div>
        <div className="card">
          <div className="card--image"><FaIcons.FaDumbbell /></div>
          <div className="card--text">create your training schedule!</div>
        </div>
        <div className="card">
          <div className="card--image"><FaIcons.FaBookOpen /></div>
          <div className="card--text">check your best results!</div>
        </div>
      </div>
      <button className="image--button"><Link to={"Workouts"} style={homeButtonLinkStyle}> Create your workout plan</Link></button>
    </div>




  </div>
  )
};

export default Home;
