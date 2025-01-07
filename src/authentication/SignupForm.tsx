import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthHeader from "../ui/AuthHeader";
import AuthInputRow from "../ui/AuthInputRow";
import Button from "../ui/Button";
import SpinnerMini from "../ui/SpinnerMini";
import { useSignup } from "./useSignup";

const SignupForm = () => {
  const { register, handleSubmit, getValues, reset, formState } =
    useForm<FieldValues>();
  const { errors } = formState;
  const { signup, isLoading } = useSignup();

  const onSubmit: SubmitHandler<FieldValues> = ({
    fullName,
    email,
    password,
  }) => {
    signup(
      { fullName, email, password },
      {
        onSettled: (data, error, variables, context) => reset(),
      }
    );
  };

  return (
    <div className="flex flex-col gap-6 w-[20rem] pb-2">
      <AuthHeader
        title="Sign Up"
        description="Hello! Please enter your details"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <AuthInputRow label="Full Name" error={errors?.fullName?.message}>
          <input
            {...register("fullName", { required: "This field is required" })}
            type="text"
            id="fullName"
            className="border rounded-md p-1"
          />
        </AuthInputRow>
        <AuthInputRow label="Email" error={errors?.email?.message}>
          <input
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid amail adress",
              },
            })}
            type="mail"
            id="email"
            className="border rounded-md p-1"
          />
        </AuthInputRow>
        <AuthInputRow label="Password" error={errors?.password?.message}>
          <input
            {...register("password", { required: "This field is required" })}
            type="password"
            id="password"
            className="border rounded-md p-1"
          />
        </AuthInputRow>
        <AuthInputRow
          label="Repeat Password"
          error={errors?.passwordConfirm?.message}
        >
          <input
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            })}
            type="password"
            id="passwordConfirm"
            className="border rounded-md p-1"
          />
        </AuthInputRow>

        <Button disabled={isLoading}>
          {isLoading ? <SpinnerMini /> : "Create account"}
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
