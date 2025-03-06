import { useQuery } from "@tanstack/react-query";
import { getMuscles } from "./apiMuscles";

export function useMuscles() {
  const {
    isLoading,
    data: { data: muscles } = {},
    error,
  } = useQuery({
    queryKey: ["muscles"],
    queryFn: () => getMuscles(),
  });

  return { isLoading, muscles, error };
}
