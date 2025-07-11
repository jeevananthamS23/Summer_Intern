import React, { useState } from "react";
import "./Controll.css";
import Dice from "./Dice"
function Controll({newgame}){
  
    return(
     <div id="center-controls">
      <button id="new-game-btn">🎲 NEW GAME</button>
      <img id="dice" src="public/`dice-.jpg" alt="Dice"  />
      <button id="roll-btn" class="game-btn" onclick="rollDice()">🎲 ROLL DICE</button>
      <button id="hold-btn" class="game-btn" onclick={()=>newgame}>💎 HOLD</button>
    </div> 
    );
    
}
export default Controll;