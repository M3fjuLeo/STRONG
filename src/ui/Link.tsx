import React from "react";
import { NavLink } from "react-router-dom";

interface LinkProps {
  title: string;
  to: string;
  icon: React.ReactNode;
}

const Link = ({ title, to, icon }: LinkProps) => {
  return (
    <li className="w-full">
      <NavLink
        to={to}
        className={`flex lg:flex-row flex-col dark:text-gray-200 p-2 rounded-md items-center gap-2 text-2xl font-normal hover:bg-blue-500 duration-300 dark:hover:text-white hover:text-white`}
      >
        {icon}
        <span className="text-xl hidden lg:block">{title}</span>
      </NavLink>
    </li>
  );
};

export default Link;
