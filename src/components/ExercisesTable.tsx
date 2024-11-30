import React from "react";

const ExercisesTable = () => {
  return (
    <div className="border rounded-md ">
      <div className="flex justify-around py-4 bg-gray-50">
        <span>EXERCISES</span>
        <span>MUSCLE GROUP</span>
        <span>EQUIPMENT</span>
      </div>
      <div className="flex justify-around">
        <span>Barbell Curl</span>
        <span>Biceps</span>
        <span>Dumbbell</span>
      </div>
    </div>
  );
};

export default ExercisesTable;
