import React from "react";
import { exercises } from "../data/exercises-data";

const ExercisesTable = () => {
  return (
    <div className="border rounded-md">
      <div className="py-4 bg-gray-50 grid grid-cols-3 p-2">
        <span>EXERCISES</span>
        <span>MUSCLE GROUP</span>
        <span>EQUIPMENT</span>
      </div>
      {exercises.map((exercise) => (
        <div className="grid grid-cols-3 px-2 py-4 border-b-[1px]">
          <span>{exercise.name}</span>
          <span>{exercise.muscleGroup}</span>
          <span>{exercise.equipment}</span>
        </div>
      ))}
    </div>
  );
};

export default ExercisesTable;
