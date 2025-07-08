import React, { useState } from 'react';
import Dice from './Dice.js';
import Controll from './Controll.js';
import './App.css';

function App() {
  const [p1, setP1] = useState(10);
  const [p2, setP2] = useState(10);
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [activeplayer, setActiveplayer] = useState(0);
  const [dice, setDice] = useState(1);
 const [isplaying,setPlaying]=useState(true);
  const switchplayer = () => {
    if (activeplayer === 0) setC1(0);
    else setC2(0);
    setActiveplayer(prev => 1 - prev);
  };

  const handleRoll = () => {
    if(isplaying){
    const dice1 = Math.floor(Math.random() * 6) + 1;
    setDice(dice1);
    if(isplaying){
    if (dice1 !== 1) {
      if (activeplayer === 0) setC1(prev => prev + dice1);
      else setC2(prev => prev + dice1);
    } else {
      switchplayer();
    }
  }
}
};

  const hold = () => {
    if(isplaying){
    if (activeplayer === 0) {
      var check=p1+c1;
      setP1(p1 + c1);

      setC1(0);
      if(check>=20){

        alert("Player1 Win the match");
        reset();
      }
      
    
    
    } else {
      setP2(p2+ c2);
      setC2(0);
      if(p2>=20){
          alert("Player2 Win the match");
          reset();
      }
     
    }
    switchplayer();
  }
  };

  const reset = () => {
    setP1(0);
    setP2(0);
    setC1(0);
    setC2(0);
    setDice(1);
    setActiveplayer(0);
  };

  const part1 = { borderRadius: "5px 0 0 5px" };
  const part2 = { borderRadius: "0 5px 5px 0" };

  return (
    <div className='main'>
      <Dice name="Player 1" part={part1} val={p1} cur={c1} />
      <Dice name="Player 2" part={part2} val={p2} cur={c2} />
      <Controll newgame={reset} rollDice={handleRoll} hold={hold} dice={dice} />
    </div>
  );
}

export default App;
