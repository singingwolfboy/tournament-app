import * as React from "react";
import SignUpForm from "./SignUpForm";

export default function Register() {
  const [contestants, setContestants] = React.useState<string[]>([]);
  const addContestant = (name: string) => {
    setContestants([name, ...contestants]);
  };

  return (
    <div>
      <SignUpForm addContestant={addContestant} contestants={contestants} />
      <h3 className="text-lg">Contestants</h3>
      {contestants.length === 0 ? (
        <p>None yet</p>
      ) : (
        <ul className="list-disc ml-5">
          {contestants.map((name, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
