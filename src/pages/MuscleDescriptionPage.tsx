import React from "react";
import { useAppSelector } from "../services/MuscleSlice";
import Bodymap from "../ui/Bodymap";

const MuscleDescriptionPage = () => {
  const selectedMuscleId = useAppSelector((state) => state.muscle.muscleId);
  const data = useAppSelector((state) => state.muscle.data);
  const selectedMuscle = data.find(
    (muscle) => muscle.name === selectedMuscleId
  );

  return (
    <div className="flex gap-2">
      <div className="bg-white w-[80%]">
        {selectedMuscle ? selectedMuscle.description : "Select a muscle"}
      </div>
      <div className="bg-white w-[30%] pt-6 px-4">
        <Bodymap />
      </div>
    </div>
  );
};

export default MuscleDescriptionPage;
