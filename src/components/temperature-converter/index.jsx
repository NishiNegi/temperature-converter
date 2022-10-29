import React from "react";
import { useState } from "react";
import "./style.css";

function TemperatureConverter() {
  const [degrees, setDegrees] = useState("");
  const [type, setType] = useState("");
  const [result, setResult] = useState("");

  function handleChange(event) {
    if (event.target.id === "user-input") {
      setDegrees(event.target.value);
    } else {
      setType(event.target.value);
    }
  }
  function handleSubmit(event) {
    if (type === "f") {
      setResult((degrees - 32) / 1.8);
    } else if (type === "k") {
      setResult(degrees - 273.15);
    }
  }

  return (
    <main id="container">
      <section id="form">
        <div className="input-label">
          <label htmlFor="user-input">Degrees</label>
          <input id="user-input" type="number" onChange={handleChange} />
        </div>
        <div className="input-label">
          <label htmlFor="type">Type</label>
          <select name="type" id="type" onChange={handleChange}>
            <option value="">--- Select type of temperature---</option>
            <option value="f">Farenheit</option>
            <option value="k">Kelvin</option>
          </select>
        </div>
        <button id="submit" type="submit" onClick={handleSubmit}>
          Convert
        </button>
      </section>
      <section id="display">
        <p id="header">Result</p>
        <p id="result">{result} &#8451;</p>
      </section>
    </main>
  );
}
export default TemperatureConverter;
