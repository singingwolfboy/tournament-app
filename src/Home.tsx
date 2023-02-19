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
    <div className="flex gap-10 justify-center">
      <div>
        <h2 className="text-xl text-center">Most recent winners</h2>
        <RecentWinners matchResults={matchResults} />
      </div>
      <div className="">
        <h2 className="text-xl text-center">Sign up</h2>
        <Register />
      </div>
    </div>
  );
}
