import React, { useState } from "react";
import ModalForm from "./components/ModalForm";
import "./App.css";
import Tool from "./components/Tool";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  const [person, setPersonData] = useState();
  const [modalVis, setModalVisibility] = useState();

  return (
    <div className="App">
      <Header person={person ? person.name : null} />
      <Navbar />

      {!modalVis && (
        <ModalForm
          modalVis={setModalVisibility}
          setData={setPersonData}
        ></ModalForm>
      )}
      {person && <Tool name={person.name} time={person.gymExp}></Tool>}
    </div>
  );
}

export default App;
