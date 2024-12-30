import React, { useState } from "react";
import LoginForm from "../authentication/LoginForm";
import SignupForm from "../authentication/SignupForm";

const Login = () => {
  const [loginForm, setLoginForm] = useState(true);

  return (
    <div className="flex h-svh justify-center ">
      <div className="lg:flex-1 flex items-center justify-center">
        <div>
          {loginForm ? <LoginForm /> : <SignupForm />}

          <p className="font-light">
            Don't have an account?{" "}
            <span
              onClick={() => {
                setLoginForm((prev) => !prev);
              }}
              className="text-blue-500 cursor-pointer font-normal"
            >
              {loginForm ? "Sign up" : "Sign in"}
            </span>
          </p>
        </div>
      </div>
      <div className="lg:flex-1">
        <img
          src="public/login-image.jpg"
          alt=""
          className="w-full lg:block hidden h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
