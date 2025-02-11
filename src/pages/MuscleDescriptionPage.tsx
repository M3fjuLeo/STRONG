import React from "react";
import Bodymap from "../ui/Bodymap";

const MuscleDescriptionPage = () => {
  return (
    <div className="flex gap-2">
      <div className="bg-white w-[80%]"></div>
      <div className="bg-white w-[40%] pt-6 px-4">
        <Bodymap />
      </div>
    </div>
  );
};

export default MuscleDescriptionPage;
