import * as React from "react";
import PasswordProtected from "./PasswordProtected";
import { MatchData } from "./types";
import Tier from "./Tier";
import chunk from "lodash/chunk";
import shuffle from "lodash/shuffle";

interface Props {
  contestants: string[];
  removeContestant: (name: string) => void;
  tiers: MatchData[][];
  setTiers: (data: MatchData[][]) => void;
}

const makeMatches = (contestants: string[]) => {
  return chunk(shuffle(contestants), 2).map(([first, second]) => ({
    first,
    second,
  }));
};

const Admin: React.FC<Props> = ({
  contestants,
  removeContestant,
  tiers,
  setTiers,
}) => {
  const makeInitialTier = () => {
    setTiers([makeMatches(contestants)]);
  };
  return (
    <PasswordProtected password="123">
      <div className="flex justify-center">
        <div>
          <h3 className="text-lg">Contestants</h3>
          {contestants.length === 0 ? (
            <p>None yet</p>
          ) : (
            <ul className="list-disc ml-5">
              {contestants.map((name, i) => (
                <li key={i}>
                  {name}{" "}
                  <button
                    className="btn"
                    onClick={() => removeContestant(name)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
          <button className="btn" onClick={makeInitialTier}>
            Make Tier
          </button>
        </div>
        {tiers.map((matchData, i) => (
          <div className="p-2 border-b" key={i}>
            <Tier
              number={i + 1}
              matches={matchData}
              editable={true}
              setMatch={(match, j) => {
                const newMatches = [
                  ...matchData.slice(0, j),
                  match,
                  ...matchData.slice(j + 1),
                ];
                const newTiers = [
                  ...tiers.slice(0, i),
                  newMatches,
                  ...tiers.slice(i + 1),
                ];
                setTiers(newTiers);
              }}
            />
            {matchData.length > 1 && (
              <button
                className="btn"
                disabled={
                  !matchData.every((match) => match.winner || !match.second)
                }
                onClick={() => {
                  const winners = matchData.map(({ first, second, winner }) => {
                    if (!second) {
                      return first;
                    }
                    if (winner === "FIRST") {
                      return first;
                    } else {
                      return second;
                    }
                  });
                  setTiers([...tiers.slice(0, i + 1), makeMatches(winners)]);
                }}
              >
                Next Tier
              </button>
            )}
          </div>
        ))}
      </div>
    </PasswordProtected>
  );
};

export default Admin;
