import React from "react";
import ExerciseRow from "./ExerciseRow";
import { useDeleteExercise } from "./useDeleteExercise";
import { useExercises } from "./useExercises";
import { Exercise } from "../../services/apiExercises";

const ExercisesTable = ({ filteredValue }) => {
  const { isLoading, exercises } = useExercises();
  const filteredExercises =
    filteredValue === "all" || !filteredValue
      ? exercises
      : exercises?.filter(
          (exercise) =>
            exercise.muscleGroup.toLowerCase() === filteredValue.toLowerCase()
        );

  return (
    <div className="border rounded-md bg-white">
      <div className="p-4 hidden bg-gray-50 sm:grid grid-cols-3">
        <span>EXERCISES</span>
        <span>MUSCLE GROUP</span>
        <span>EQUIPMENT</span>
      </div>
      {isLoading && <div className="text-center">Loading...</div>}
      {filteredExercises?.map((exercise: Exercise) => (
        <ExerciseRow exercise={exercise} key={exercise.id} />
      ))}
    </div>
  );
};

export default ExercisesTable;
