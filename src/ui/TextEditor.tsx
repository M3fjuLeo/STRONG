import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useAppSelector } from "../services/MuscleSlice";
import { useCreateEditMuscleDescription } from "../services/useCreateEditMuscleDescription";
import Button from "./Button";
import SpinnerMini from "./SpinnerMini";

const TextEditor = () => {
  const selectedMuscleId = useAppSelector((state) => state.muscle.muscleId);
  const { createEditMuscleDescription, isUpdating } =
    useCreateEditMuscleDescription();
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    if (!selectedMuscleId) {
      console.log("No muscle selected!");
      return;
    }

    console.log(description);

    createEditMuscleDescription({ id: selectedMuscleId, description });
  };

  return (
    <div className="p-2 flex flex-col gap-2">
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        name="muscleDescription"
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <div className="flex justify-end">
        <Button
          type="submit"
          variant="primary"
          onClick={handleSubmit}
          disabled={false}
        >
          {isUpdating ? <SpinnerMini /> : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default TextEditor;
