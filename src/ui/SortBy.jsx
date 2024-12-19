import React from "react";
import { useSearchParams } from "react-router-dom";

const SortBy = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const sortBy = searchParams.get("muscleGroup") || "";

  function handleChange(e) {
    searchParams.set("muscleGroup", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="bg-white p-1 shadow-sm rounded-md">
      <select onChange={handleChange}>
        <option value="all">All</option>
        <option value="legs">Legs</option>
        <option value="abs">Abs</option>
        <option value="calves">Calves</option>
      </select>
    </div>
  );
};

export default SortBy;
