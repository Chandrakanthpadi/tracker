import React, { useState, useRef, useEffect } from "react";
import CounterComp from "./CounterComp";
import "./styles/container.css";
export default function App() {
  const [number, setNumber] = useState([]);
  const refinput = useRef();

  function handle() {
    const x = refinput.current.value;
    if (x === "") return;
    if (number.length >= 15) {
      alert("Cannot add more than 15");
      return;
    }
    setNumber((prevNumber) => [
      ...prevNumber,
      <CounterComp key={Math.random()} name={x} deleteitem={deleteitem} />,
    ]);
    refinput.current.value = "";
  }

  function handlepress(e) {
    if (e.code === "Enter") handle();
  }

  function deleteitem(name) {}

  return (
    <div className="wrapper">
      <div className="Title"> Keep a Counter</div>
      <div class="worker">
        <input
          ref={refinput}
          type="text"
          onKeyPress={handlepress}
          placeholder="Enter Label"
        />
        <button onClick={handle} className="btn">
          {" "}
          Add / Press Enter{" "}
        </button>
        <button onClick={() => setNumber([])} className="btn">
          Clear All
        </button>
      </div>
      <div className="container">{number}</div>
    </div>
  );
}
