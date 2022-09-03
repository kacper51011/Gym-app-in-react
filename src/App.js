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
import useLocalStorage from "./utils/useLocalStorage";

function App() {
  const [person, setPersonData] = useLocalStorage("personData", []);
  const [modalVis, setModalVisibility] = useLocalStorage("modalVis", false);
  const [navVis, setNavbarVisibility] = useState(false);
  const [favourites, setFavourites] = useLocalStorage("fav", []);

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
