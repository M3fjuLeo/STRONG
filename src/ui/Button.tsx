import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: "submit" | "button";
  variant: "danger" | "empty" | "primary";
}

const variantClasses = {
  danger: "bg-red-500 hover:bg-red-600 text-white",
  empty: "bg-white hover:bg-gray-50 text-black border",
  primary: "bg-blue-500 hover:bg-blue-600 text-white",
};

const Button = ({
  variant,
  type,
  children,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`cursor-pointer items-center flex justify-center py-2 px-4 ${
        variantClasses[variant] || ""
      } rounded-md`}
    >
      {children}
    </button>
  );
};

export default Button;
