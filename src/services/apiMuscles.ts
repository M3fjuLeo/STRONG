import supabase from "./supabase";

export async function getMuscles() {
  const { data, error } = await supabase.from("muscles").select("*");

  if (error) {
    console.error(error.message);
    throw new Error("Error fetching exercises:");
  }

  return { data };
}
