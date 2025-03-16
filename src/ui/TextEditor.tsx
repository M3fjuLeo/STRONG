import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useAppSelector } from "../services/MuscleSlice";
import { useCreateEditMuscleDescription } from "../services/useCreateEditMuscleDescription";
import { useMuscles } from "../services/useMuscles";
import Button from "./Button";
import SpinnerMini from "./SpinnerMini";

interface TextEditorProps {
  setIsEditing: (isEditing: boolean) => void;
}

const TextEditor = ({ setIsEditing }: TextEditorProps) => {
  const selectedMuscleId = useAppSelector((state) => state.muscle.muscleId);
  const { createEditMuscleDescription, isUpdating } =
    useCreateEditMuscleDescription();
  const [description, setDescription] = useState("");
  const { muscles } = useMuscles();

  const selectedMuscle = muscles?.find(
    (muscle) => muscle.name === selectedMuscleId
  );

  const textareaDescription = selectedMuscle?.description;

  const handleSubmit = async () => {
    if (!selectedMuscleId) {
      console.log("No muscle selected!");
      return;
    }
    setIsEditing(false);

    createEditMuscleDescription({ id: selectedMuscleId, description });
  };

  return (
    <div className="p-2 flex flex-col gap-2">
      <textarea
        className="border p-2"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Update description about this muscle..."
        defaultValue={textareaDescription}
        name="muscleDescription"
        id=""
        cols={30}
        rows={6}
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
