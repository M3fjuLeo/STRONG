import React, { useState } from "react";
import AuthHeader from "../ui/AuthHeader";
import ConfirmButton from "../ui/ConfirmButton";
import SpinnerMini from "../ui/SpinnerMini";
import { useLogin } from "./useLogin";

const LoginForm = () => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("test123");
  const { login, isLoading } = useLogin();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !password) return;

    login({ email, password });
  }

  return (
    <div className="pb-2 flex flex-col gap-6 w-[20rem]">
      <AuthHeader
        title="Log in"
        description="Welcome back! Please enter your details"
      />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            id="email"
            value={email}
            className="border rounded-md p-1"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            id="password"
            value={password}
            className="border rounded-md p-1"
          />
        </div>

        <ConfirmButton disabled={isLoading}>
          {isLoading ? <SpinnerMini /> : "Log in"}
        </ConfirmButton>
      </form>
    </div>
  );
};

export default LoginForm;
