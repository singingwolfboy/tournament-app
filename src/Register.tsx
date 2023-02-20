import * as React from "react";
import SignUpForm from "./SignUpForm";

interface Props {
    contestants: string[];
    addContestant: (name: string) => void;
}

const Register: React.FC<Props> = ({contestants, addContestant}) => {
  return (
    <div>
      <div className="mb-5">
        <SignUpForm addContestant={addContestant} contestants={contestants} />
      </div>

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

export default Register
