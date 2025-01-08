import { useQueryClient } from "@tanstack/react-query";
import { Exercise } from "../services/apiExercises";

export function useTemplate() {
  const queryClient = useQueryClient();

  // Pobranie aktualnych danych o wybranych ćwiczeniach
  const getSelectedExercises = (): Exercise[] => {
    return queryClient.getQueryData<Exercise[]>(["selectedExercises"]) || [];
  };

  // Dodanie ćwiczenia do listy wybranych
  const addExerciseToSelected = (exercise: Exercise) => {
    const currentExercises = getSelectedExercises();
    if (!currentExercises.some((e) => e.id === exercise.id)) {
      queryClient.setQueryData(
        ["selectedExercises"],
        [...currentExercises, exercise]
      );
      queryClient.invalidateQueries({ queryKey: ["selectedExercises"] });
    }
  };

  // Usunięcie ćwiczenia z listy wybranych
  const removeExerciseFromSelected = (exerciseId: string) => {
    const currentExercises = getSelectedExercises();
    queryClient.setQueryData(
      ["selectedExercises"],
      currentExercises.filter((e) => e.id !== Number(exerciseId))
    );
  };

  // Wyczyść listę wybranych ćwiczeń
  const clearSelectedExercises = () => {
    queryClient.setQueryData(["selectedExercises"], []);
  };

  return {
    getSelectedExercises,
    addExerciseToSelected,
    removeExerciseFromSelected,
    clearSelectedExercises,
  };
}
