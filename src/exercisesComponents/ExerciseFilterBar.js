import React, { useState } from "react";
import exerciseData from "./exerciseData";
import { fetchData, fetchOptions } from "../utils/fetchData";

const ExerciseFilterBar = (props) => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (search) {
      const url =
        "https://exercisedb.p.rapidapi.com/exercises/bodyPart/" + search;
      const fetchedData = await fetchData(url, fetchOptions);
      props.stateFunction(fetchedData);
    }
  };
  return (
    <div className="exerciseFilterBar">
      <select
        name="BarSelect"
        type="radio"
        className="barSelect"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      >
        <optgroup>
          <option value={exerciseData[0]}>{exerciseData[0]}</option>
          <option value={exerciseData[1]}>{exerciseData[1]}</option>
          <option value={exerciseData[2]}>{exerciseData[2]}</option>
          <option value={exerciseData[3]}>{exerciseData[3]}</option>
          <option value={exerciseData[4]}>{exerciseData[4]}</option>
          <option value={exerciseData[5]}>{exerciseData[5]}</option>
          <option value={exerciseData[6]}>{exerciseData[6]}</option>
          <option value={exerciseData[7]}>{exerciseData[7]}</option>
          <option value={exerciseData[8]}>{exerciseData[8]}</option>
          <option value={exerciseData[9]}>{exerciseData[9]}</option>
          <option value={exerciseData[10]}>{exerciseData[10]}</option>
        </optgroup>
      </select>
      <button className="searchButton" onClick={handleSearch}>
        SEARCH
      </button>
    </div>
  );
};

export default ExerciseFilterBar;
