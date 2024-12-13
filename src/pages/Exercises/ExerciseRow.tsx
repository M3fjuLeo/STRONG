import React from "react";
import { useDeleteExercise } from "./useDeleteExercise";
import { FaTrashAlt } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import Modal from "../../ui/Modal";
import ExerciseInfo from "../../components/ExerciseInfo";
import ConfirmDelete from "../../ui/ConfirmDelete";

interface ExerciseRowProps {
  exercise: {
    id: string;
    name: string;
    image: string;
    muscleGroup: string;
    equipment: string;
  };
}

const ExerciseRow = ({ exercise }: ExerciseRowProps) => {
  const { isDeleting, deleteExercise } = useDeleteExercise();

  const { id, name, muscleGroup, equipment, image } = exercise;

  return (
    <div
      key={id}
      className="grid sm:grid-cols-3 p-4 items-center border-b-[1px] relative"
    >
      <span className="font-bold">{name}</span>
      <span>{muscleGroup}</span>
      <span className="hidden sm:block">{equipment}</span>
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <Modal>
          <Modal.Open opens="info">
            <button
              type="button"
              className="p-2 hover:bg-gray-50 lg:p-3 rounded-md cursor-pointer"
            >
              <FaInfo />
            </button>
          </Modal.Open>

          <Modal.Open opens="delete">
            <button
              type="button"
              className="p-2 hover:bg-gray-50 lg:p-3 rounded-md cursor-pointer"
            >
              <FaTrashAlt />
            </button>
          </Modal.Open>

          <Modal.Window name="delete">
            <ConfirmDelete
              onClick={() => deleteExercise(id)}
              disabled={isDeleting}
            />
          </Modal.Window>

          <Modal.Window name="info">
            <ExerciseInfo exercise={exercise} />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
};

export default ExerciseRow;
