import React from "react";

interface ButtonIconProps {
  children: React.ReactNode;
  onClick: () => void;
}

const ButtonIcon = ({ children, onClick }: ButtonIconProps) => {
  return (
    <button
      onClick={onClick}
      className="hover:bg-gray-50 hover:cursor-pointer text-2xl p-2 duration-300 rounded-md hover:text-blue-700"
    >
      {children}
    </button>
  );
};

export default ButtonIcon;
