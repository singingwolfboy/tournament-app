import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./Home";
import Matches from "./Matches";
import Admin from "./Admin";

export default function App() {
  return (
    <div>
      <h1 className="text-2xl">Paper on the Rocks</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="matches" element={<Matches />} />
          <Route path="admin" element={<Admin />} />

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
        <ul className="flex gap-1">
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

      <hr />

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
