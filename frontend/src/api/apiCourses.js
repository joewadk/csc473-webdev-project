import supabaseClient from "@/utils/supabase";

export async function getCourses(token) {
  const supabase = await supabaseClient(token);

  // let query = supabase.from("course_enrollments").select("*"); 
  let query = supabase.from("course_enrollments").select(`*,
    courses:course_id (
      *
    )`);

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching courses:", error);
    return null;
  }

  return data;
}
