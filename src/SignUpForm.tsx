import * as React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
};

interface Props {
  addContestant: (name: string) => void;
  contestants?: string[];
}

const SignUpForm: React.FC<Props> = ({ addContestant, contestants = [] }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data, event) => {
    event?.target.reset();
    addContestant(data.name);
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            placeholder="John Smith"
            {...register("name", {
              required: true,
              validate: { newContestant: (v) => !contestants.includes(v) },
            })}
          />
        </label>
        <button type="submit">Submit</button>
      </div>
      {errors.name?.type === "required" && <p role="alert">Name is required</p>}
      {errors.name?.type === "newContestant" && <p role="alert">Pick a different name</p>}
    </form>
  );
};

export default SignUpForm;
