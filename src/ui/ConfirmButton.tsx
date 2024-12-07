import React from "react";

const ConfirmButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type="submit"
      className="cursor-pointer py-2 px-4 text-white bg-blue-500 rounded-md"
    >
      {children}
    </button>
  );
};

export default ConfirmButton;
