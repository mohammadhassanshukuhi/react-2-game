export default function GameBoard({ board, onSquareClick }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  return (
    <ol id="game-board">
      {board.map((row, ri) => (
        <li key={ri}>
          <ol>
            {row.map((playerSymbol, ci) => (
              <li key={ci}>
                <button
                  disabled={playerSymbol !== null}
                  onClick={() => onSquareClick(ri, ci)}
                >
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
