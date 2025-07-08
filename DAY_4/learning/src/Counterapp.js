import React, { useState } from "react";
import "./Counterapp.css";

function Counterapp() {
  const [count, setcount] = useState(0);

  return (
    <>
      <h1 id="top">Counter App</h1>
      <div id="counter">
        <h1 id="top2">{count}</h1>
        <button className="btn1" onClick={() => setcount(count + 1)}>increment</button>
        <button className="btn2" onClick={() => setcount(count - 1)}>decrement</button>
      </div>
    </>
  );
}

export default Counterapp;