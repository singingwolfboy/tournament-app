import * as React from "react";
import Versus from "./Versus";
import { MatchData } from "./types";

interface Props {
  number: number;
  matches: MatchData[];
  editable?: boolean;
  setMatch?: (match: MatchData, index: number) => void;
}

const Tier: React.FC<Props> = ({
  number,
  matches,
  editable = false,
  setMatch = () => {},
}) => (
  <div>
    <h2 className="text-center text-xl">Tier {number}</h2>
    {matches.length === 0 ? (
      <p>No matches</p>
    ) : (
      <ul>
        {matches.map((match, i) => (
          <li key={i}>
            <Versus
              key={i}
              editable={editable}
              setWinner={(winner: "FIRST" | "SECOND") => setMatch({ ...match, winner }, i)}
              {...match}
            />
          </li>
        ))}
      </ul>
    )}
  </div>
);
export default Tier;
