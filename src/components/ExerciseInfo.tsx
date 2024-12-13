import React from "react";

interface ExerciseInfoProps {
  onCloseModal: () => void;
  exercise: {
    name: string;
    equipment: string;
    image: string;
    description: string;
  };
}

const ExerciseInfo = ({ onCloseModal, exercise }: ExerciseInfoProps) => {
  const { name, equipment, image, description } = exercise;

  return (
    <div className="lg:w-[40rem] w-[20rem] sm:w-[25rem] md:w-[30rem]">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between gap-4 bg-gray-50 py-1 lg:py-2 px-2 lg:px-8 rounded-md">
          <button
            className="hover:bg-gray-50 p-2 rounded-md"
            type="button"
            onClick={() => onCloseModal?.()}
          >
            X
          </button>
          <h1>
            <span className="font-bold">{name}</span> ({equipment})
          </h1>
          <button className="text-blue-500">Edit</button>
        </div>

        <div className="m-auto">
          <img loading="lazy" src={image} alt="Dumbbell Bench Press" />
        </div>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExerciseInfo;
