import React from "react";
import { useSearchParams } from "react-router-dom";
import { useExercises } from "../pages/Exercises/useExercises";

const SortBy = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { exercises } = useExercises();

  const muscleGroups = React.useMemo(() => {
    if (!exercises) return [];
    return Array.from(
      new Set(exercises.map((exercise) => exercise.muscleGroup))
    );
  }, [exercises]);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    searchParams.set("muscleGroup", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="bg-white p-1 shadow-sm rounded-md">
      <select onChange={handleChange}>
        <option value="all">All</option>
        {muscleGroups.map((group) => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortBy;
