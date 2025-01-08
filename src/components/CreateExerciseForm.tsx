import React from "react";
import { useForm } from "react-hook-form";
import { useCreateExercise } from "../pages/Exercises/useCreateExercise";
import FormRow from "../ui/FormRow";
import Button from "../ui/Button";

interface CreateExerciseFormProps {
  onCloseModal?: () => void;
}

interface ExerciseFormProps {
  name: string;
  muscleGroup: string;
  equipment: string;
  description: string;
  image: FileList;
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
    const image = typeof data.image === "string" ? data.image : data.image[0];

    createExercise(
      { ...data, image },
      {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:w-[40rem] w-[20rem] sm:w-[25rem] md:w-[30rem]"
    >
      <FormRow label="Name" error={errors.name?.message}>
        <input
          disabled={isCreating}
          type="text"
          id="name"
          {...register("name", { required: "This field is required" })}
          className="border p-2 rounded-md h-10 w-full lg:w-[15rem]"
        />
      </FormRow>
      <FormRow label="Muscle Group" error={errors.muscleGroup?.message}>
        <select
          id="muscleGroup"
          disabled={isCreating}
          {...register("muscleGroup", { required: "This field is required" })}
          className="border p-2 rounded-md h-10 w-full lg:w-[15rem]"
        >
          <option value="">Select Muscle Group</option>
          <option value="Core">Core</option>
          <option value="Arms">Biceps</option>
          <option value="Arms">Triceps</option>
          <option value="Back">Back</option>
          <option value="Chest">Chest</option>
          <option value="Legs">Legs</option>
          <option value="Shoulders">Shoulders</option>
          <option value="Fbw">Fbw</option>
        </select>
      </FormRow>
      <FormRow label="Equipment" error={errors.equipment?.message}>
        <select
          id="equipment"
          disabled={isCreating}
          {...register("equipment", { required: "This field is required" })}
          className="border p-2 rounded-md h-10 w-full lg:w-[15rem]"
        >
          <option value="">Select Category</option>
          <option value="Barbell">Barbell</option>
          <option value="Dumbbell">Dumbbell</option>
          <option value="Machine">Machine</option>
          <option value="Cardio">Cardio</option>
          <option value="BodyWeight">Body Weight</option>
        </select>
      </FormRow>
      <FormRow label="Description">
        <textarea
          disabled={isCreating}
          id="description"
          rows={4}
          className="border p-1 lg:w-[20rem]"
          {...register("description")}
        ></textarea>
      </FormRow>
      <FormRow label="Image">
        <input
          id="image"
          accept="image/*"
          type="file"
          className="p-2 lg:w-[20rem] cursor-pointer rounded-md h-10 w-full"
          {...register("image")}
        />
      </FormRow>
      <div className="mt-10 flex justify-end gap-4">
        <Button variant="empty" type="button" onClick={() => onCloseModal?.()}>
          Cancel
        </Button>
        <Button type="submit" variant="primary" disabled={isCreating}>
          Add New Exercise
        </Button>
      </div>
    </form>
  );
};

export default CreateExerciseForm;
