import * as React from "react";
import { MatchData } from "./types";

interface Props extends MatchData {
  editable?: boolean;
  setWinner?: (winner: "FIRST" | "SECOND") => void;
}

const Versus: React.FC<Props> = ({
  first,
  second,
  winner,
  editable = false,
  setWinner = () => {},
}) => {
  if (second === undefined) {
    return (
      <p className="text-center italic">
        {first} has no opponent, and moves on automatically
      </p>
    );
  }
  const winnerClassNames = "text-green-600";
  let winnerName: string | undefined = undefined;
  if (winner === "FIRST") {
    winnerName = first;
  } else if (winner === "SECOND") {
    winnerName = second;
  }
  return (
    <div className="flex gap-x-1">
      <span
        className={`text-right basis-1/2 whitespace-nowrap ${
          winner === "FIRST" && winnerClassNames
        }`}
      >
        {winner === "FIRST" && "🎉 "}
        {first}
      </span>
      {editable ? (
        <span className="text-center grow-0 whitespace-nowrap">
          <button className="inline" onClick={() => setWinner("FIRST")}>⬅️</button>
          <button className="inline" onClick={() => setWinner("SECOND")}>➡️</button>
        </span>
      ) : (
        <span className="text-center grow-0">vs</span>
      )}
      <span
        className={`text-left basis-1/2 whitespace-nowrap ${
          winner === "SECOND" && winnerClassNames
        }`}
      >
        {second}
        {winner === "SECOND" && " 🎉"}
      </span>
      {winnerName && <span className="sr-only">(winner is {winnerName})</span>}
    </div>
  );
};

export default Versus;
