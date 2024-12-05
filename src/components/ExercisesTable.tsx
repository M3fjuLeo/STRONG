import React from "react";
import { exercises } from "../data/exercises-data";

const ExercisesTable = () => {
  return (
    <div className="border rounded-md bg-white">
      <div className="py-4 hidden bg-gray-50 sm:grid grid-cols-3 p-2">
        <span>EXERCISES</span>
        <span>MUSCLE GROUP</span>
        <span>EQUIPMENT</span>
      </div>
      {exercises.map((exercise) => (
        <div className="grid sm:grid-cols-3 px-2 py-4 cursor-pointer border-b-[1px]">
          <span className="font-bold">{exercise.name}</span>
          <span>{exercise.muscleGroup}</span>
          <span className="hidden sm:block">{exercise.equipment}</span>
        </div>
      ))}
    </div>
  );
};

export default ExercisesTable;
