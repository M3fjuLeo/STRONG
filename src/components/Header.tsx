import React from "react";
import Logo from "../ui/Logo";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../authentication/Logout";
import { useUser } from "../authentication/useUser";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, isAuthenticated, fullName } = useUser();
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white border-b-[1px] h-[4rem] py-4 flex items-center lg:justify-end justify-between px-10">
      <div className="lg:hidden block">
        <Logo />
      </div>
      <div className="flex items-center">
        <DarkModeToggle />
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <div className="flex items-center">
              <Logout />
              {fullName}
            </div>
          ) : (
            <button
              className="cursor-pointer hover:text-blue-500 duration-300"
              onClick={() => navigate("/login")}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
