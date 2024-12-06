import React from "react";
import { useExercises } from "../pages/Exercises/useExercises";
import { Exercise } from "../services/apiExercises";

const ExercisesTable = () => {
  const { isLoading, exercises, error } = useExercises();

  return (
    <div className="border rounded-md bg-white">
      <div className="py-4 hidden bg-gray-50 sm:grid grid-cols-3 p-2">
        <span>EXERCISES</span>
        <span>MUSCLE GROUP</span>
        <span>EQUIPMENT</span>
      </div>
      {isLoading && <div className="text-center">Loading...</div>}
      {exercises?.map((exercise: Exercise) => (
        <div
          key={exercise.id}
          className="grid sm:grid-cols-3 px-2 py-4 cursor-pointer border-b-[1px]"
        >
          <span className="font-bold">{exercise.name}</span>
          <span>{exercise.muscleGroup}</span>
          <span className="hidden sm:block">{exercise.muscleGroup}</span>
        </div>
      ))}
    </div>
  );
};

export default ExercisesTable;
