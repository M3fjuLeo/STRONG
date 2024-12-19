import React, { useState } from "react";
import ConfirmButton from "../ui/ConfirmButton";
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label htmlFor="">Email</label>
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

      <div className="flex flex-col">
        <label htmlFor="">Password</label>
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

      <ConfirmButton disabled={isLoading}>Login</ConfirmButton>
    </form>
  );
};

export default LoginForm;
