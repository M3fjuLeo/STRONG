import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditMuscleDescription as createEditMuscleDescriptionApi } from "./apiMuscles";

export function useCreateEditMuscleDescription() {
  const queryClient = useQueryClient();

  const { mutate: createEditMuscleDescription, status } = useMutation({
    mutationFn: ({ id, description }: { id: string; description: string }) =>
      createEditMuscleDescriptionApi(id, description),
    onSuccess: () => {
      toast.success("Muscle description updated successfully");
      queryClient.invalidateQueries({ queryKey: ["muscles"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const isUpdating = status === "pending";
  return { createEditMuscleDescription, isUpdating };
}
