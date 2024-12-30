import React from "react";
import ExercisesTable from "./ExercisesTable";
import { IoMdAdd } from "react-icons/io";
import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";

import CreateExerciseForm from "../../components/CreateExerciseForm";
import { useSearchParams } from "react-router-dom";
import SortBy from "../../ui/SortBy";

const Exercises = () => {
  const [searchParams] = useSearchParams();

  let filteredValue = searchParams.get("muscleGroup") || "all";

  return (
    <div className="">
      <div className="flex gap-4 items-center justify-between mb-6">
        <Modal>
          <div className="flex items-end gap-4">
            <Heading title="Exercises" />
            <Modal.Open opens="new">
              <button className="text-blue-500 flex items-center text-lg cursor-pointer">
                <IoMdAdd />
                New
              </button>
            </Modal.Open>
          </div>

          <SortBy />

          <Modal.Window name="new">
            <CreateExerciseForm />
          </Modal.Window>
        </Modal>
      </div>
      <ExercisesTable filteredValue={filteredValue} />
    </div>
  );
};

export default Exercises;
