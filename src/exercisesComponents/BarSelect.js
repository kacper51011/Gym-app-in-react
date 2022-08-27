import React from "react";
import exerciseData from "./exerciseData";

const BarSelect = () => {
  return (
    <select
      name="BarSelect"
      type="radio"
      className="barSelect"
      placeholder="Search Exercise"
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
      </optgroup>
    </select>
  );
};

export default BarSelect;
