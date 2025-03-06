import React from "react";
import { useAppSelector } from "../services/MuscleSlice";
import { useMuscles } from "../services/useMuscles";
import Bodymap from "../ui/Bodymap";

const MuscleDescriptionPage = () => {
  const { muscles, isLoading, error } = useMuscles();
  const selectedMuscleId = useAppSelector((state) => state.muscle.muscleId);

  const selectedMuscle = muscles?.find(
    (muscle) => muscle.name === selectedMuscleId
  );

  const muscleName = selectedMuscle
    ? selectedMuscle.name[0].toUpperCase() + selectedMuscle.name.slice(1)
    : "";
  const muscleDescription = selectedMuscle ? selectedMuscle.description : "";

  return (
    <div className="flex gap-2">
      <div className="bg-white w-[80%]">
        <h1 className="font-bold text-xl">{muscleName}</h1>
        <p>{muscleDescription}</p>
      </div>
      <div className="bg-white w-[30%] pt-6 px-4">
        <Bodymap />
      </div>
    </div>
  );
};

export default MuscleDescriptionPage;
