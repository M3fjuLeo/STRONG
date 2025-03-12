import supabase from "./supabase";

export async function getMuscles() {
  const { data, error } = await supabase.from("muscles").select("*");

  if (error) {
    console.error(error.message);
    throw new Error("Error fetching exercises:");
  }

  return { data };
}

export async function createEditMuscleDescription(
  muscleId: string,
  description: string
) {
  const { data: existingMuscle, error: fetchError } = await supabase
    .from("muscles")
    .select("*")
    .eq("name", muscleId)
    .single();

  let data, error;

  if (existingMuscle) {
    ({ data, error } = await supabase
      .from("muscles")
      .update({ description })
      .eq("name", muscleId)
      .select()
      .single());
  } else {
    ({ data, error } = await supabase
      .from("muscles")
      .insert([{ name: muscleId, description }])
      .select()
      .single());
    console.log(data);
  }

  if (error) {
    console.error(error);
    throw new Error("Could not create or update muscle description");
  }

  return data;
}
