import React from "react";

interface ConfirmButtonProps {
  children: React.ReactNode;
  disabled: boolean;
}

const ConfirmButton = ({ children, disabled }: ConfirmButtonProps) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="cursor-pointer py-2 px-4 text-white bg-blue-500 rounded-md"
    >
      {children}
    </button>
  );
};

export default ConfirmButton;
