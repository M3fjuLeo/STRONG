import React, { useState } from "react";
import { useAppSelector } from "../services/MuscleSlice";
import { useMuscles } from "../services/useMuscles";
import Bodymap from "../ui/Bodymap";
import Button from "../ui/Button";
import TextEditor from "../ui/TextEditor";

const MuscleDescriptionPage = () => {
  const { muscles, isLoading, error } = useMuscles();
  const selectedMuscleId = useAppSelector((state) => state.muscle.muscleId);
  const [isEditing, setIsEditing] = useState(false);
  console.log(isEditing);

  const selectedMuscle = muscles?.find(
    (muscle) => muscle.name === selectedMuscleId
  );

  const muscleName = selectedMuscle
    ? selectedMuscle.name[0].toUpperCase() + selectedMuscle.name.slice(1)
    : "";
  const muscleDescription = selectedMuscle ? selectedMuscle.description : "";

  return (
    <div className="flex sm:flex-row dark:text-gray-300 flex-col-reverse gap-2">
      <div className="bg-white dark:bg-gray-600 rounded sm:w-[80%] p-4 flex flex-col gap-4">
        {selectedMuscle ? (
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-xl">{muscleName}</h1>
            <Button
              onClick={() => setIsEditing((prev) => !prev)}
              type="button"
              variant="empty"
            >
              {muscleDescription ? "Edit" : "Add Description"}
            </Button>
          </div>
        ) : (
          "Please select a muscle"
        )}
        {!isEditing ? (
          <p>{muscleDescription}</p>
        ) : (
          <TextEditor setIsEditing={setIsEditing} />
        )}
      </div>
      <div className="bg-white dark:bg-gray-600 rounded sm:w-[30%] pt-6 px-4">
        <Bodymap />
      </div>
    </div>
  );
};

export default MuscleDescriptionPage;
