import React from "react";
import CancelButton from "../ui/CancelButton";
import ConfirmButton from "../ui/ConfirmButton";
import FormRow from "../ui/FormRow";

interface CreateExerciseFormProps {
  onCloseModal: () => void;
}

const CreateExerciseForm = ({ onCloseModal }: CreateExerciseFormProps) => {
  return (
    <form className="w-[40rem]">
      <FormRow name="Name" label="name" />
      <FormRow name="Muscle Group" label="muscleGroup" />
      <FormRow name="Equipment" label="equipment" />
      <div className="flex items-center justify-between mt-4 border-b-[1px] pb-4">
        <label htmlFor="description">Description</label>
        <textarea
          name=""
          id="description"
          cols={50}
          rows={4}
          className="border p-1"
        ></textarea>
      </div>
      <div className="mt-10 flex justify-end gap-4">
        <CancelButton onClick={() => onCloseModal?.()}>Cancel</CancelButton>
        <ConfirmButton>Add New Exercise</ConfirmButton>
      </div>
    </form>
  );
};

export default CreateExerciseForm;
