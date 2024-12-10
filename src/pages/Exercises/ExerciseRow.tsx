import React from "react";
import { Exercise } from "../../services/apiExercises";
import { useDeleteExercise } from "./useDeleteExercise";
import { FaTrashAlt } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";

interface ExerciseRowProps {
  exercise: Exercise;
}

const ExerciseRow = ({ exercise }: ExerciseRowProps) => {
  const { isDeleting, deleteExercise } = useDeleteExercise();

  const { id, name, muscleGroup, equipment } = exercise;

  return (
    <div key={id} className="grid sm:grid-cols-3 p-4 border-b-[1px] relative">
      <span className="font-bold">{name}</span>
      <span>{exercise.muscleGroup}</span>
      <span className="hidden sm:block">{equipment}</span>
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <button
          type="button"
          className="p-2 hover:bg-gray-50 lg:p-3 rounded-md cursor-pointer"
        >
          <FaInfo />
        </button>
        <button
          onClick={() => deleteExercise(id)}
          disabled={isDeleting}
          type="button"
          className="p-2 hover:bg-gray-50 lg:p-3 rounded-md cursor-pointer"
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default ExerciseRow;
