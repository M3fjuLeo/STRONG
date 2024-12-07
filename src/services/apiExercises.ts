import supabase from "./supabase";

export interface Exercise {
  id: number;
  name: string;
  muscleGroup: string;
  equipment: string;
  description: string;
}

export async function getExercises() {
  const { data, error } = await supabase
    .from<Exercise>("Exercises")
    .select("id, name, muscleGroup, equipment, description");

  if (error) {
    console.error("Error fetching exercises:", error.message);
    return { data: null };
  }

  return { data };
}
