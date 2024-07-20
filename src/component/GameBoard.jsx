import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSlectSquare, turn }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handlSquareClick(rowIndex, colIndex) {
    setGameBoard((currentGameBoard) => {
      const updateBoard = [
        ...currentGameBoard.map((innerArray) => [...innerArray]),
      ];
      updateBoard[rowIndex][colIndex] = turn;
      onSlectSquare();
      return updateBoard;
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rI) => (
        <li key={rI}>
          <ol>
            {row.map((playerSymbol, cI) => (
              <li key={cI}>
                <button onClick={() => handlSquareClick(rI, cI)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
