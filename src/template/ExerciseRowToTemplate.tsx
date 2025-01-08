import React from "react";

const ExerciseRowToTemplate = ({ exercise, onClick }) => {
  const { id, name, muscleGroup, equipment } = exercise;

  return (
    <div
      onClick={onClick}
      key={id}
      className="grid hover:bg-gray-50 cursor-pointer gap-4 sm:grid-cols-3 p-4 items-center border-b-[1px] relative"
    >
      <span className="font-bold">{name}</span>
      <span>{muscleGroup}</span>
      <span className="hidden sm:block">{equipment}</span>
      <div className="absolute right-4 top-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export default ExerciseRowToTemplate;
