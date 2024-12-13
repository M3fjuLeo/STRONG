import React from "react";

interface CancelButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const CancelButton = ({ onClick, children }: CancelButtonProps) => {
  return (
    <button
      type="button"
      className="py-2 px-4 border rounded-md cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CancelButton;
