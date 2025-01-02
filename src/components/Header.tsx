import React from "react";
import Logo from "../ui/Logo";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../authentication/Logout";

const Header = () => {
  return (
    <div className="w-full bg-white border-b-[1px] h-[4rem] py-4 flex items-center lg:justify-end justify-between px-10">
      <div className="lg:hidden block">
        <Logo />
      </div>
      <div className="flex items-center">
        <DarkModeToggle />
        <Logout />
      </div>
    </div>
  );
};

export default Header;
