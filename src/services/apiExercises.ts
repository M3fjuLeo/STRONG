import supabase, { supabaseUrl } from "./supabase";

export interface Exercise {
  id: number;
  name: string;
  muscleGroup: string;
  equipment: string;
  description: string;
  image: File;
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

  const imageName = `${Math.random()}-${newExercise.image.name}`.replace(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/exercise-images/${imageName}`;

  const { error: storageError } = await supabase.storage
    .from("exercise-images")
    .upload(imageName, newExercise.image);

  if (storageError) {
    console.error(storageError);
    throw new Error("Image could not be uploaded");
  }

  const { data, error } = await supabase
    .from("exercises")
    .insert([{ ...newExercise, image: imagePath || null }])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Exercise could not be created");
  }

  return data;
}

export async function deleteExercise(id: number | string) {
  const { error } = await supabase.from("exercises").delete().eq("id", id);

  if (error) {
    throw new Error("Exercise could not be deleted");
  }
}
export default { getExercises };
