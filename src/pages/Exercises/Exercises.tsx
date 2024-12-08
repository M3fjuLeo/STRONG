import React from "react";
import ExercisesTable from "../../components/ExercisesTable";
import { IoMdAdd } from "react-icons/io";
import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";
import CreateExerciseForm from "../../components/CreateExerciseForm";

const Exercises = () => {
  return (
    <div className="">
      <div className="flex gap-4 items-end mb-8">
        <Heading title="Exercises" />
        <Modal>
          <Modal.Open opens="new">
            <button className="text-blue-500 flex items-center text-lg cursor-pointer">
              <IoMdAdd />
              New
            </button>
          </Modal.Open>

          <Modal.Window name="new">
            <CreateExerciseForm />
          </Modal.Window>
        </Modal>
      </div>
      <ExercisesTable />
    </div>
  );
};

export default Exercises;
