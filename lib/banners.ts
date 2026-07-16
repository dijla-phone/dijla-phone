import { supabase } from "./supabase";

export async function getBanners() {
  const { data, error } = await supabase
    .from("banners")
    .select("*")
    .eq("active", true)
    .order("sort_order");

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}