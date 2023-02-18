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
            className="mx-3"
            {...register("name", {
              required: true,
              validate: { newContestant: (v) => !contestants.includes(v) },
            })}
          />
        </label>
        <button
          type="submit"
          className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Submit
        </button>
      </div>
      {errors.name?.type === "required" && (
        <p role="alert" className="text-center">
          Name is required
        </p>
      )}
      {errors.name?.type === "newContestant" && (
        <p role="alert" className="text-center">
          Pick a different name
        </p>
      )}
    </form>
  );
};

export default SignUpForm;
