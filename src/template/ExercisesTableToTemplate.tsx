import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useExercises } from "../pages/Exercises/useExercises";
import { Exercise } from "../services/apiExercises";
import ExerciseRowToTemplate from "./ExerciseRowToTemplate";
import { useTemplate } from "./useTemplate";

const ExercisesTableToTemplate = ({ filteredValue, onCloseModal }) => {
  const { addExerciseToSelected } = useTemplate();
  const { isLoading, exercises } = useExercises();
  const queryClient = useQueryClient();

  const filteredExercises =
    filteredValue === "all" || !filteredValue
      ? exercises
      : exercises?.filter(
          (exercise) =>
            exercise.muscleGroup.toLowerCase() === filteredValue.toLowerCase()
        );

  function handleExerciseClick(exercise: Exercise) {
    addExerciseToSelected(exercise);
    console.log("Selected exercise:", exercise);
    queryClient.invalidateQueries(["selectedExercises"]);
    onCloseModal?.();
  }

  return (
    <div className="border rounded-md bg-white">
      <div className="p-4 hidden border-b bg-gray-50 sm:grid grid-cols-3">
        <span>EXERCISES</span>
        <span>MUSCLE GROUP</span>
        <span>EQUIPMENT</span>
      </div>
      {isLoading && <div className="text-center">Loading...</div>}
      {filteredExercises?.map((exercise: Exercise) => (
        <ExerciseRowToTemplate
          onClick={() => handleExerciseClick(exercise)}
          exercise={exercise}
          key={exercise.id}
        />
      ))}
    </div>
  );
};

export default ExercisesTableToTemplate;
