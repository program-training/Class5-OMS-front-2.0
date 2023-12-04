import React, { useState } from "react";
import { Typography, Button, Grid, Box } from "@mui/material";
import { theLines } from "./Lines";
interface SquareProps {
  value: string;
  onClick: () => void;
}
const Square: React.FC<SquareProps> = ({ value, onClick }) => (
  <Button
    className="square"
    onClick={onClick}
    variant="outlined"
    style={{
      width: 60,
      height: 60,
      fontSize: "1.5rem",
      backgroundColor: "#fff",
      color: "#333",
      margin: "2px",
    }}
  >
    {value}
  </Button>
);
const Board: React.FC<{ squares: string[]; onClick: (i: number) => void }> = ({
  squares,
  onClick,
}) => (
  <Grid container spacing={1} style={{ marginBottom: "10px" }}>
    {[0, 1, 2].map((row) => (
      <Grid container item key={row} justifyContent="center">
        {[0, 1, 2].map((col) => (
          <Grid item key={col}>
            <Square
              value={squares[row * 3 + col]}
              onClick={() => onClick(row * 3 + col)}
            />
          </Grid>
        ))}
      </Grid>
    ))}
  </Grid>
);
const TicTacToe: React.FC = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const handleClick = (i: number) => {
    if (isGameOver || squares[i]) return;
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    const winner = calculateWinner(newSquares);
    if (winner || newSquares.every((square) => square !== ""))
      setIsGameOver(true);
  };
  const handleNewGame = () => {
    setSquares(Array(9).fill(""));
    setXIsNext(true);
    setIsGameOver(false);
  };
  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : isGameOver
    ? "Game Over"
    : `Next player: ${xIsNext ? "X" : "O"}`;
  return (
    <Box>
      <Board squares={squares} onClick={handleClick} />
      <Typography variant="h6" style={{ marginTop: "10px", color: "#333" }}>
        {status}
      </Typography>
      {isGameOver && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleNewGame}
          style={{ marginTop: "10px" }}
        >
          New Game
        </Button>
      )}
    </Box>
  );
};
function calculateWinner(squares: string[]): string | null {
  const lines = theLines;
  for (const line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a];
  }
  return null;
}
export default TicTacToe;
