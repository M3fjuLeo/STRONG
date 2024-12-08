import React from "react";

interface CancelButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  disabled: boolean;
}

const CancelButton = ({ onClick, children, disabled }: CancelButtonProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className="py-2 px-4 border rounded-md cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CancelButton;
