import * as React from "react";
import Tier from "./Tier";
import { MatchData } from "./types";

export default function Matches() {
  const tiers: MatchData[][] = [
    [
      { first: "Alice", second: "Bob", winner: "FIRST" },
      { first: "Charlie", second: "Debra", winner: "FIRST" },
      { first: "Esther", second: "Fred", winner: "SECOND" },
      { first: "George" },
    ],
    [
      { first: "Alice", second: "George", winner: "SECOND" },
      { first: "Charlie", second: "Fred", winner: "SECOND" },
    ],
    [{ first: "Fred", second: "George" }],
  ];

  return (
    <React.Fragment>
        {tiers.map((matchData, i) => (
            <div className="p-2 border-b">
            <Tier number={i+1} matches={matchData} />
          </div>
        ))}
    </React.Fragment>
  );
}
