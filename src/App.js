import { useEffect, useState } from "react";
import Box from "./Box";
import "./styles.css";

const intitialValue = [null, null, null, null, null, null, null, null, null];

export default function App() {
  const [player, setPlayer] = useState("X");

  const [boardValue, setBoardValue] = useState(intitialValue);

  const resetBoard = () => setBoardValue(intitialValue);

  useEffect(() => {
    const checkWinner = () => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
          boardValue[a] &&
          boardValue[a] === boardValue[b] &&
          boardValue[a] === boardValue[c]
        ) {
          return true;
        }
      }
      return false;
    };
    if (checkWinner()) {
      alert(`Player ${player === "X" ? "O" : "X"} wins`);
      resetBoard();
    }
  }, [boardValue, player]);

  const handlePlayerChange = (i) => {
    setPlayer((prev) => (prev === "X" ? "O" : "X"));
    setBoardValue((prev) =>
      prev.map((item, idx) => {
        if (idx === i) {
          if (item !== null) {
            return item;
          } else {
            return player;
          }
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className="App">
      <h1>Current Player Turn: {player}</h1>
      <button style={{ marginBottom: "20px" }} onClick={resetBoard}>
        Reset
      </button>
      <div>
        <div className="boardRow">
          <Box onClick={() => handlePlayerChange(0)} value={boardValue[0]} />
          <Box onClick={() => handlePlayerChange(1)} value={boardValue[1]} />
          <Box onClick={() => handlePlayerChange(2)} value={boardValue[2]} />
        </div>
        <div className="boardRow">
          <Box onClick={() => handlePlayerChange(3)} value={boardValue[3]} />
          <Box onClick={() => handlePlayerChange(4)} value={boardValue[4]} />
          <Box onClick={() => handlePlayerChange(5)} value={boardValue[5]} />
        </div>
        <div className="boardRow">
          <Box onClick={() => handlePlayerChange(6)} value={boardValue[6]} />
          <Box onClick={() => handlePlayerChange(7)} value={boardValue[7]} />
          <Box onClick={() => handlePlayerChange(8)} value={boardValue[8]} />
        </div>
      </div>
    </div>
  );
}
