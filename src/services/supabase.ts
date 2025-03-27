import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kheedgqhgjikmbihypub.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoZWVkZ3FoZ2ppa21iaWh5cHViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwNTQzODEsImV4cCI6MjA0ODYzMDM4MX0.Q8BIwe6xlT1NakSuUbQPm1ibXc0wJEh_GtelRmTtcdA";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
