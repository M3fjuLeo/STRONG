import React from "react";

interface ConfirmButtonProps {
  children: React.ReactNode;
  disabled: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "danger";
}

const ConfirmButton = ({
  type,
  children,
  disabled,
  onClick,
}: ConfirmButtonProps) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={onClick}
      className={`cursor-pointer py-2 px-4 text-white ${
        type === "danger" ? "bg-red-500" : "bg-blue-500"
      } rounded-md`}
    >
      {children}
    </button>
  );
};

export default ConfirmButton;
