import React, {useState} from "react";
import "./home.css"
import { Link } from "react-router-dom"
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";


const homeButtonLinkStyle= {
  textDecoration: "none",
  color: "#2b2d42"
}

const Home = () => {
  const [cardsTextIsVisible, toggleCardTextVisible] = useState({
    firstCard: false,
    secondCard: false,
    thirdCard: false
  })
  const showFirstText = () => {
    toggleCardTextVisible(prevToggles => {
      return {
        ...prevToggles,
        firstCard: !prevToggles.firstCard,
      }
    })
  }
  const showSecondText = () => {
    toggleCardTextVisible(prevToggles => {
      return {
        ...prevToggles,
        secondCard: !prevToggles.secondCard,
      }
    })
  }
  const showThirdText = () => {
    toggleCardTextVisible(prevToggles => {
      return {
        ...prevToggles,
        thirdCard: !prevToggles.thirdCard,
      }
    })
  }

  return (
  <div className="home">
    <div className="image--container">
      <div className="cards--container">
        <div className="card" onClick={showFirstText}>
          <BiIcons.BiBody />
          {cardsTextIsVisible.firstCard && <span >asda sdsad sadad asda sd</span>}
        </div>
        <div className="card" onClick={showSecondText}>
          <FaIcons.FaDumbbell />
          {cardsTextIsVisible.secondCard && <span >asda sdsad sadad asda sd</span>}
        </div>
        <div className="card" onClick={showThirdText}>
          <FaIcons.FaBookOpen />
          {cardsTextIsVisible.thirdCard && <span >asda sdsad sadad asda sd</span>}
        </div>
      </div>
      <button className="image--button"><Link to={"Workouts"} style={homeButtonLinkStyle}> Create your workout plan</Link></button>
    </div>




  </div>
  )
};

export default Home;
