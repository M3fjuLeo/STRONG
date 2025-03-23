import React from "react";
import { Link } from "react-router-dom";
import { routines } from "../data/routines";
import Heading from "../ui/Heading";

const Routines = () => {
  return (
    <div className="gap-8 flex flex-col">
      <Heading
        title="Best Workout Routines"
        description="Browse the best workout routines for every type of fitness goal."
      />
      <div className="flex gap-10 dark:text-gray-300 flex-wrap xl:justify-start justify-center">
        {routines.map((routine) => (
          <Link
            to={`routine/${routine.id}`}
            key={routine.id}
            className="p-4 rounded bg-white w-80 dark:bg-gray-600 shadow-lg flex flex-col gap-2"
          >
            <img className="rounded" src={routine.image} alt="" />
            <h1 className="font-bold text-center">{routine.title}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Routines;
