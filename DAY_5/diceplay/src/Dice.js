import React from "react";
import './Dice.css';
import Controll from "./Controll";
function Dice({ name, part,val,cur}) {


  return (
    <div id="panel">
      <div style={part} id="part1">
        <h1 className="p1">{name}</h1>
        <h1 className="p11">{val}</h1>
        <div id="ins1">
          <h2 className="p111">CURRENT</h2>
          <h2 id="current1">{cur}</h2>
        </div>
      </div>
   
    </div>
  );
}

export default Dice;
