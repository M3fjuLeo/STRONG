import React from "react";
import { muscles } from "../data/muscle-description";
import { useAppSelector } from "../services/MuscleSlice";
import Bodymap from "../ui/Bodymap";

const MuscleDescriptionPage = () => {
  const selectedMuscleId = useAppSelector((state) => state.muscle.muscleId);
  const selectedMuscle = muscles.find(
    (muscle) => muscle.name === selectedMuscleId
  );

  return (
    <div className="flex gap-2">
      <div className="bg-white w-[80%]">
        {selectedMuscle && selectedMuscle.name}
      </div>
      <div className="bg-white w-[40%] pt-6 px-4">
        <Bodymap />
      </div>
    </div>
  );
};

export default MuscleDescriptionPage;
