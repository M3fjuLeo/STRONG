import React from "react";
import { routines } from "../data/routines";

const Rutines = () => {
  const routine = routines;
  console.log(routine);
  return (
    <div className="flex gap-10 flex-wrap xl:justify-start justify-center">
      <div className="p-4 bg-white w-80 shadow-lg flex flex-col gap-2">
        <img className="rounded" src={routine[0].image} alt="" />
        <h1 className="font-bold text-center">{routine[0].title}</h1>
      </div>
      <div className="p-4 bg-white w-80 shadow-lg flex flex-col gap-2">
        <img className="rounded" src={routine[0].image} alt="" />
        <h1 className="font-bold text-center">{routine[0].title}</h1>
      </div>
      <div className="p-4 bg-white w-80 shadow-lg flex flex-col gap-2">
        <img className="rounded" src={routine[0].image} alt="" />
        <h1 className="font-bold text-center">{routine[0].title}</h1>
      </div>
      <div className="p-4 bg-white w-80 shadow-lg flex flex-col gap-2">
        <img className="rounded" src={routine[0].image} alt="" />
        <h1 className="font-bold text-center">{routine[0].title}</h1>
      </div>
    </div>
  );
};

export default Rutines;
