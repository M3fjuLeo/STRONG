import React from "react";
import { useForm } from "react-hook-form";
import { useCreateExercise } from "../pages/Exercises/useCreateExercise";
import CancelButton from "../ui/CancelButton";
import ConfirmButton from "../ui/ConfirmButton";
import FormRow from "../ui/FormRow";

interface CreateExerciseFormProps {
  onCloseModal: () => void;
}

interface ExerciseFormProps {
  name: string;
  muscleGroup: string;
  equipment: string;
  description: string;
}

const CreateExerciseForm = ({ onCloseModal }: CreateExerciseFormProps) => {
  const { isCreating, createExercise } = useCreateExercise();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExerciseFormProps>();

  const onSubmit = (data: ExerciseFormProps) => {
    createExercise(
      { ...data },
      {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[40rem]">
      <FormRow label="Name" error={errors.name?.message}>
        <input
          disabled={isCreating}
          type="text"
          id="name"
          {...register("name", { required: "This field is required" })}
          className="border p-2 rounded-md h-10 w-[15rem]"
        />
      </FormRow>
      <FormRow label="Muscle Group" error={errors.muscleGroup?.message}>
        <input
          disabled={isCreating}
          type="text"
          id="muscleGroup"
          {...register("muscleGroup", { required: "This field is required" })}
          className="border p-2 rounded-md h-10 w-[15rem]"
        />
      </FormRow>
      <FormRow label="Equipment" error={errors.equipment?.message}>
        <input
          disabled={isCreating}
          type="text"
          id="equipment"
          {...register("equipment", { required: "This field is required" })}
          className="border p-2 rounded-md h-10 w-[15rem]"
        />
      </FormRow>
      <FormRow label="Description">
        <textarea
          disabled={isCreating}
          id="description"
          cols={50}
          rows={4}
          className="border p-1"
        ></textarea>
      </FormRow>
      <div className="mt-10 flex justify-end gap-4">
        <CancelButton disabled={isCreating} onClick={() => onCloseModal?.()}>
          Cancel
        </CancelButton>
        <ConfirmButton disabled={isCreating}>Add New Exercise</ConfirmButton>
      </div>
    </form>
  );
};

export default CreateExerciseForm;
