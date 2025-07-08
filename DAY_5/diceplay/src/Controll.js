import React from "react";
import "./Controll.css";

function Controll({ newgame, rollDice, hold, dice }) {
  return (
    <div id="center-controls">
      <button id="new-game-btn" onClick={newgame}>🎲 NEW GAME</button>
      <img id="dice" src={`/dice${dice}.jpg`} alt="Dice" />
      <button id="roll-btn" className="game-btn" onClick={rollDice}>🎲 ROLL DICE</button>
      <button id="hold-btn" className="game-btn" onClick={hold}>💎 HOLD</button>
    </div>
  );
}

export default Controll;
