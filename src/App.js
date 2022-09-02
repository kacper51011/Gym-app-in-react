import React, { useState } from "react";
import ModalForm from "./components/ModalForm";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favourites from "./Pages/Favourites";
import Workouts from "./Pages/Workouts";
import Home from "./Pages/Home";
import Exercises from "./Pages/Exercises";
import NavbarButton from "./components/NavbarButton";

function App() {
  const [person, setPersonData] = useState();
  const [modalVis, setModalVisibility] = useState();
  const [navVis, setNavbarVisibility] = useState(false);
  const [favourites, setFavourites] = useState([]);

  const clickNavbarButton = function () {
    setNavbarVisibility(!navVis);
  };
  return (
    <div className="App">
      <Header person={person ? person.name : null} />
      {!modalVis && (
        <ModalForm
          modalVis={setModalVisibility}
          setData={setPersonData}
        ></ModalForm>
      )}
      <NavbarButton setNavVis={clickNavbarButton} />
      <Router>
        {navVis && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="Exercises"
            element={
              <Exercises
                favouritesData={favourites}
                setFavourites={setFavourites}
              />
            }
          />
          <Route path="Workouts" element={<Workouts />} />
          <Route
            path="Favourites"
            element={
              <Favourites
                favouritesData={favourites}
                setFavourites={setFavourites}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
