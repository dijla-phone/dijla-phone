import { supabase } from "./supabase";

export async function getBrands() {
  const { data, error } = await supabase
    .from("brands")
    .select("*");

  console.log("Brands Data:", data);
  console.log("Brands Error:", error);

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}