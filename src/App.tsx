import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./Home";
import Matches from "./Matches";
import Admin from "./Admin";
import { MatchData } from "./types";

export default function App() {
  const [contestants, setContestants] = React.useState<string[]>([]);
  const addContestant = (name: string) => {
    setContestants([name, ...contestants]);
  };
  const removeContestant = (name: string) => {
    setContestants(contestants.filter((contestant) => contestant !== name));
  };
  const [tiers, setTiers] = React.useState<MatchData[][]>([]);

  return (
    <div>
      <h1 className="text-2xl text-center">Paper on the Rocks</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home contestants={contestants} addContestant={addContestant} />
            }
          />
          <Route path="matches" element={<Matches tiers={tiers} />} />
          <Route
            path="admin"
            element={
              <Admin
                contestants={contestants}
                removeContestant={removeContestant}
                tiers={tiers}
                setTiers={setTiers}
              />
            }
          />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul className="flex gap-2 justify-center">
          <li>
            <Link
              className="text-blue-600 hover:text-blue-700 transition duration-300"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-blue-600 hover:text-blue-700 transition duration-300"
              to="/matches"
            >
              Matches
            </Link>
          </li>
          <li>
            <Link
              className="text-blue-600 hover:text-blue-700 transition duration-300"
              to="/admin"
            >
              Admin
            </Link>
          </li>
        </ul>
      </nav>

      <hr className="mb-4" />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
