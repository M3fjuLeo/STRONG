import React, { useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthHeader from "../ui/AuthHeader";
import AuthInputRow from "../ui/AuthInputRow";
import Button from "../ui/Button";
import SpinnerMini from "../ui/SpinnerMini";
import { useSignup } from "./useSignup";
import { useUpdateUser } from "./useUpdateUser";
import { useUser } from "./useUser";

interface SignupFormProps {
  initialData?: { fullName: string; email: string };
  isEditing: boolean;
}

const SignupForm = ({ initialData, isEditing }: SignupFormProps) => {
  const { user, fullName, email } = useUser();
  const { register, handleSubmit, getValues, reset, formState } =
    useForm<FieldValues>({
      defaultValues: initialData || {
        fullName,
        email,
        password: "",
      },
    });

  useEffect(() => {
    if (user) {
      reset({
        fullName,
        email,
      });
    }
  }, [user, reset]);

  console.log(user);

  const { errors } = formState;
  const { signup, isLoading: isSigningUp } = useSignup();
  const { updateUser, isLoading: isUpdating } = useUpdateUser();

  const onSubmit: SubmitHandler<FieldValues> = ({
    fullName,
    email,
    password,
  }) => {
    if (isEditing) {
      updateUser({ fullName, email, password }, { onSettled: () => reset() });
    } else {
      signup(
        { fullName, email, password },
        {
          onSettled: () => reset(),
        }
      );
    }
  };

  return (
    <div className="flex flex-col gap-6 w-[20rem] pb-2">
      <AuthHeader
        title={isEditing ? "Settings" : "Sign Up"}
        description={isEditing ? "" : "Hello! Please enter your details"}
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
            type="email"
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
        <Button
          variant="primary"
          type="submit"
          disabled={isSigningUp || isUpdating}
        >
          {isSigningUp || isUpdating ? (
            <SpinnerMini />
          ) : isEditing ? (
            "Update Profile"
          ) : (
            "Create account"
          )}
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
