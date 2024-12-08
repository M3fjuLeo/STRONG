import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createExercise as createExerciseApi } from "../../services/apiExercises";

export function useCreateExercise() {
  const queryClient = useQueryClient();

  const { mutate: createExercise, status } = useMutation({
    mutationFn: createExerciseApi,
    onSuccess: () => {
      toast.success("New exercise successfully created");
      queryClient.invalidateQueries({ queryKey: ["exercises"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const isCreating = status === "pending";
  return { createExercise, isCreating };
}
