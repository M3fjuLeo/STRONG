import React from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface AuthInputRowProps {
  label: string;
  children: React.ReactNode;
  error: any;
}

const AuthInputRow = ({ label, children, error }: AuthInputRowProps) => {
  const childId = React.isValidElement(children)
    ? children.props.id
    : undefined;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={childId}>{label}</label>
      {children}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default AuthInputRow;
