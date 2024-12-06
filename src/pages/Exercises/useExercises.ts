import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getExercises } from "../../services/apiExercises";

export function useExercises() {
  const queryClient = useQueryClient();

  const {
    isLoading,
    data: { data: exercises } = {},
    error,
  } = useQuery({
    queryKey: ["exercises"],
    queryFn: () => getExercises(),
  });

  return { isLoading, exercises, error };
}
