import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteExercise as deleteExerciseApi } from "../../services/apiExercises";

export function useDeleteExercise() {
  const queryClient = useQueryClient();

  const { mutate: deleteExercise, status } = useMutation({
    mutationFn: deleteExerciseApi,
    onSuccess: () => {
      toast.success("Exercise was successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["exercises"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const isDeleting = status === "pending";
  return { deleteExercise, isDeleting };
}
