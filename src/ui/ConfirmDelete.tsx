import React from "react";
import CancelButton from "./CancelButton";
import ConfirmButton from "./ConfirmButton";

interface ConfirmDeleteProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
  onCloseModal: () => void;
}

const ConfirmDelete = ({
  onCloseModal,
  onClick,
  disabled,
}: ConfirmDeleteProps) => {
  return (
    <div>
      <h1 className="font-bold text-xl mb-2">Delete Exercise</h1>
      <p className="mb-4">
        Are you sure you want to delete this exercise permanently? This action
        cannot be undone.
      </p>

      <div className="flex gap-4 items-center justify-end">
        <CancelButton onClick={onCloseModal}>Cancel</CancelButton>
        <ConfirmButton type="danger" disabled={disabled} onClick={onClick}>
          Delete
        </ConfirmButton>
      </div>
    </div>
  );
};

export default ConfirmDelete;
