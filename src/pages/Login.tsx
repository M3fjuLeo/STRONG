import React, { useState } from "react";
import LoginForm from "../authentication/LoginForm";

const Login = () => {
  return (
    <div className="flex h-svh">
      <div className="flex-1 flex items-center justify-center">
        <div className=" p-2 flex flex-col gap-6">
          <div>
            <p className="text-4xl mb-2">Log in</p>
            <p className="font-light">
              Welcome back! Please enter your details
            </p>
          </div>

          <LoginForm />

          <p className="font-light">
            Don't have an account?{" "}
            <span className="text-blue-500 cursor-pointer font-normal">
              Sign up
            </span>
          </p>
        </div>
      </div>
      <div className="flex-1 bg-red-50 ">right</div>
    </div>
  );
};

export default Login;
