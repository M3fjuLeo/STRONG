import React from "react";
import { FieldError } from "react-hook-form";

interface FormRowProps {
  error?: FieldError | string;
  label: string;
  children: React.ReactElement;
}

const FormRow = ({ label, children, error }: FormRowProps) => {
  const errorMessage = typeof error === "string" ? error : error?.message;

  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:items-center justify-between border-b-[1px] py-4">
      <label htmlFor={children.props.id}>{label}</label>
      <div className="flex flex-col gap-2">
        {children}
        {error && <span className="text-red-500 text-sm">{errorMessage}</span>}
      </div>
    </div>
  );
};

export default FormRow;
