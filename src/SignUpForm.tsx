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
    setFocus,
    formState: { errors },
  } = useForm<FormData>();
  const hasError = Object.keys(errors).length > 0;
  const errorMessages: { [key: string]: string } = {
    required: "Name is required",
    newContestant: "Pick a different name",
  };
  const errorType = errors.name?.type;
  const errorMessage =
    typeof errorType === "string" ? errorMessages[errorType] : "";

  const onSubmit = handleSubmit((data, event) => {
    event?.target.reset();
    addContestant(data.name);
  });

  React.useEffect(() => {
    setFocus("name");
  }, [setFocus]);

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
          className="btn"
        >
          Submit
        </button>
      </div>
      <p role={hasError ? "alert" : undefined} className="text-center h-4">
        {errorMessage}
      </p>
    </form>
  );
};

export default SignUpForm;
