import supabase from "./supabase";

export type Exercise = {
  id: number;
  name: string;
  muscleGroup: string;
  description: string;
};

export async function getExercises() {
  let { data, error } = await supabase
    .from<Exercise, any>("Exercises")
    .select("id, name, muscleGroup, description");

  return { data };
}
