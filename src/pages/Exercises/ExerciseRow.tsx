import React from "react";
import { Exercise } from "../../services/apiExercises";
import { useDeleteExercise } from "./useDeleteExercise";

interface ExerciseRowProps {
  exercise: Exercise;
}

const ExerciseRow = ({ exercise }: ExerciseRowProps) => {
  const { isDeleting, deleteExercise } = useDeleteExercise();

  const { id, name, muscleGroup, equipment } = exercise;

  return (
    <div
      key={id}
      className="grid sm:grid-cols-3 p-4 cursor-pointer border-b-[1px] relative"
    >
      <span className="font-bold">{name}</span>
      <span>{exercise.muscleGroup}</span>
      <span className="hidden sm:block">{equipment}</span>
      <button
        onClick={() => deleteExercise(id)}
        disabled={isDeleting}
        type="button"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-100 py-1 rounded-md cursor-pointer px-6"
      >
        x
      </button>
    </div>
  );
};

export default ExerciseRow;
