import { supabase } from "./supabase";
import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("id");

  console.log("Supabase Data:", data);
  console.log("Supabase Error:", error);

  if (error) {
    throw new Error(error.message);
  }

  return data as Product[];
}