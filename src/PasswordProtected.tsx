import * as React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  password: string;
};

interface Props {
  password: string;
  display?: React.ReactNode;
  children: React.ReactElement;
}

const PasswordProtected: React.FC<Props> = ({
  password,
  children,
  display = <p>Please enter the password to continue.</p>,
}) => {
  const [showChildren, setShowChildren] = React.useState(false);
  const [showTypedPassword, setShowTypedPassword] = React.useState(false);
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    if (data.password === password) {
      setShowChildren(true);
    } else {
      setError("root.wrongPassword", { type: "custom" });
    }
  });

  if (showChildren) {
    return children;
  }
  return (
    <div>
      <div className="text-center pb-4">{display}</div>
      <form onSubmit={onSubmit} className="text-center">
        <label className="block">
          Password:
          <input
            type={showTypedPassword ? "text" : "password"}
            className="block mx-auto"
            {...register("password", {
              required: true,
              onChange: () => clearErrors("root.wrongPassword"),
            })}
          />
        </label>
        <label className="block">
          Show password:{" "}
          <input
            type="checkbox"
            checked={showTypedPassword}
            onChange={() => setShowTypedPassword(!showTypedPassword)}
          />
        </label>
        {errors.password?.type === "required" && (
          <p role="alert">This field is required</p>
        )}
        <button type="submit" className="btn mt-2">
          Submit
        </button>
        {errors.root?.wrongPassword && <p role="alert">Wrong password</p>}
      </form>
    </div>
  );
};

export default PasswordProtected;
