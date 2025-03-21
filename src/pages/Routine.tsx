import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { routines } from "../data/routines";

const Routine = () => {
  const { id } = useParams();
  const routine = routines.find((r) => r.id === parseInt(id as string, 10));

  if (!routine) {
    return <div>Routine not found</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="h-full items-center flex flex-col gap-8 bg-white p-4 rounded">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl">{routine.title}</h1>
          <img
            src={routine.image}
            alt="Routine image"
            className=" max-h-[20rem] rounded object-cover"
          />
          <p>{routine.introduction}</p>
        </div>

        {routine.exercises.map((r) => (
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-2xl">{r.title}</h2>
            <p>{r.description}</p>
          </div>
        ))}
      </div>
      <div className="bg-white p-4">
        <h2 className="text-center font-bold text-2xl">More Workouts</h2>
        <div className="flex flex-col md:flex-row items-center flex-wrap gap-2 justify-evenly">
          {routines
            .filter((r) => r.id !== routine.id)
            .slice(0, 3)
            .map((routine) => (
              <Link
                to={`/routines/routine/${routine.id}`}
                key={routine.id}
                className="p-4 bg-white w-80 shadow-lg flex flex-col gap-2"
              >
                <img className="rounded" src={routine.image} alt="" />
                <h1 className="font-bold text-center">{routine.title}</h1>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Routine;
