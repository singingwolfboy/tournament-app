import * as React from "react";
import SignUpForm from "./SignUpForm";

export default function Register() {
  const [contestants, setContestants] = React.useState<string[]>([]);
  const addContestant = (name: string) => {
    setContestants([name, ...contestants]);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <SignUpForm addContestant={addContestant} contestants={contestants} />
      <h3>Contestants</h3>
      {contestants.length === 0 ? (
        <p>None yet</p>
      ) : (
        <ul>
          {contestants.map((name, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
