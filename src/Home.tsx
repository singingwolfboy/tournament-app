import * as React from "react";
import Register from "./Register";
import RecentWinners from "./RecentWinners";

export default function Home() {
  const matchResults: [Date, string][] = [
    [new Date("2023-02-19"), "Charlie"],
    [new Date("2023-02-18"), "Sassafrass"],
    [new Date("2023-02-17"), "Enola Holmes"],
  ];
  return (
    <div>
      <RecentWinners matchResults={matchResults} />
      <hr />
      <Register />
    </div>
  );
}
