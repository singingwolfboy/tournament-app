import * as React from "react";
import Versus from "./Versus";
import { MatchData } from "./types";

interface Props {
  number: number;
  matches: MatchData[];
}

const Tier: React.FC<Props> = ({ number, matches }) => (
  <div>
    <h2 className="text-center text-xl">Tier {number}</h2>
    {matches.length === 0 ? (
      <p>No matches</p>
    ) : (
      <ul>
        {matches.map((match, i) => (
          <li>
            <Versus key={i} {...match} />
          </li>
        ))}
      </ul>
    )}
  </div>
);
export default Tier;
