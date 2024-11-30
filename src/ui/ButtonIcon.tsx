import React from "react";

const ButtonIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="hover:bg-gray-50 hover:cursor-pointer text-2xl p-2 duration-300 rounded-md hover:text-blue-700">
      {children}
    </div>
  );
};

export default ButtonIcon;
