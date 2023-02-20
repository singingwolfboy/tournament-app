import * as React from "react";
import Tier from "./Tier";
import { MatchData } from "./types";

interface Props {
  tiers: MatchData[][];
}

const Matches: React.FC<Props> = ({ tiers }) => {
  if (tiers.length === 0) {
    return <p className="text-center">No tiers yet!</p>;
  }
  return (
    <React.Fragment>
      {tiers.map((matchData, i) => (
        <div className="p-2 border-b">
          <Tier number={i + 1} matches={matchData} />
        </div>
      ))}
    </React.Fragment>
  );
};

export default Matches;
