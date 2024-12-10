import supabase from "./supabase";

export interface Exercise {
  id: number;
  name: string;
  muscleGroup: string;
  equipment: string;
  description: string;
}

export async function getExercises() {
  const { data, error } = await supabase.from("exercises").select("*");

  if (error) {
    console.error(error.message);
    throw new Error("Error fetching exercises:");
  }

  return { data };
}

export async function createExercise(newExercise: Omit<Exercise, "id">) {
  // Omit usówa pole 'id' poniewaz baza danych sama ustawia 'id'

  const { data, error } = await supabase
    .from("exercises")
    .insert([newExercise])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export default { getExercises };

export async function deleteExercise(id: number | string) {
  const { error } = await supabase.from("exercises").delete().eq("id", id);

  if (error) {
    throw new Error("Exercise could not be deleted");
  }
}
