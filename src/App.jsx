import { useState } from "react";
import GameBoard from "./component/GameBoard";
import Player from "./component/Player";

function App() {
  const [player, setPlayer] = useState("X");

  function handelSetTurn() {
    setPlayer((prevTurn) => (prevTurn === "X" ? "O" : "X"));
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={"Player 1"}
            symbol={"X"}
            isActive={player === "X"}
          />
          <Player
            initialName={"Player 2"}
            symbol={"O"}
            isActive={player === "O"}
          />
        </ol>
        <GameBoard turn={player} onSlectSquare={handelSetTurn} />
      </div>
    </main>
  );
}

export default App;
