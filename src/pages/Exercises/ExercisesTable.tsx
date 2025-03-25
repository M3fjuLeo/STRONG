import React from "react";
import ExerciseRow from "./ExerciseRow";
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
    <div className="border rounded dark:bg-gray-700 dark:text-gray-300 dark:border-gray-400 bg-white">
      <div className="p-4 hidden dark:bg-gray-800 bg-gray-50 sm:grid grid-cols-3">
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
