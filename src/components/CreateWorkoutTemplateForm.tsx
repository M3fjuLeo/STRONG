import React from "react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import ExercisesToTemplate from "../template/ExercisesToTemplate";
import { useTemplate } from "../template/useTemplate";
import { useQueryClient } from "@tanstack/react-query";

const CreateWorkoutTemplateForm = ({ setOpenForm }) => {
  const { getSelectedExercises } = useTemplate();
  const queryClient = useQueryClient();

  function addExercise(e) {
    e.preventDefault();
    queryClient.invalidateQueries(["selectedExercises"]);
  }

  return (
    <div className="">
      <form className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <input
              className="px-2 py-1 rounded-md"
              type="text"
              defaultValue="Workout Name"
            ></input>
            <textarea className="px-2 py-1 rounded-md" placeholder="Notes" />
          </div>
          <button
            type="button"
            className="bg-green-500 text-white px-2 pt-1 rounded-md"
          >
            Finish
          </button>
        </div>

        <div>
          {getSelectedExercises().map((exercise) => (
            <div key={exercise.id}>
              <span>{exercise.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <Modal>
            <Modal.Open opens="add">
              <Button onClick={addExercise} type="button" variant="primary">
                Add Exercises
              </Button>
            </Modal.Open>
            <Button
              variant="danger"
              type="button"
              onClick={() => setOpenForm(false)}
            >
              Cancel
            </Button>

            <Modal.Window name="add">
              <ExercisesToTemplate />
            </Modal.Window>
          </Modal>
        </div>
      </form>
    </div>
  );
};

export default CreateWorkoutTemplateForm;
