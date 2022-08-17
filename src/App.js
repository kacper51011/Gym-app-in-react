import React, { useState } from "react";
import ModalForm from "./components/ModalForm";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyRecords from "./Pages/MyRecords";
import Workouts from "./Pages/Workouts";
import Home from "./Pages/Home";
import Exercises from "./Pages/Exercises";

function App() {
  const [person, setPersonData] = useState();
  const [modalVis, setModalVisibility] = useState();

  return (
    <div className="App">
      <Header person={person ? person.name : null} />
      {!modalVis && (
        <ModalForm
          modalVis={setModalVisibility}
          setData={setPersonData}
        ></ModalForm>
      )}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={<Home />} />
          <Route path='/Exercises"' component={<Exercises />} />
          <Route path='/Workouts"' component={<Workouts />} />
          <Route path='"/MyRecords"' component={<MyRecords />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
