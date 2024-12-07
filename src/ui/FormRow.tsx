import React from "react";

interface FormRowProps {
  name: string;
  label: string;
}

const FormRow = ({ name, label }: FormRowProps) => {
  return (
    <div className="flex items-center justify-between border-b-[1px] py-4">
      <label htmlFor={label}>{name}</label>
      <input
        id={label}
        type="text"
        className="border p-2 rounded-md h-10 w-[15rem]"
      />
    </div>
  );
};

export default FormRow;
