import React from "react";
import LoginForm from "../authentication/LoginForm";
import Modal from "../ui/Modal";
import Button from "../ui/Button";

const CreateWorkoutTemplateForm = ({ setOpenForm }) => {
  function addExercise(e) {
    e.preventDefault();
  }

  return (
    <div className="">
      <form className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <input type="text" defaultValue="Workout Name"></input>
            <input type="text" placeholder="Notes" />
          </div>
          <button
            type="button"
            className="bg-green-500 text-white px-2 pt-1 rounded-md"
          >
            Finish
          </button>
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
              <LoginForm />
            </Modal.Window>
          </Modal>
        </div>
      </form>
    </div>
  );
};

export default CreateWorkoutTemplateForm;
