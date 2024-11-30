import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "./Logout";

const Header = () => {
  return (
    <div className="w-full border-b-[1px] h-[4rem] flex items-center justify-end pr-10">
      <DarkModeToggle />
      <Logout />
    </div>
  );
};

export default Header;
