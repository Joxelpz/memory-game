import { useState } from "react";
import { GameStart } from "./Components/GameStart";
import { GameBody } from "./Components/GameBody";
import { GameFinish } from "./Components/GameFinish";

function App() {

  const [dificultad, setDificultad] = useState(0); 
  const [estadoJuego, setEstadoJuego] = useState(0)
  const [movesDif, setMovesDif] = useState(0)
  const [level, setLevel] = useState(0)
  const [intervalId, setIntervalId] = useState(0)

  const changeDificultad = () => {
    setDificultad( dificultad === 3 ? 0 : dificultad + 1)
    setMovesDif( dificultad === 3 ? 0 : dificultad + 1)
    setLevel( dificultad === 3 ? 0 : dificultad + 1)
  }

  const changeEstadoJuego = (value) =>{
    setEstadoJuego(value)
    if( value === 1 ) playTime()
  } 

  const cardsDificultad = {
    0: 8,
    1: 16,
    2: 24,
    3: 32
  }

  const moveDificultad ={
    0: 8,
    1: 15,
    2: 20,
    3: 25
  }

  const levelGame ={
    0: "Principiante",
    1: "Facil",
    2: "Normal",
    3: "Dificil"
  }

  const restGame = () => {
    setEstadoJuego(0)
    setDificultad(0)
  }

  const playTime = () => {
    if(intervalId){
      clearInterval(intervalId)
      setIntervalId(0)
    }
  }

  const titleAlert = estadoJuego === 2 ? "Ganador!" : "Perdedor!";
 
  return (
    <div className="App">
      { estadoJuego === 0 ?
        <GameStart 
          dificultad={dificultad} 
          changeDificultad={changeDificultad}
          setStart={changeEstadoJuego}
        /> : estadoJuego === 1 ? 
        <GameBody 
        numCard={cardsDificultad[dificultad]}
        movesDificultad={moveDificultad[movesDif]}
        levels={levelGame[level]}
        setRest={restGame}
        setFinish={changeEstadoJuego}
        /> : <GameFinish 
        title={titleAlert}
        setRest={restGame} /> 
      }
    </div>
  );
}

export default App;
