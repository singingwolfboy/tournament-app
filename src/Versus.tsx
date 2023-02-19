import * as React from "react";
import { MatchData } from "./types";

const Versus: React.FC<MatchData> = ({ first, second, winner }) => {
  if (second === undefined) {
    return (
      <p className="text-center italic">{first} has no opponent, and moves on automatically</p>
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
        className={`text-right basis-1/2 ${
          winner === "FIRST" && winnerClassNames
        }`}
      >
        {winner === "FIRST" && "🎉 "}
        {first}
      </span>
      <span className="text-center grow-0">vs</span>
      <span
        className={`text-left basis-1/2 ${
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
