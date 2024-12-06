import React from "react";
import ExercisesTable from "../../components/ExercisesTable";
import { IoMdAdd } from "react-icons/io";

import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import NewExerciseForm from "../../components/NewExerciseForm";

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
            <NewExerciseForm />
          </Modal.Window>
        </Modal>
      </div>
      <ExercisesTable />
    </div>
  );
};

export default Exercises;
