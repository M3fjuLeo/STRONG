import React from "react";
import { useSearchParams } from "react-router-dom";
import Heading from "../ui/Heading";
import SortBy from "../ui/SortBy";
import ExercisesTableToTemplate from "./ExercisesTableToTemplate";

const ExercisesToTemplate = ({ onCloseModal }) => {
  const [searchParams] = useSearchParams();

  let filteredValue = searchParams.get("muscleGroup") || "all";

  return (
    <div className="">
      <div className="flex gap-4 items-center justify-between mb-6">
        <div className="flex items-end gap-4">
          <Heading title="Exercises" />
        </div>

        <SortBy />
      </div>
      <ExercisesTableToTemplate
        onCloseModal={onCloseModal}
        filteredValue={filteredValue}
      />
    </div>
  );
};

export default ExercisesToTemplate;
